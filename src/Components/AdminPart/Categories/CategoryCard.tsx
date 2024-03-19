import React from 'react';
import {
  Card, CardContent, Typography, Button, Stack,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TCategory } from '../../../types';

interface IProps {
  categoryItem: TCategory,
  removeItem: () => void,
}
const CategoryCard = ({ categoryItem, removeItem }:IProps) => {
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            {categoryItem.name}
          </Typography>
          <Button type="button" onClick={() => removeItem()}>
            <DeleteOutlineIcon />
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
