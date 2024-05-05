import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Button, Drawer,
} from '@mui/material/';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { TMenuItemLink } from '../../types';
import './style.scss';
import formatPhoneNumber from '../../utils/formatPhoneNomber';

type TNavBarProps = {
  menuItemsLinks: TMenuItemLink[],
  footer?: boolean
  phoneNumber?: string,
  children: React.ReactNode,
  mobileOpen: boolean,
  handleDrawerToggle: () => void
}
const NavBar = ({
  menuItemsLinks, footer, phoneNumber, children, mobileOpen, handleDrawerToggle,
}:TNavBarProps) => {
  return (
    <>
      <Box component="nav" className={footer ? 'nav__footer' : ''} sx={{ display: { xs: 'none', md: 'block' } }}>
        {menuItemsLinks.map((item:TMenuItemLink) => (
          <Link key={item.name} to={item.link}>
            <Button key={item.name} color="inherit">
              {item.name}
            </Button>
          </Link>
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
