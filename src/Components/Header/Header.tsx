import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Container,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import './header.scss';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import MemuDrawer from '../MenuDrawer/MemuDrawer';
import { menuItemLinks } from '../../tempDB';

const phoneNumber = '+7 (902) 300 19 91';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar className="header" position="absolute">
      <Container maxWidth="lg" sx={{ display: 'flex' }} className="header__container">
        <Logo />
        <NavBar
          menuItems={menuItemLinks}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          phoneNumber={phoneNumber}
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
          <MenuIcon />
        </IconButton>
      </Container>
    </AppBar>
  );
};

export default Header;
