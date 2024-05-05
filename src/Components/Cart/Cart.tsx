import React, { useState } from 'react';
import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { TCartItem } from '../../types';
import CartItem from './CartItem';
import { changeAmount, removeCartItem } from '../../store/features/cartSlice';
import CartModal from './CartModal';

type TCartProps = {
  cartItems: TCartItem[],
  amount: number,
  total: number,
  loading?: boolean,
  ordersOn: boolean | undefined,
}
const Cart = ({
  cartItems, amount, total, loading, ordersOn = true,
}:TCartProps) => {
  // Init state
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
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
      {!ordersOn
      && (
      <Box padding={3} sx={{ color: 'red' }}>
        В данный момент заказ с сайта недоступен, так как мы работаем над дневным меню.
        Уточнить актуальное меню можно по номеру телефона +7 902 300 1991
        Приносим извинения за доставленные неудобства.
      </Box>
      )}
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
      {ordersOn && cartItems.length > 0 && <Button variant="contained" onClick={() => setOpen(true)}>Заказать</Button>}
      <CartModal open={open} onClose={() => setOpen(!open)} />
    </>
  );
};

export default Cart;
