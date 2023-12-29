import { configureStore } from '@reduxjs/toolkit';
import manuReducer from '../store/features/menuSlice';
import navReducer from '../store/features/navSlice';
import categoriesReducer from './features/categoriesSlice';

export const store = configureStore({
  reducer: {
    menu: manuReducer,
    navigation: navReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
