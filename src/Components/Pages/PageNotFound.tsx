import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const PageNotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      rowGap={2}
    >
      <Logo />
      <Typography>Страница не найдена</Typography>
      <Button variant="contained" color="primary">
        <Link style={{ textDecoration: 'none' }} to="main/menu">Главная</Link>
      </Button>
    </Box>
  );
};

export default PageNotFound;
