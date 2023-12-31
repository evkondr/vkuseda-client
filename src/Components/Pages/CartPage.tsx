import React from 'react';
import Cart from '../Cart/Cart';
import { useAppSelector } from '../../hooks';

const CartPage = () => {
  const {
    cartItems, amount, total, loading,
  } = useAppSelector((state) => state.cart);
  return (
    <Cart cartItems={cartItems} amount={amount} total={total} loading={loading} />
  );
};

export default CartPage;
