import React from 'react';
import {
  Box, Button, Drawer,
} from '@mui/material/';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { TMenuItemLink } from '../../types';

type TNavBarProps = {
  menuItems: TMenuItemLink[],
  footer?: boolean
  phoneNumber?: string,
  drawer: React.ReactNode,
  mobileOpen: boolean,
  handleDrawerToggle: () => void
}
const NavBar = ({
  menuItems, footer, phoneNumber, drawer, mobileOpen, handleDrawerToggle,
}:TNavBarProps) => {
  return (
    <>
      <Box component="nav" className={footer ? 'nav__footer' : ''} sx={{ display: { xs: 'none', md: 'block' } }}>
        {menuItems.map((item:TMenuItemLink) => (
          <Button key={item.name} href={item.link} color="inherit">
            {item.name}
          </Button>
        ))}
        {phoneNumber && (
        <Button href="tel:+79023001991" color="inherit">
          <PhoneIphoneIcon />
          {phoneNumber}
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
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
