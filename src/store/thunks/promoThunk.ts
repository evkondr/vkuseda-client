import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../features/authSlice';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import PromoService from '../../http/promoService';
import { TMenuItem } from '../../types';

const asyncThuncName = createAsyncThunkName('promoItems');
// Get all categories
const getAllPromoAsync = createAsyncThunk<TMenuItem[], undefined, { rejectValue: string }>(asyncThuncName('getAllpromos'), async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await PromoService.getAllPromos();
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
export default getAllPromoAsync;
