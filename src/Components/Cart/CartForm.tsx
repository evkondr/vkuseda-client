import React from 'react';
import { Box, TextField } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  registers: {
    customerName: UseFormRegisterReturn<'customerName'>,
    customerAddress: UseFormRegisterReturn<'customerAddress'>,
    customerPhone: UseFormRegisterReturn<'customerPhone'>,
    comment: UseFormRegisterReturn<'comment'>,
  }
}
const CartForm = ({ registers }:IProps) => {
  const {
    customerName, customerAddress, customerPhone, comment,
  } = registers;
  return (
    <Box padding={3} rowGap={2} display="flex" flexDirection="column">
      <Box>
        Оставьте Ваши данные для доставки.
      </Box>
      <TextField
        required
        id="customerName"
        label="Ваше имя"
        type="text"
        variant="standard"
        name={customerName.name}
        onBlur={customerName.onBlur}
        onChange={customerName.onChange}
        ref={customerName.ref}
      />
      <TextField
        required
        id="customerAddress"
        label="Адрес доставки"
        type="text"
        variant="standard"
        name={customerAddress.name}
        onBlur={customerAddress.onBlur}
        onChange={customerAddress.onChange}
        ref={customerAddress.ref}
      />
      <TextField
        required
        id="customerPhone"
        label="Номер телефона"
        type="text"
        variant="standard"
        name={customerPhone.name}
        onBlur={customerPhone.onBlur}
        onChange={customerPhone.onChange}
        ref={customerPhone.ref}
      />
      <TextField
        id="comment"
        label="Комментарий к заказу"
        type="text"
        variant="standard"
        multiline
        rows={3}
        name={comment.name}
        onBlur={comment.onBlur}
        onChange={comment.onChange}
        ref={comment.ref}
      />
    </Box>
  );
};

export default CartForm;
