import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import MenuFilter from '../MenuFilter/MenuFilter';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllDaysAsync, getCurrentDayAsync } from '../../store/thunks/dailyMenuThunk';
import Loader from '../Loader/Loader';

const DailyMenuClientPage = () => {
  // State
  const { weekDays, loading } = useAppSelector((state) => state.dailyMenu);
  const {
    currentDayMenu,
    loading: loadingCurrent,
  } = useAppSelector((state) => state.currentDayMenu);
  const dispatch = useAppDispatch();
  const handleFilter = (name: string) => {
    dispatch(getCurrentDayAsync(name));
  };
  // Effects
  useEffect(() => {
    dispatch(getAllDaysAsync());
  }, [dispatch]);
  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <Box>
      <MenuFilter data={weekDays} handleFilter={handleFilter} />
      {loadingCurrent && <Loader />}
      {currentDayMenu?.menuItems.map((item) => <p>{item.name}</p>)}
    </Box>
  );
};

export default DailyMenuClientPage;
