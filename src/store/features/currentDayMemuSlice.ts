/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IInitialState, TWeekDay } from '../../types';
// import { getCurrentDayAsync } from '../thunks/dailyMenuThunk';

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
  // extraReducers: (builder) => {
  //   builder.addCase(getCurrentDayAsync.fulfilled, (state, action) => {
  //     state.currentDayMenu = action.payload;
  //     state.loading = false;
  //     state.error = undefined;
  //   });
  // },
});

export default currentDayMenuSlice.reducer;
