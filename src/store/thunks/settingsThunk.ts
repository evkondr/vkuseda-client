import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import { TAllSettings, TSettings } from '../../types';
import { logout } from '../features/authSlice';
import SettingsService from '../../http/settingsService';

const asyncThunkName = createAsyncThunkName('settings');

// eslint-disable-next-line import/prefer-default-export
export const getAllSettingsAsync = createAsyncThunk<TAllSettings, undefined, { rejectValue: string }>(asyncThunkName('getAllSettings'), async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await SettingsService.getAllSettings();
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
