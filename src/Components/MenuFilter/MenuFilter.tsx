import React from 'react';
import {
  Box, Chip, Stack, Divider,
} from '@mui/material';
import { TCategory } from '../../types';

type TMenuFilterProps = {
  categories: TCategory[],
  // eslint-disable-next-line no-unused-vars
  handleFilterButton: (name:string) => void
}
const MenuFilter = ({ categories, handleFilterButton }:TMenuFilterProps) => {
  return (
    <Box>
      <Stack direction="row" spacing={1} marginBottom={1} alignItems="center" flexWrap="wrap">
        <p>Фильтр:</p>
        {categories.map((category:TCategory) => (
          <Chip style={{ marginBottom: '5px' }} label={category.name} variant="outlined" color="success" key={category.id} onClick={() => handleFilterButton(category.name)} />
        ))}
      </Stack>
      <Divider />
    </Box>
  );
};

export default MenuFilter;
