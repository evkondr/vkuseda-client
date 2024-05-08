import React from 'react';
import {
  Card, CardContent, CardActions, Stack, Button,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

interface IProps {
  menuItem: {
    id: string,
    name: string
  }
  deleteHandler?: () => void
  addHandler?: () => void
}
const DailyMenuItemCard = ({
  menuItem, deleteHandler, addHandler,
}:IProps) => {
  return (
    <Card sx={{ maxWidth: '400px' }}>
      <Stack flexDirection="row" justifyContent="space-between">
        <CardContent>
          {menuItem.name}
        </CardContent>
        <CardActions>
          {addHandler ? (
            <Button onClick={addHandler}>
              <AddCircleOutlineIcon />
            </Button>
          )
            : (
              <Button onClick={deleteHandler}>
                <RemoveCircleOutlineIcon />
              </Button>
            )}
        </CardActions>
      </Stack>
    </Card>
  );
};

export default DailyMenuItemCard;
