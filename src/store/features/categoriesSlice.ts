/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { IStateStdProps, TCategory } from '../../types';
import getAllCategoriesAsync from '../thunks/categoriesThunk';

interface ICategoriesState extends IStateStdProps {
  categories: TCategory[],
}
const initialState:ICategoriesState = {
  categories: [],
  loading: false,
  error: undefined,
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

    // Matching for loader
    builder.addMatcher(isAnyOf(getAllCategoriesAsync.pending), (state) => {
      state.loading = true;
    });
    // Matching for error
    builder.addMatcher(isAnyOf(getAllCategoriesAsync.rejected), (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default categoriesSlice.reducer;
