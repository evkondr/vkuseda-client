import React from 'react';
import {
  Box, List, Divider, Button, ListItem, ListItemButton, Link,
} from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { TMenuItemLink } from '../../types';
import Logo from '../Logo/Logo';

type TMemuDrawerProps = {
  menuItemLinks: TMenuItemLink[],
  handleDrawerToggle: () => void,
  phoneNumber?: string
}
const MemuDrawer = ({ menuItemLinks, handleDrawerToggle, phoneNumber }:TMemuDrawerProps) => {
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
        {menuItemLinks.map((item:TMenuItemLink) => (
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
};

export default MemuDrawer;
