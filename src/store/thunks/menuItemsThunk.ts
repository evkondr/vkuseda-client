import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TMenuItem, TMenuItemFormValues } from '../../types';
import { logout } from '../features/authSlice';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import MenuItemsService from '../../http/menuItemsService';

const asyncThuncName = createAsyncThunkName('menuItems');
// GET MENU ITEMS
export const getMenuItemsAync = createAsyncThunk<TMenuItem[], undefined, { rejectValue: string }>(asyncThuncName('getAllMenuItems'), async (_, { rejectWithValue, dispatch }) => {
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
export const getMenuItemsOnClientAync = createAsyncThunk<TMenuItem[], undefined, { rejectValue: string }>(asyncThuncName('getAllMenuItemsOnClient'), async (_, { rejectWithValue }) => {
  try {
    const response = await MenuItemsService.fetchAllMenuItemsOnClient();
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
// ADD MENU ITEM
export const addNewMenuItem = createAsyncThunk<TMenuItem, TMenuItemFormValues, { rejectValue: string }>(asyncThuncName('addNewMenuItem'), async (data, { rejectWithValue, dispatch }) => {
  try {
    const response = await MenuItemsService.addNewMenuItem(data, 'multipart/form-data');
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
// DELETE MENU ITEM
export const deleteMenuItem = createAsyncThunk<string, string, { rejectValue: string }>(asyncThuncName('deleteMenuItem'), async (id, { rejectWithValue, dispatch }) => {
  try {
    const response = await MenuItemsService.deleteMenuItem(id);
    dispatch(getMenuItemsAync());
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
