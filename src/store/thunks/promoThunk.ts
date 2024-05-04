import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../features/authSlice';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import PromoService from '../../http/promoService';
import { TPromoItem } from '../../types';
import { addOrDeleteFromPromo } from '../features/menuSlice';

const asyncThunkName = createAsyncThunkName('promoItems');
// Get all categories
export const getAllPromoAsync = createAsyncThunk<TPromoItem[], undefined, { rejectValue: string }>(asyncThunkName('getAllpromos'), async (_, { rejectWithValue, dispatch }) => {
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
export const addToPromoAsync = createAsyncThunk<TPromoItem[], string, { rejectValue: string }>(asyncThunkName('addToPromo'), async (menuItemId, { rejectWithValue, dispatch }) => {
  try {
    const response = await PromoService.addToPromo(menuItemId);
    dispatch(addOrDeleteFromPromo(menuItemId));
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
export const deleteFromPromoAsync = createAsyncThunk<undefined, string, { rejectValue: string }>(asyncThunkName('deleteFromPromo'), async (menuItemId, { rejectWithValue, dispatch }) => {
  try {
    const response = await PromoService.deleteFromPromo(menuItemId);
    dispatch(addOrDeleteFromPromo(menuItemId));
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
