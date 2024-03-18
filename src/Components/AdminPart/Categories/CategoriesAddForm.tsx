import React from 'react';
import { Box, TextField } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  registers: {
    nameRegister: UseFormRegisterReturn<'name'>
  }
}
const CategoriesAddForm = ({ registers }:IProps) => {
  const { nameRegister } = registers;
  return (
    <Box padding={3} rowGap={2}>
      <Box>
        Добавьте новую каегорию в ваше великолепное меню
      </Box>
      <TextField
        required
        id="name"
        label="Название"
        type="text"
        variant="standard"
        name={nameRegister.name}
        onBlur={nameRegister.onBlur}
        onChange={nameRegister.onChange}
        ref={nameRegister.ref}
      />
    </Box>
  );
};

export default CategoriesAddForm;
