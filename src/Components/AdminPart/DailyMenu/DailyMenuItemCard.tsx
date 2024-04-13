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
  add?: boolean,
  deleteHandler: () => void
  addHandler: () => void
}
const DailyMenuItemCard = ({
  menuItem, add, deleteHandler, addHandler,
}:IProps) => {
  return (
    <Card>
      <Stack flexDirection="row" justifyContent="space-between">
        <CardContent>
          {menuItem.name}
        </CardContent>
        <CardActions>
          {add ? (
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
