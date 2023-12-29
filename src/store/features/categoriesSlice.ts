import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../tempDB';
import { TCategory } from '../../types';

type TCategoriesState = {
  categories: TCategory[],
}
const initialState:TCategoriesState = {
  categories,
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
});
export default categoriesSlice.reducer;
