/* eslint-disable react/no-unescaped-entities */
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
import { settingsConstants } from '../../app-data';
import { getAllSettingsClientAsync } from '../../store/thunks/settingsThunk';

const DailyMenuClientPage = () => {
  // State
  const { weekDays, loading } = useAppSelector((state) => state.dailyMenu);
  const {
    currentDayMenu,
    loading: loadingCurrent,
  } = useAppSelector((state) => state.currentDayMenu);
  const { settings: { boolSettings } } = useAppSelector((state) => state.settings);
  const orderOption = boolSettings.find((item) => item.name === settingsConstants.order);
  const dispatch = useAppDispatch();
  const isCurrentDay = compareWeekDay(currentDayMenu?.name as TWeekDayUnion);
  // Handlers
  const handleFilter = (name: string) => {
    dispatch(getCurrentDayAsync(name));
  };
  const addToCartHandler = (menuItem: TMenuItem) => {
    const {
      id, name, price,
    } = menuItem;
    dispatch(addToCart({
      id, name, price, amount: 1, totalPrice: price,
    }));
  };
  // Effects
  useEffect(() => {
    dispatch(getAllDaysAsync());
    dispatch(getAllSettingsClientAsync());
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
      <Box paddingTop={2} paddingBottom={2}>
        <Typography>
          На данной странице вы можете сделать заказ блюд в соответствующий день недели.
          С условиями доставки можно ознакомиться на странице "Доставка".
        </Typography>
      </Box>
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
              isCurrentDay && orderOption?.value ? () => addToCartHandler(menuItem) : undefined
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DailyMenuClientPage;
