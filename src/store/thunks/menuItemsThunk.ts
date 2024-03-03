import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TMenuItem } from '../../types';
import { logout } from '../features/authSlice';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import MenuItemsService from '../../http/menuItemsService';

const asyncThuncName = createAsyncThunkName('categories');

const getMenuItemsService = createAsyncThunk<TMenuItem[], undefined, { rejectValue: string }>(asyncThuncName('getAllCategories'), async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await MenuItemsService.fetchAllMenuItems();
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
export default getMenuItemsService;
