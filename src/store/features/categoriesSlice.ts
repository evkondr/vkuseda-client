/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IStateStdProps, TCategory } from '../../types';
import getAllCategoriesAsync from '../thunks/categoriesThunk';

interface ICategoriesState extends IStateStdProps {
  categories: TCategory[],
}
const initialState:ICategoriesState = {
  categories: [],
  loading: false,
  error: null,
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});
export default categoriesSlice.reducer;
