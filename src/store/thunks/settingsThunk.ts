import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import { TAllSettings, TSettings } from '../../types';
import { logout } from '../features/authSlice';
import SettingsService from '../../http/settingsService';

const asyncThunkName = createAsyncThunkName('settings');

// eslint-disable-next-line import/prefer-default-export
export const getAllSettingsAdminAsync = createAsyncThunk<TAllSettings, undefined, { rejectValue: string }>(asyncThunkName('getAllSettingsAdmin'), async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await SettingsService.getAllSettingsAdminSide();
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

export const getAllSettingsClientAsync = createAsyncThunk<TAllSettings, undefined, { rejectValue: string }>(asyncThunkName('getAllSettingsClient'), async (_, { rejectWithValue }) => {
  try {
    const response = await SettingsService.getAllSettingsClientSide();
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

export const updateAllSettingsAsync = createAsyncThunk<string, TSettings, { rejectValue: string }>(asyncThunkName('updateAllSettings'), async (values, { rejectWithValue, dispatch }) => {
  try {
    const response = await SettingsService.updateAllSettings(values);
    return response.result.message;
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
