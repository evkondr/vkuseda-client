import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAllOrdersAsync } from '../../../store/thunks/ordersThunk';
import OrderCard from './OrderCard';

const OrdersContainer = () => {
  // Std
  const { orders, loading, error } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();
  // useEffect
  useEffect(() => {
    dispatch(getAllOrdersAsync());
  }, [dispatch]);
  if (error) {
    return (
      <Box padding={2}>
        {error}
      </Box>
    );
  }
  if (loading) {
    return (
      <Box padding={2}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box padding={2}>
      {orders.length === 0
        ? <Box>Заказов еще нет.</Box>
        : orders.map((item) => <OrderCard item={item} />)}
    </Box>
  );
};

export default OrdersContainer;
