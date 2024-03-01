import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCategory } from '../../types';
import CategoriesService from '../../http/categoryAPI';
import { logout } from '../features/authSlice';
import createAsyncThunkName from '../../utils/createAsyncThunkName';

const asyncThuncName = createAsyncThunkName('categories');
// Get all categories
export const getAllCategoriesAsync = createAsyncThunk<TCategory[], undefined, { rejectValue: string }>(asyncThuncName('getAllCategories'), async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await CategoriesService.fetchAllCategories();
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
// Add category
export const addNewCategory = createAsyncThunk<TCategory, string, { rejectValue: string }>(asyncThuncName('addNewCategory'), async (name, { rejectWithValue }) => {
  try {
    const response = await CategoriesService.addNewCategory(name);
    return response.result;
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
