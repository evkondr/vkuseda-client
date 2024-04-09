import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import { TWeekDay } from '../../types';
import DailyMenuService from '../../http/dailyMenuService';
import { logout } from '../features/authSlice';
import { deleteWeekDay } from '../features/dailyMenuSlice';

const asyncThuncName = createAsyncThunkName('daily-menu');

export const getAllDaysAsync = createAsyncThunk<TWeekDay[], undefined, { rejectValue: string }>(asyncThuncName('allWeekDays'), async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await DailyMenuService.getAllWeekDays();
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
// Add week day
export const addWeekDayAsync = createAsyncThunk<TWeekDay, string, { rejectValue: string }>(asyncThuncName('addWeekDay'), async (name, { rejectWithValue, dispatch }) => {
  try {
    const response = await DailyMenuService.addWeekDay(name);
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
// Delete week day
export const deleteWeekDayAsync = createAsyncThunk<string, string, { rejectValue: string }>(asyncThuncName('deleteWeekDay'), async (dayId, { rejectWithValue, dispatch }) => {
  try {
    const response = await DailyMenuService.deleteWeekDay(dayId);
    dispatch(deleteWeekDay(dayId));
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
