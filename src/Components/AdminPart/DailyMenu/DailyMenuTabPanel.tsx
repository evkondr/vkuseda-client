import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TMenuItem } from '../../../types';

interface ITabPanelProps {
  index: number;
  value: number;
  menuItems?: TMenuItem[];
  onDeleteHandler: () => void
}
const DailyMenuTabPanel = ({
  value, index, menuItems, onDeleteHandler,
}:ITabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box padding={2} position="relative">
          <IconButton aria-label="Delete" sx={{ position: 'absolute', right: '10px', top: '10px' }} onClick={onDeleteHandler}>
            <DeleteOutlineIcon sx={{ color: 'red' }} />
          </IconButton>
          {menuItems?.length === 0 && <Typography>Меню еще не добавлено</Typography>}
        </Box>
      )}
    </div>
  );
};

export default DailyMenuTabPanel;
