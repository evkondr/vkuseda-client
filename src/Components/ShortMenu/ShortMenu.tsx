import React from 'react';
import {
  Box, Grid, Container, Button,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuItem from '../MenuItem/MenuItem';
import { TMenuItem } from '../../types';
import './short-menu.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

type TShortMenuProps = {
  menuItems: TMenuItem[]
}
const ShortMenu = ({ menuItems }:TShortMenuProps) => {
  return (
    <Box id="menu" component="section" className="short-menu">
      <Container maxWidth="lg">
        <SectionHeader>
          Наше Меню
        </SectionHeader>
        <Grid container spacing={3} className="short-menu__container">
          {menuItems.map((menuItem:TMenuItem) => (
            <Grid key={menuItem.id} item xs={12} sm={6} md={4} lg={3}>
              <MenuItem menuItem={menuItem} />
            </Grid>
          ))}
        </Grid>
        <Box className="short-menu__all-btn">
          <NavLink to="main/menu">
            <Button variant="outlined" size="large">
              <MenuBookIcon color="inherit" sx={{ marginRight: '10px' }} />
              Открыть все меню
            </Button>
          </NavLink>
        </Box>
      </Container>
    </Box>
  );
};

export default ShortMenu;
