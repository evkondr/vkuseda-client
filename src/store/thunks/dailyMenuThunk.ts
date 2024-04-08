import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import { TWeekDay } from '../../types';
import DailyMenuService from '../../http/dailyMenuService';

const asyncThuncName = createAsyncThunkName('daily-menu');

export const getAllDaysAsync = createAsyncThunk<TWeekDay[], undefined, { rejectValue: string }>(asyncThuncName('allWeekDays'), async (_, { rejectWithValue }) => {
  try {
    const response = await DailyMenuService.getAllWeekDays();
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
// Add week day
export const addWeekDayAsync = createAsyncThunk<TWeekDay, string, { rejectValue: string }>(asyncThuncName('addWeekDay'), async (name, { rejectWithValue }) => {
  try {
    const response = await DailyMenuService.addWeekDay(name);
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
