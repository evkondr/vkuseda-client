import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MenuFilter from '../MenuFilter/MenuFilter';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllDaysAsync, getCurrentDayAsync } from '../../store/thunks/dailyMenuThunk';
import Loader from '../Loader/Loader';
import MenuItem from '../MenuItem/MenuItem';
import { TMenuItem, TWeekDayUnion } from '../../types';
import { addToCart } from '../../store/features/cartSlice';
import compareWeekDay from '../../utils/compareWeekDay';

const DailyMenuClientPage = () => {
  // State
  const { weekDays, loading } = useAppSelector((state) => state.dailyMenu);
  const {
    currentDayMenu,
    loading: loadingCurrent,
  } = useAppSelector((state) => state.currentDayMenu);
  const dispatch = useAppDispatch();
  const isCurrentDay = compareWeekDay(currentDayMenu?.name as TWeekDayUnion);
  // Handlers
  const handleFilter = (name: string) => {
    dispatch(getCurrentDayAsync(name));
  };
  const addToCartHandelr = (menuItem: TMenuItem) => {
    const {
      id, name, price,
    } = menuItem;
    dispatch(addToCart({
      id, name, price, amount: 1, totalPrice: price,
    }));
  };
  console.log(weekDays);
  // Effects
  useEffect(() => {
    dispatch(getAllDaysAsync());
  }, [dispatch]);
  useEffect(() => {
    if (weekDays.length > 0) {
      dispatch(getCurrentDayAsync(weekDays[0].name));
    }
  }, [dispatch, weekDays]);
  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <Box>
      <MenuFilter data={weekDays} handleFilter={handleFilter} />
      {loadingCurrent && <Loader />}
      <Grid container spacing={3} paddingTop={2}>
        {currentDayMenu?.menuItems.length === 0 && (
        <Box padding={2}>
          <Typography>Меню еще не добавлено</Typography>
        </Box>
        )}
        {currentDayMenu?.menuItems?.map((menuItem:TMenuItem) => (
          <Grid key={menuItem.id} item xs={12} sm={6} md={4} lg={3}>
            <MenuItem
              menuItem={menuItem}
              addToCurtHandler={
              isCurrentDay ? () => addToCartHandelr(menuItem) : undefined
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DailyMenuClientPage;
