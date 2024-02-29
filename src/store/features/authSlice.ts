/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import loginUser from '../thunks/authThunks';
import TokenManager from '../../utils/tokenManager';
import { IStateStdProps } from '../../types';

interface IAuthState extends IStateStdProps{
  token: null | string,
  isAuth: boolean,
}

const initialState:IAuthState = {
  token: null,
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
      TokenManager.save(state.token);
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
  },
});

export const { checkAuth, logout } = authSlice.actions;
export default authSlice.reducer;
