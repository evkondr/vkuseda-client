/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartItem } from '../../types';

type TCartState = {
  cartItems: TCartItem[],
  amount: number,
  total: number,
  loading: boolean,
}

const initialState: TCartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  loading: false,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<TCartItem>) => {
      const tempItem = state.cartItems.find((item:TCartItem) => item.id === payload.id);
      if (tempItem) {
        state.cartItems = state.cartItems.map((item:TCartItem) => {
          if (item.id === payload.id) {
            return {
              ...item,
              amount: item.amount + 1,
              price: item.price + payload.price,
            };
          }
          return item;
        });
      } else {
        state.cartItems = [...state.cartItems, payload];
      }
      state.amount += 1;
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
