import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import MenuFilter from '../MenuFilter/MenuFilter';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllDaysAsync, getCurrentDayAsync } from '../../store/thunks/dailyMenuThunk';

const DailyMenuClientPage = () => {
  // State
  const { weekDays } = useAppSelector((state) => state.dailyMenu);
  const { currentDayMenu } = useAppSelector((state) => state.currentDayMenu);
  const dispatch = useAppDispatch();
  const handleFilter = (name: string) => {
    dispatch(getCurrentDayAsync(name));
  };
  // Effects
  useEffect(() => {
    dispatch(getAllDaysAsync());
  }, [dispatch]);
  console.log(currentDayMenu);
  return (
    <Box>
      <MenuFilter data={weekDays} handleFilter={handleFilter} />
    </Box>
  );
};

export default DailyMenuClientPage;
