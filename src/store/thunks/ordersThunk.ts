import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../features/authSlice';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import { TOrder, TSendOrderValues } from '../../types';
import OrdersService from '../../http/ordersService';

const asyncThuncName = createAsyncThunkName('orders');
// Get all orders
export const getAllOrdersAsync = createAsyncThunk<TOrder[], undefined, { rejectValue: string }>(asyncThuncName('getAllOrders'), async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await OrdersService.getOrders();
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
// Send order
export const sendOrderAsync = createAsyncThunk<TOrder, TSendOrderValues, { rejectValue: string }>(asyncThuncName('getAllCategoriesOnClient'), async (order, { rejectWithValue }) => {
  try {
    const response = await OrdersService.sendOrder(order);
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
