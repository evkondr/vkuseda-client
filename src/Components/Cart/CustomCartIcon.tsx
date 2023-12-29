import React from 'react';
import { Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.scss';

const CustomCartIcon = ({ amount }:{amount:number}) => {
  return (
    <Box component="div" className="cart-icon">
      <span>{amount}</span>
      <ShoppingCartIcon />
    </Box>
  );
};

export default CustomCartIcon;
