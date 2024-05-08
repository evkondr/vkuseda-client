/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IInitialState, TWeekDay } from '../../types';
import { getCurrentDayAsync } from '../thunks/dailyMenuThunk';

interface ICurrentDayMenuState extends IInitialState {
    currentDayMenu: TWeekDay | undefined
}

const initialState:ICurrentDayMenuState = {
  currentDayMenu: undefined,
  loading: false,
  error: undefined,
};

const currentDayMenuSlice = createSlice({
  name: 'current-day-menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentDayAsync.fulfilled, (state, action) => {
      state.currentDayMenu = action.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addMatcher(isAnyOf(
      getCurrentDayAsync.pending,
    ), (state) => {
      state.loading = true;
      state.error = undefined;
    });
    // Matching for error
    builder.addMatcher(
      isAnyOf(
        getCurrentDayAsync.rejected,
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      },
    );
  },
});

export default currentDayMenuSlice.reducer;
