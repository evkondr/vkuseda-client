import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material/';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../Header/Header';
import { settingsConstants } from '../../app-data';
import { clearCart } from '../../store/features/cartSlice';
import { getAllSettingsClientAsync } from '../../store/thunks/settingsThunk';

const MainPage = () => {
  const { mainPageNavLinks } = useAppSelector((state) => state.navigation);
  const { amount, cartItems } = useAppSelector((state) => state.cart);
  const { weekDays } = useAppSelector((state) => state.dailyMenu);
  const { settings: { boolSettings, textSettings } } = useAppSelector((state) => state.settings);
  const endTime = textSettings.find((item) => item.name === settingsConstants.endTime);
  const isOrderOn = boolSettings.find((item) => item.name === settingsConstants.order);
  const currentTime = new Date().getHours();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  console.log(weekDays);
  const filteredMainPageNavLinks = mainPageNavLinks.filter((link) => {
    if (weekDays.length === 0) {
      if (link.name === 'Ежедневное меню') {
        return false;
      }
      return true;
    }
    return true;
  });
  // Effects
  useEffect(() => {
    if (location.pathname.match(/^\/main\/?$/)) {
      navigate('/main/menu');
    }
  }, [location, navigate]);
  useEffect(() => {
    dispatch(getAllSettingsClientAsync());
  }, [dispatch, location]);
  useEffect(() => {
    // If the current time is out of order range time or orders is turned off
    // and there are some items in the cart, we clear cart.
    if (isOrderOn && endTime) {
      if ((!isOrderOn.value || currentTime > Number(endTime.value)) && cartItems.length > 0) {
        dispatch(clearCart());
      }
    }
  }, [dispatch, isOrderOn, endTime, currentTime, cartItems]);
  return (
    <>
      <Header position="fixed" menuItemsLinks={filteredMainPageNavLinks} cart cartAmount={amount} activeClassName="active" />
      <Box component="section">
        <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default MainPage;
