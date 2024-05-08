import React, { useState } from 'react';
import {
  Container, Box, IconButton,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Logo/Logo';
import './style.scss';
import { menuItemsLinks } from '../../app-data';
import NavBar from '../NavBar/NavBar';
import MemuDrawer from '../MenuDrawer/MemuDrawer';

type TFooterProps = {
  phoneNumber: string | undefined
}
const Footer = ({ phoneNumber }:TFooterProps) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <Box component="section" className="footer">
      <Container maxWidth="lg" sx={{ display: 'flex' }} className="footer__container">
        <Logo />
        <NavBar
          menuItemsLinks={menuItemsLinks}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          phoneNumber={phoneNumber}
          footer
        >
          <MemuDrawer
            handleDrawerToggle={handleDrawerToggle}
            menuItemsLinks={menuItemsLinks}
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
