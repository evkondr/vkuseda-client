/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IInitialState, TWeekDay } from '../../types';
import {
  addWeekDayAsync,
  addWeekDayMenuItemAsync, deleteWeekDayAsync, deleteWeekDayMenuItemAsync, getAllDaysAsync,
} from '../thunks/dailyMenuThunk';

interface IDailyMenu extends IInitialState {
  weekDays: TWeekDay[]
}
const initialState: IDailyMenu = {
  weekDays: [],
  loading: false,
  error: undefined,
};
const dailyMenuSlice = createSlice({
  name: 'daily-menu',
  initialState,
  reducers: {
    deleteWeekDay(state, action) {
      state.weekDays = state.weekDays.filter((day) => day.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllDaysAsync.fulfilled, (state, action) => {
      state.weekDays = action.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(addWeekDayAsync.fulfilled, (state, action) => {
      state.weekDays.push(action.payload);
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(deleteWeekDayAsync.fulfilled, (state) => {
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(addWeekDayMenuItemAsync.fulfilled, (state, action) => {
      const newDayMenu = action.payload;
      state.weekDays = state.weekDays.map((day) => {
        if (day.id === newDayMenu.id) {
          day.menuItems = [...newDayMenu.menuItems];
          return day;
        }
        return day;
      });
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(deleteWeekDayMenuItemAsync.fulfilled, (state, action) => {
      const newDayMenu = action.payload;
      state.weekDays = state.weekDays.map((day) => {
        if (day.id === newDayMenu.id) {
          day.menuItems = [...newDayMenu.menuItems];
          return day;
        }
        return day;
      });
      state.loading = false;
      state.error = undefined;
    });
    // Matching for loader
    builder.addMatcher(isAnyOf(
      getAllDaysAsync.pending,
      addWeekDayAsync.pending,
      deleteWeekDayAsync.pending,
      addWeekDayMenuItemAsync.pending,
    ), (state) => {
      state.loading = true;
      state.error = undefined;
    });
    // Matching for error
    builder.addMatcher(
      isAnyOf(
        getAllDaysAsync.rejected,
        addWeekDayAsync.rejected,
        deleteWeekDayAsync.rejected,
        addWeekDayMenuItemAsync.rejected,
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      },
    );
  },
});
export const { deleteWeekDay } = dailyMenuSlice.actions;
export default dailyMenuSlice.reducer;
