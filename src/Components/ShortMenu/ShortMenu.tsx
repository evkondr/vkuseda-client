import React from 'react';
import {
  Box, Grid, Container, Button, Typography,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuItem from '../MenuItem/MenuItem';
import { TPromoItem } from '../../types';
import './short-menu.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

type TShortMenuProps = {
  promoItems: TPromoItem[],
  error: string | undefined,
  loading: boolean,
}
const ShortMenu = ({ promoItems, loading, error }:TShortMenuProps) => {
  if (error) {
    return (
      <Box id="menu" component="section" className="short-menu">
        <Container maxWidth="lg" sx={{ height: '100%' }}>
          <SectionHeader>
            Наше Меню
          </SectionHeader>
        </Container>
        <Box>{error}</Box>
      </Box>
    );
  }
  return (
    <Box id="menu" component="section" className="short-menu">
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <SectionHeader>
          Наше Меню
        </SectionHeader>
        {promoItems.length < 4
          ? (
            <Typography fontSize={20} textAlign="center">
              Меню еще не готово. Приносим извинения.
            </Typography>
          )
          : (
            <>
              <Grid container spacing={3} className="short-menu__container">
                {loading && <Box>Loading...</Box>}
                {promoItems.map((promoItem) => (
                  <Grid key={promoItem.id} item xs={12} sm={6} md={4} lg={3}>
                    <MenuItem menuItem={promoItem.menuItem} />
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
            </>
          )}
      </Container>
    </Box>
  );
};

export default ShortMenu;
