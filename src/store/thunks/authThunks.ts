/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { userLogin } from '../../http/authAPI';

type TLoginResponse = {
  message: string,
  result: {
    token: string
  }
}
const loginUser = createAsyncThunk<
TLoginResponse,
{login:string, password:string},
{
  rejectValue:string
}>('auth/login', async (loginPayload, { rejectWithValue }) => {
  try {
    const response = await userLogin(loginPayload.login, loginPayload.password);
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
export default loginUser;
