/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userLogin } from '../../http/authAPI';

// type TLoginResponse = {
//   message: string,
//   result: {
//     token: string
//   }
// }
const login = createAsyncThunk<any, {login:string, password:string}, {
  rejectValue:string
}>(
  'auth/login',
  // if you type your function argument here
  async (loginPayload, { rejectWithValue }) => {
    try {
      const response = await userLogin(loginPayload.login, loginPayload.password);
      return response;
    } catch (error) {
      return rejectWithValue('err');
    }
  },
);
export default login;
