/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { checkAuthAsync, loginUser } from '../thunks/authThunks';
import TokenManager from '../../utils/tokenManager';
import { IInitialState } from '../../types';

interface IAuthState extends IInitialState{
  token: undefined | string,
  isAuth: boolean,
}

const initialState:IAuthState = {
  token: undefined,
  isAuth: false,
  loading: false,
  error: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkAuth: (state) => {
      const isToken = TokenManager.getValue();
      if (isToken) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
    },
    logout: (state) => {
      TokenManager.removeValue();
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.result.token;
      TokenManager.save(state.token as string);
      toast.success(action.payload.message);
      state.isAuth = true;
      state.loading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
      toast.error(action.payload);
    });
    // Check auth
    builder.addCase(checkAuthAsync.fulfilled, (state) => {
      state.isAuth = true;
      state.loading = false;
    });
    builder.addCase(checkAuthAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkAuthAsync.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
      toast.error(action.payload);
    });
  },
});

export const { checkAuth, logout } = authSlice.actions;
export default authSlice.reducer;
