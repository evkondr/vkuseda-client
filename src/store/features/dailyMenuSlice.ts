/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IStateStdProps, TWeekDay } from '../../types';
import { addWeekDayAsync, deleteWeekDayAsync, getAllDaysAsync } from '../thunks/dailyMenuThunk';

interface IDailyMenu extends IStateStdProps {
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
    // Matching for loader
    builder.addMatcher(isAnyOf(
      getAllDaysAsync.pending,
      addWeekDayAsync.pending,
      deleteWeekDayAsync.pending,
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
