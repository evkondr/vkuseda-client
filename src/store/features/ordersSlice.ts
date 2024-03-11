/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IStateStdProps, TOrder } from '../../types';
import { getAllOrdersAsync, sendOrderAsync } from '../thunks/ordersThunk';

interface IOrdersState extends IStateStdProps {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrdersAsync.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.loading = false;
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
