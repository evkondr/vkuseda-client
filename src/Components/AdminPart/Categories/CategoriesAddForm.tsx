import { Box, TextField } from '@mui/material';
import React from 'react';

const CategoriesAddForm = () => {
  return (
    <Box component="form" padding={3} rowGap={2}>
      <Box>
        Добавьте новую каегорию в ваше великолепное меню
      </Box>
      <TextField
        required
        id="name"
        name="name"
        label="Название"
        type="text"
        variant="standard"
      />
    </Box>
  );
};

export default CategoriesAddForm;
