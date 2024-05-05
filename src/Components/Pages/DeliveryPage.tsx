/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import SectionHeader from '../SectionHeader/SectionHeader';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllSettingsClientAsync } from '../../store/thunks/settingsThunk';
import { settingsConstants } from '../../app-data';

const DeliveryPage = () => {
  // Init state
  const { settings: { textSettings } } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const minPrice = textSettings.find((item) => item.name === settingsConstants.minPrice);
  const maxPrice = textSettings.find((item) => item.name === settingsConstants.maxPrice);
  // Effects
  useEffect(() => {
    dispatch(getAllSettingsClientAsync());
  });
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
          Мы организовываем доставку по ленинскому, автозаводскому,
          нижегородскому и советскому району.
        </Typography>
        <Typography component="b">
          Время:
        </Typography>
        <Typography>
          Доставка осуществляется по будням с 11:00 до 16:00.
          Для своевременной доставки просим вас делать заказ до 10:30.
        </Typography>
        <Typography component="b">
          Сумма заказ:
        </Typography>
        <Typography>
          Мы ориентированы на офисы и предприятия, в связи с чем,
          сумма заказа от
          {' '}
          {minPrice?.value}
          {' '}
          до
          {' '}
          {maxPrice?.value}
          {' '}
          рублей.
        </Typography>
        <Typography>
          Зоны доставки:
        </Typography>
        <Box className="delivery-map">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A430f491260a90cccf03b8be3e34b9108d08295b93bc41f45b05acdaf0faf7a02&amp;;height=504&amp;lang=ru_RU&amp;scroll=true" width="500" height="400" frameBorder="0" />
        </Box>
      </Container>
    </Box>
  );
};

export default DeliveryPage;
