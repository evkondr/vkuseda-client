import React from 'react';
import { Box, Container } from '@mui/material/';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Header from '../Header/Header';

const MainPage = () => {
  const { mainPageNavLinks } = useAppSelector((state) => state.navigation);
  return (
    <>
      <Header position="fixed" menuItemsLinks={mainPageNavLinks} cart />
      <Box component="section">
        <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default MainPage;
