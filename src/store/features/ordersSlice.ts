/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IInitialState, TOrder } from '../../types';
import { getAllOrdersAsync, sendOrderAsync, updateOrderAsync } from '../thunks/ordersThunk';

interface IOrdersState extends IInitialState {
  orders: TOrder[],
}
const initialState:IOrdersState = {
  orders: [],
  loading: false,
  error: undefined,
};

const categoriesSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    updateOrder(state, action) {
      state.orders = state.orders.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllOrdersAsync.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.loading = false;
    });
    builder.addCase(updateOrderAsync.fulfilled, (state) => {
      state.error = undefined;
      state.loading = false;
      toast.success('Статус заказа обновлен');
    });
    builder.addCase(sendOrderAsync.fulfilled, (state, action) => {
      state.orders.push(action.payload);
      state.loading = false;
      toast.success('Заказ успешно отправлен');
    });
    // Matching for loader
    builder.addMatcher(isAnyOf(
      getAllOrdersAsync.pending,
      sendOrderAsync.pending,
    ), (state) => {
      state.loading = true;
      state.error = undefined;
    });
    // Matching for error
    builder.addMatcher(
      isAnyOf(
        getAllOrdersAsync.rejected,
        sendOrderAsync.rejected,
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      },
    );
  },
});
export default categoriesSlice.reducer;
export const { updateOrder } = categoriesSlice.actions;
