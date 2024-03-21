import React from 'react';
import AdminContainer from '../AdminContainer/AdminContainer';
import OrdersContainer from '../Orders/OrdersContainer';

const OrdersPage = () => {
  return (
    <AdminContainer headerText="Заказы">
      <OrdersContainer />
    </AdminContainer>
  );
};

export default OrdersPage;
