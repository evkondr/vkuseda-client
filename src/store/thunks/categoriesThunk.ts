import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCategory } from '../../types';
import fetchAllCategories from '../../http/categoryAPI';

const getAllCategoriesAsync = createAsyncThunk<TCategory[], { rejectValue: string }>('categories/getAllCategories', async (_, { rejectWithValue }) => {
  try {
    const result = await fetchAllCategories();
    return result;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Неизвестная ошибка');
  }
});

export default getAllCategoriesAsync;
