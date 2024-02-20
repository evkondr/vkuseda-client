import { createSlice } from '@reduxjs/toolkit';

type authState = {
  token: null | string,
  loading: boolean,
  error: null | Error,
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
});

export default authSlice.reducer;
