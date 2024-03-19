import React from 'react';
import {
  Card, CardContent, Divider, Stack, Typography,
} from '@mui/material';
import { TOrder } from '../../../types';

type TPorps = {
  item: TOrder
}
const OrderCard = ({ item }:TPorps) => {
  return (
    <Card sx={{ marginBottom: '10px', maxWidth: '500px' }}>
      <CardContent>
        <Stack flexDirection="column" rowGap={1}>
          <Typography>
            Заказ №
            {' '}
            {item.orderNumber}
            {' '}
            от
            {' '}
            {item.date}
            {' - '}
            {item.isDone ? 'Выполнен' : 'Не выполнен'}
          </Typography>
          <Divider />
          <Typography>
            Имя:
            {' '}
            {item.customerName}
          </Typography>
          <Typography>
            Телефон:
            {' '}
            {item.customerPhone}
          </Typography>
          <Typography>
            Адрес:
            {' '}
            {item.customerAddress}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
