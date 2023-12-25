import React from 'react';
import { Box, Container } from '@mui/material/';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const MainPage = () => {
  return (
    <>
      <Header />
      <Box component="section">
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default MainPage;
