import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Container, Box, Button, Drawer, List, ListItem, ListItemButton, Link, Divider,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import './header.scss';
import Logo from '../Logo/Logo';
import { TMenuItemLink } from '../../types';

const menuItems:TMenuItemLink[] = [
  {
    name: 'Главная',
    link: '#home',
  },
  {
    name: 'Наше меню',
    link: '#menu',
  },
  {
    name: 'О нас',
    link: '#about',
  },
  {
    name: 'Контакты',
    link: '#contacts',
  },
];
const phoneNumber = '+7 (902) 300 19 91';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <Box padding={1}>
          <Logo />
        </Box>
        <Divider />
        <Button href="tel:+79023001991" color="inherit">
          <PhoneIphoneIcon />
          {phoneNumber}
        </Button>
        {menuItems.map((item:TMenuItemLink) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link key={item.name} variant="button" underline="none" color="inherit" href={item.link} sx={{ textAlign: 'center', width: '100%' }}>
                {item.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <AppBar className="header" position="absolute">
      <Container maxWidth="lg" sx={{ display: 'flex' }} className="header__container">
        <Logo />
        <Box component="nav" sx={{ display: { xs: 'none', md: 'block' } }}>
          {menuItems.map((item:TMenuItemLink) => (
            <Button key={item.name} href={item.link} color="inherit">
              {item.name}
            </Button>
          ))}
          <Button href="tel:+79023001991" color="inherit">
            <PhoneIphoneIcon />
            {phoneNumber}
          </Button>
        </Box>
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
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '70%' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
};

export default Header;
