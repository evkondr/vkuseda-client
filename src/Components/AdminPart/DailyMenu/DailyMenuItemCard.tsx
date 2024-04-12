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
  add?: boolean
}
const DailyMenuItemCard = ({ menuItem, add }:IProps) => {
  return (
    <Card>
      <Stack flexDirection="row" justifyContent="space-between">
        <CardContent>
          {menuItem.name}
        </CardContent>
        <CardActions>
          {add ? (
            <Button>
              <AddCircleOutlineIcon />
            </Button>
          )
            : (
              <Button>
                <RemoveCircleOutlineIcon />
              </Button>
            )}
        </CardActions>
      </Stack>
    </Card>
  );
};

export default DailyMenuItemCard;
