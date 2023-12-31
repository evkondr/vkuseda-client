import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TCartItem } from '../../types';

type TCartProps = {
  cartItems: TCartItem[],
  amount: number,
  total: number,
  loading?: boolean
}
const Cart = ({
  cartItems, amount, total, loading,
}:TCartProps) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" borderBottom="1px solid grey">
        <Typography variant="h5">Корзина</Typography>
        <Typography variant="body1">
          количество:
          {' '}
          {amount}
        </Typography>
      </Box>
      <Stack>
        {cartItems.length === 0 && <Typography sx={{ opacity: '.7' }}>Корзина пуста</Typography>}
        {loading && <div>Loading</div>}
        {cartItems.map((item) => (
          <div>{item.name}</div>
        ))}
      </Stack>
      {amount > 0 && (
      <Box>
        <p>
          Итого:
          {' '}
          {total}
        </p>
      </Box>
      )}
    </>
  );
};

export default Cart;
