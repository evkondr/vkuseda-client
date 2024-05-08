import React from 'react';
import {
  Card, CardContent, Divider, Stack, Typography, Button,
} from '@mui/material';
import { TOrder } from '../../../types';

type TProps = {
  item: TOrder,
  updateHandler: () => void;
}
const OrderCard = ({ item, updateHandler }:TProps) => {
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
            {item.isDone ? <span style={{ color: 'green' }}>Выполнен</span> : <span style={{ color: 'red' }}>Не выполнен</span> }
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
          <Button type="button" sx={{ alignSelf: 'flex-start' }} variant="contained" onClick={updateHandler}>{!item.isDone ? 'Завершить' : 'Вернуть в работу'}</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
