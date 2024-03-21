/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import AuthService from '../../http/authService';
import { TUser } from '../../types';
import { logout } from '../features/authSlice';

type TLoginResponse = {
  message: string,
  result: {
    token: string
  }
}
export const loginUser = createAsyncThunk<
TLoginResponse,
{login:string, password:string},
{
  rejectValue:string
}>('auth/login', async (loginPayload, { rejectWithValue }) => {
  try {
    const response = await AuthService.userLogin(loginPayload.login, loginPayload.password);
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Неизвестная ошибка');
  }
});
export const checkAuthAsync = createAsyncThunk<TUser, undefined, { rejectValue: string }>('auth/check', async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await AuthService.chechAuth();
    return response.result;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.data.message === 'jwt expired') {
        return dispatch(logout());
      }
      return rejectWithValue(error.response?.data.message);
    }
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Неизвестная ошибка');
  }
});
