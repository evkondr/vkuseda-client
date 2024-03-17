import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SectionHeader from '../SectionHeader/SectionHeader';
import './index.scss';

const DeliveryPage = () => {
  return (
    <Box component="section" className="delivery-page">
      <Container maxWidth="lg">
        <SectionHeader>
          Доставка
        </SectionHeader>
        <Typography component="b">
          Районы:
        </Typography>
        <Typography component="p">
          Мы организовываем доставку по всем районам Нижнего Новгорода.
        </Typography>
        <Typography component="b">
          Время:
        </Typography>
        <Typography>
          Доставка осуществляется с 11:00 до 15:00
          Для своевременной доставки просим вас делать заказ до 10:30.
        </Typography>
        <Typography component="b">
          Сумма заказ:
        </Typography>
        <Typography>
          Мы ориентированы на офисы и предприятия, в связи с чем,
          минимальная сумма заказа 1000 рублей
        </Typography>
      </Container>
    </Box>
  );
};

export default DeliveryPage;
