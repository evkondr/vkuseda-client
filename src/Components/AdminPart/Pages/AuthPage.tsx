import React from 'react';
import { Box } from '@mui/material';
import LoginForm from '../Login/LoginForm';

const AuthPage = () => {
  return (
    <Box paddingTop={3} display="flex" justifyContent="center">
      <LoginForm />
    </Box>
  );
};

export default AuthPage;
