import React, { useState } from 'react';
import {
  Container, Box, IconButton,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Logo/Logo';
import './style.scss';
import { menuItemLinks } from '../../tempDB';
import NavBar from '../NavBar/NavBar';
import MemuDrawer from '../MenuDrawer/MemuDrawer';

const phoneNumber = '+7 (902) 300 19 91';

const Footer = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <Box component="section" className="footer">
      <Container maxWidth="lg" sx={{ display: 'flex' }} className="footer__container">
        <Logo />
        <NavBar
          menuItems={menuItemLinks}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          phoneNumber={phoneNumber}
          footer
        >
          <MemuDrawer
            handleDrawerToggle={handleDrawerToggle}
            menuItemLinks={menuItemLinks}
            phoneNumber={phoneNumber}
          />
        </NavBar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Footer;
