/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IInitialState, TPromoItem } from '../../types';
import { addToPromoAsync, deleteFromPromoAsync, getAllPromoAsync } from '../thunks/promoThunk';

interface IPromoState extends IInitialState {
  promoItems: TPromoItem[];
}
const initialState:IPromoState = {
  promoItems: [],
  loading: false,
  error: undefined,
};
const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPromoAsync.fulfilled, (state, action) => {
      state.promoItems = action.payload;
      state.loading = false;
    });
    builder.addCase(addToPromoAsync.fulfilled, (state) => {
      toast.success('Запись успешно добавлена в промо');
      state.loading = false;
    });
    builder.addCase(deleteFromPromoAsync.fulfilled, (state) => {
      toast.success('Запись успешно удалена из промо');
      state.loading = false;
    });
    // Matching for loader
    builder.addMatcher(isAnyOf(
      getAllPromoAsync.pending,
      addToPromoAsync.pending,
      deleteFromPromoAsync.pending,
    ), (state) => {
      state.loading = true;
      state.error = undefined;
    });
    // Matching for error
    builder.addMatcher(
      isAnyOf(
        getAllPromoAsync.rejected,
        addToPromoAsync.rejected,
        deleteFromPromoAsync.rejected,
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      },
    );
  },
});
export default promoSlice.reducer;
