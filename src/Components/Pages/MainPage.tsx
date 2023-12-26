import React from 'react';
import { Box, Container } from '@mui/material/';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { mainPageMenuItemLinks } from '../../tempDB';

const MainPage = () => {
  return (
    <>
      <Header position="fixed" menuItemsLinks={mainPageMenuItemLinks} cart />
      <Box component="section">
        <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default MainPage;
