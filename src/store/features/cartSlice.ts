/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartItem } from '../../types';
import StorageManager from '../../utils/storageManager';

const storage = new StorageManager();

type TCartState = {
  cartItems: TCartItem[],
  amount: number,
  total: number,
  loading: boolean,
}

const initialState: TCartState = {
  cartItems: storage.getCartValues().cartItems,
  amount: storage.getCartValues().amount,
  total: storage.getCartValues().total,
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
              totalPrice: item.totalPrice + item.price,
            };
          }
          return item;
        });
      } else {
        state.cartItems = [...state.cartItems, payload];
      }
      state.amount += 1;
      storage.setCartValues({
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      });
    },
    changeAmount: (state, { payload }:PayloadAction<{id:string, action:string}>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (payload.id === item.id) {
          if (payload.action === 'increase') {
            item.amount += 1;
            state.amount += 1;
            item.totalPrice += item.price;
          }
          if (payload.action === 'decrease') {
            if (item.amount > 1) {
              item.amount -= 1;
              state.amount -= 1;
              item.totalPrice -= item.price;
            }
          }
        }
        return item;
      });
      storage.setCartValues({
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      });
    },
    calculateTotal: (state) => {
      state.total = 0;
      state.cartItems.forEach((item) => {
        state.total += item.totalPrice;
      });
    },
    removeCartItem: (state, { payload }:PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => {
        if (item.id === payload) {
          state.amount -= item.amount;
        }
        return item.id !== payload;
      });
      storage.setCartValues({
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
      storage.clearCartValues();
    },
  },
});
export const {
  addToCart, calculateTotal, changeAmount, removeCartItem, clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
