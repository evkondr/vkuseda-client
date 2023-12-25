import React from 'react';
import { Box, Container } from '@mui/material/';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { menuItemsLinks } from '../../tempDB';

const MainPage = () => {
  return (
    <>
      <Header position="fixed" menuItemsLinks={menuItemsLinks} cart />
      <Box component="section">
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default MainPage;
