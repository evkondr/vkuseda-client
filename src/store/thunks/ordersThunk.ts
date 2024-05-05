import { isAxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../features/authSlice';
import createAsyncThunkName from '../../utils/createAsyncThunkName';
import { TOrder, TSendOrderValues } from '../../types';
import OrdersService from '../../http/ordersService';
import { updateOrder } from '../features/ordersSlice';

const asyncThunkName = createAsyncThunkName('orders');
// Get all orders
export const getAllOrdersAsync = createAsyncThunk<TOrder[], undefined, { rejectValue: string }>(asyncThunkName('getAllOrders'), async (_, { rejectWithValue, dispatch }) => {
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
// Update order
export const updateOrderAsync = createAsyncThunk<void, {id:string, isDone:boolean}, { rejectValue: string }>(asyncThunkName('updateOrder'), async (data, { rejectWithValue, dispatch }) => {
  try {
    const response = await OrdersService.updateOrder(data.id, { isDone: data.isDone });
    dispatch(updateOrder(data.id));
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
export const sendOrderAsync = createAsyncThunk<TOrder, TSendOrderValues, { rejectValue: string }>(asyncThunkName('getAllCategoriesOnClient'), async (order, { rejectWithValue }) => {
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
