import React from 'react';
import {
  Container, Box,
} from '@mui/material/';
import Logo from '../Logo/Logo';
import './style.scss';

const Footer = () => {
  return (
    <Box component="section" className="footer">
      <Container maxWidth="lg">
        <Logo />
      </Container>
    </Box>
  );
};

export default Footer;
