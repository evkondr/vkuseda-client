import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { calculateTotal } from '../../store/features/cartSlice';

const CartPage = () => {
  const {
    cartItems, amount, total, loading,
  } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, cartItems]);

  return (
    <Cart cartItems={cartItems} amount={amount} total={total} loading={loading} />
  );
};

export default CartPage;
