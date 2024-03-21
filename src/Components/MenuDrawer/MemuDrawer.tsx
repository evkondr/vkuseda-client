import React from 'react';
import {
  Box, List, Divider, Button, ListItem, ListItemButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { TMenuItemLink } from '../../types';
import Logo from '../Logo/Logo';
import './style.scss';

type TMemuDrawerProps = {
  menuItemsLinks: TMenuItemLink[],
  handleDrawerToggle: () => void,
  phoneNumber?: string
}
const MemuDrawer = ({ menuItemsLinks, handleDrawerToggle, phoneNumber }:TMemuDrawerProps) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className="menu-drawer">
      <List>
        <Box padding={1}>
          <Logo />
        </Box>
        <Divider sx={{ marginBottom: '20px' }} />
        {
          phoneNumber && (
          <Button href="tel:+79023001991" color="inherit">
            <PhoneIphoneIcon />
            {phoneNumber}
          </Button>
          )
        }
        {menuItemsLinks.map((item:TMenuItemLink) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link className="drawer-link" to={item.link} key={item.name}>
                {item.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MemuDrawer;
