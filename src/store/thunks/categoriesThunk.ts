import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCategory } from '../../types';
import fetchAllCategories from '../../http/categoryAPI';
import { logout } from '../features/authSlice';

const getAllCategoriesAsync = createAsyncThunk<TCategory[], undefined, { rejectValue: string }>('categories/getAllCategories', async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetchAllCategories();
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

export default getAllCategoriesAsync;
