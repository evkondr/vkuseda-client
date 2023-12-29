/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { menuItems } from '../../tempDB';
import { TMenuItem } from '../../types';

type TMenuState = {
  allMenuItems: TMenuItem[],
  filtered: TMenuItem[],
  loading: boolean,
}
const initialState: TMenuState = {
  allMenuItems: menuItems,
  filtered: menuItems,
  loading: false,
};
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    filterMenu: (state, action: PayloadAction<string>) => {
      if (action.payload === 'Все') {
        state.filtered = state.allMenuItems;
      } else {
        state.filtered = state.allMenuItems
          .filter((item:TMenuItem) => item.category === action.payload);
      }
    },
  },
});
export const { filterMenu } = menuSlice.actions;
export default menuSlice.reducer;
