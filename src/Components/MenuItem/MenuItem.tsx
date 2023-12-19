import React from 'react';
import { Card, CardMedia } from '@mui/material/';
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
    </Card>
  );
};

export default MenuItem;
