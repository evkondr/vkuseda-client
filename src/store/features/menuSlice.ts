/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IStateStdProps, TMenuItem } from '../../types';
import getMenuItemsService from '../thunks/menuItemsThunk';
import { getAllCategoriesAsync } from '../thunks/categoriesThunk';

interface IMenuState extends IStateStdProps {
  menuItems: TMenuItem[],
  filtered: TMenuItem[],
}
const initialState: IMenuState = {
  menuItems: [],
  filtered: [],
  loading: false,
  error: undefined,
};
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    filterMenu: (state, action: PayloadAction<string>) => {
      if (action.payload === 'Все') {
        state.filtered = state.menuItems;
      } else {
        state.filtered = state.menuItems
          .filter((item:TMenuItem) => item.category === action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMenuItemsService.fulfilled, (state, action) => {
      state.menuItems = action.payload;
      state.loading = false;
    });
    // Matching for loader
    builder.addMatcher(isAnyOf(
      getMenuItemsService.pending,
    ), (state) => {
      state.loading = true;
      state.error = undefined;
    });
    // Matching for error
    builder.addMatcher(
      isAnyOf(
        getAllCategoriesAsync.rejected,
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      },
    );
  },
});
export const { filterMenu } = menuSlice.actions;
export default menuSlice.reducer;
