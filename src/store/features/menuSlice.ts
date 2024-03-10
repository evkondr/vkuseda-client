/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IStateStdProps, TMenuItem } from '../../types';
import {
  getMenuItemsAync,
  addNewMenuItem, deleteMenuItem, getMenuItemsOnClientAync,
} from '../thunks/menuItemsThunk';
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
          .filter((item:TMenuItem) => item.category.name === action.payload);
      }
    },
    addOrDeleteFromPromo: (state, action: PayloadAction<string>) => {
      state.menuItems = state.menuItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isInPromo: item.isInPromo };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMenuItemsAync.fulfilled, (state, action) => {
      state.menuItems = action.payload;
      state.loading = false;
    });
    builder.addCase(getMenuItemsOnClientAync.fulfilled, (state, action) => {
      state.menuItems = action.payload;
      state.loading = false;
    });
    builder.addCase(addNewMenuItem.fulfilled, (state, action) => {
      state.menuItems.push(action.payload);
      state.loading = false;
    });
    builder.addCase(deleteMenuItem.fulfilled, (state) => {
      toast.success('Запись успешно удалена');
      state.loading = false;
    });
    // Matching for loader
    builder.addMatcher(isAnyOf(
      getMenuItemsAync.pending,
      addNewMenuItem.pending,
      deleteMenuItem.pending,
      getMenuItemsOnClientAync.pending,
    ), (state) => {
      state.loading = true;
      state.error = undefined;
    });
    // Matching for error
    builder.addMatcher(
      isAnyOf(
        getAllCategoriesAsync.rejected,
        addNewMenuItem.rejected,
        deleteMenuItem.rejected,
        getMenuItemsOnClientAync.rejected,
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      },
    );
  },
});
export const { filterMenu, addOrDeleteFromPromo } = menuSlice.actions;
export default menuSlice.reducer;
