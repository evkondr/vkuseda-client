import React from 'react';
import {
  Box, Chip, Stack, Divider,
} from '@mui/material';
import { TCategory } from '../../types';

type TMenuFilterProps = {
  categories: TCategory[],
}
const MenuFilter = ({ categories }:TMenuFilterProps) => {
  return (
    <Box>
      <Stack direction="row" spacing={1} marginBottom={1} alignItems="center">
        <p>Фильтр:</p>
        {categories.map((category:TCategory) => (
          <Chip label={category.name} variant="outlined" color="success" key={category.id} onClick={() => console.log(category.name)} />
        ))}
      </Stack>
      <Divider />
    </Box>
  );
};

export default MenuFilter;
