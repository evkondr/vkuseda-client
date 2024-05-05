import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { calculateTotal } from '../../store/features/cartSlice';
import { settingsConstants } from '../../app-data';
import { getAllSettingsClientAsync } from '../../store/thunks/settingsThunk';

const CartPage = () => {
  const {
    cartItems, amount, total, loading,
  } = useAppSelector((state) => state.cart);
  const { settings: { boolSettings } } = useAppSelector((state) => state.settings);
  const orderOption = boolSettings.find((item) => item.name === settingsConstants.order);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
    dispatch(getAllSettingsClientAsync());
  }, [dispatch, cartItems]);

  return (
    <Cart
      cartItems={cartItems}
      amount={amount}
      total={total}
      loading={loading}
      ordersOn={orderOption?.value as boolean | undefined}
    />
  );
};

export default CartPage;
