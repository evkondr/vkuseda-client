/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import loginUser from '../thunks/authThunks';

type authState = {
  token: null | string,
  loading: boolean,
  error: null | string,
};
const initialState:authState = {
  token: null,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(loginUser.pending, () => {
      console.log('loading');
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;
