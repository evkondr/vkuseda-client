import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Container,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import './header.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import MemuDrawer from '../MenuDrawer/MemuDrawer';
import { TMenuItemLink } from '../../types';
import CustomCartIcon from '../Cart/CustomCartIcon';

type THeaderProps = {
  menuItemsLinks: TMenuItemLink[],
  phoneNumber?: string,
  cart?: boolean
  cartAmount?: number,
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative' | undefined
}
const Header = ({
  menuItemsLinks, phoneNumber, position, cartAmount, cart,
}:THeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar className="header" position={position}>
      <Container maxWidth="lg" sx={{ display: 'flex' }} className="header__container">
        <Logo />
        <NavBar
          menuItemsLinks={menuItemsLinks}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          phoneNumber={phoneNumber}
        >
          <MemuDrawer
            handleDrawerToggle={handleDrawerToggle}
            menuItemsLinks={menuItemsLinks}
            phoneNumber={phoneNumber}
          />
        </NavBar>
        {cart && cartAmount !== undefined && (
        <Link to="cart">
          <CustomCartIcon amount={cartAmount} />
        </Link>
        ) }
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
