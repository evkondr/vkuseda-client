import React from 'react';
import {
  Card, CardMedia, CardContent,
} from '@mui/material/';
import { TMenuItem } from '../../types';
import './menu-item.scss';

type TMenuItemProps = {
  menuItem: TMenuItem
}
const MenuItem = ({ menuItem }:TMenuItemProps) => {
  const { image } = menuItem;
  return (
    <Card className="menu-item">
      <CardMedia component="img" className="menu-item__img" image={image} />
      <CardContent className="menu-item__content">
        <h5 className="menu-item__name">{menuItem.name}</h5>
        <p>
          <span>Ингредиенты:</span>
          {' '}
          {menuItem.ingredients}
        </p>
        <p>
          <span>Вес:</span>
          {' '}
          {menuItem.weghit}
          {' '}
          г.
        </p>
        <p>
          <span>Цена:</span>
          {' '}
          {menuItem.price}
          {' '}
          р.
        </p>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
