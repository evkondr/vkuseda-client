/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IStateStdProps, TMenuItem } from '../../types';
import getAllPromoAsync from '../thunks/promoThunk';

interface IPromoState extends IStateStdProps {
  promoItems: TMenuItem[];
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
    // Matching for loader
    builder.addMatcher(isAnyOf(
      getAllPromoAsync.pending,
    ), (state) => {
      state.loading = true;
      state.error = undefined;
    });
    // Matching for error
    builder.addMatcher(
      isAnyOf(
        getAllPromoAsync.rejected,
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
