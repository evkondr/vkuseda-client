/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Card, Typography, Grid, Box,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './style.scss';

type TCartItemProps = {
  id: string,
  name: string,
  amount: number,
  price: number,
  amountHandler: (value:{id:string, action:string}) => void,
  removeItem: (id:string) => void
}

const CartItem = ({
  id, name, amount, price, amountHandler, removeItem,
}:TCartItemProps) => {
  return (
    <Card className="cart-item">
      <Grid container width="100%">
        <Grid item xs={12} sm={7} md={7} lg={7}>
          <Typography variant="body2">{name}</Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={5} display="flex" justifyContent="space-between">
          <Typography variant="body2">
            {price}
            {' '}
            руб.
          </Typography>
          <Box className="amount-control">
            <RemoveCircleOutlineIcon onClick={() => amountHandler({ id, action: 'decrease' })} />
            <Typography>{amount}</Typography>
            <AddCircleOutlineIcon onClick={() => amountHandler({ id, action: 'increase' })} />
            <DeleteOutlineIcon onClick={() => removeItem(id)} />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;
