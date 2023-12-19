import React from 'react';
import {
  Box, Grid, Container,
} from '@mui/material/';
import MenuItem from '../MenuItem/MenuItem';

const ShortMenu = () => {
  return (
    <Box component="section">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <MenuItem />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ShortMenu;
