/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IInitialState, TAllSettings } from '../../types';
import { getAllSettingsAsync, updateAllSettingsAsync } from '../thunks/settingsThunk';

interface ISettingsState extends IInitialState {
  settings: TAllSettings
}
const initialState:ISettingsState = {
  settings: {
    boolSettings: [],
    textSettings: [],
  },
  loading: false,
  error: undefined,
};
const settitngsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSettingsAsync.fulfilled, (state, action) => {
      state.settings = action.payload;
      state.loading = false;
    });
    builder.addCase(updateAllSettingsAsync.fulfilled, (state) => {
      state.loading = false;
      toast.success('Настройки успешно сохранены');
    });
    // Matching for loader
    builder.addMatcher(isAnyOf(
      getAllSettingsAsync.pending,
      updateAllSettingsAsync.pending,
    ), (state) => {
      state.loading = true;
      state.error = undefined;
    });
    // Matching for error
    builder.addMatcher(
      isAnyOf(
        getAllSettingsAsync.rejected,
        updateAllSettingsAsync.rejected,
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      },
    );
  },
});
export default settitngsSlice.reducer;
