import { createSlice } from '@reduxjs/toolkit';
import { IInitialState, TWeekDay } from '../../types';

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
});

export default currentDayMenuSlice.reducer;
