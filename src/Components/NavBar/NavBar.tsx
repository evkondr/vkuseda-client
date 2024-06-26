import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box, Button, Drawer,
} from '@mui/material/';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { TMenuItemLink } from '../../types';
import './style.scss';
import formatPhoneNumber from '../../utils/formatPhoneNumber';

type TNavBarProps = {
  menuItemsLinks: TMenuItemLink[],
  footer?: boolean
  phoneNumber?: string,
  children: React.ReactNode,
  mobileOpen: boolean,
  handleDrawerToggle: () => void
  activeClassName?: string
}
// className={({ isActive }) => (isActive ? 'active' : '')}
const NavBar = ({
  menuItemsLinks,
  footer, phoneNumber, children, mobileOpen, handleDrawerToggle, activeClassName,
}:TNavBarProps) => {
  return (
    <>
      <Box component="nav" className={footer ? 'nav nav__footer' : 'nav'} sx={{ display: { xs: 'none', md: 'flex' } }}>
        {menuItemsLinks.map((item:TMenuItemLink) => (
          <NavLink key={item.name} to={item.link} className={({ isActive }) => (isActive ? activeClassName : '')}>
            <Button key={item.name} color="inherit">
              {item.name}
            </Button>
          </NavLink>
        ))}
        {phoneNumber && (
        <Button href={`tel:+7${phoneNumber}`} color="inherit">
          <PhoneIphoneIcon />
          {formatPhoneNumber(phoneNumber)}
        </Button>
        )}
      </Box>
      <nav style={{ position: 'absolute' }}>
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
          {children}
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
