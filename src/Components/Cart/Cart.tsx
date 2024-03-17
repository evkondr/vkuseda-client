import React from 'react';
import {
  Box, Stack, Typography,
} from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { TCartItem } from '../../types';
import CartItem from './CartItem';
import { changeAmount, removeCartItem } from '../../store/features/cartSlice';

type TCartProps = {
  cartItems: TCartItem[],
  amount: number,
  total: number,
  loading?: boolean
}
const Cart = ({
  cartItems, amount, total, loading,
}:TCartProps) => {
  const dispatch = useAppDispatch();
  const amountHandler = (value: {id:string, action:string}) => {
    dispatch(changeAmount({ id: value.id, action: value.action }));
  };
  const removeItemHandler = (id:string) => {
    dispatch(removeCartItem(id));
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between" borderBottom="1px solid grey" alignItems="center">
        <Typography variant="h5">Корзина</Typography>
        <Typography component="p">
          количество:
          {' '}
          {amount}
        </Typography>
      </Box>
      <Box padding={3}>
        В данный момент заказ с сайта недоступен, так как мы работаем над дневным меню.
        С доступными блюдами вы можете ознакомится на странице дневного меню.
        Приносим извинения за доставленные неудобства.
      </Box>
      <Stack padding={1}>
        {cartItems.length === 0 && <Typography sx={{ opacity: '.7' }}>Корзина пуста</Typography>}
        {loading && <div>Loading</div>}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.totalPrice}
            amountHandler={amountHandler}
            removeItem={removeItemHandler}
          />
        ))}
      </Stack>
      {amount > 0 && (
      <Box display="flex" flexDirection="column" paddingLeft={1} sx={{ alignItems: { xs: 'center', md: 'flex-start', lg: 'flex-start' } }}>
        <p>
          Итого:
          {' '}
          {total}
          {' '}
          руб.
        </p>
      </Box>
      )}
    </>
  );
};

export default Cart;
