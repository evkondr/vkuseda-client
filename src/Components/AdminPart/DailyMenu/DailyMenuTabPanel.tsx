import React, { useState } from 'react';
import {
  Box, Button, IconButton, Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TMenuItem } from '../../../types';
import SimpleModal from '../../Modal/SimpleModal';

interface ITabPanelProps {
  index: number;
  value: number;
  allMenuItems: TMenuItem[];
  dayMenuItems: TMenuItem[];
  onDeleteHandler: () => void
}
const DailyMenuTabPanel = ({
  value, index, dayMenuItems, onDeleteHandler, allMenuItems,
}:ITabPanelProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  console.log(allMenuItems);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <SimpleModal open={openModal} handleClose={() => setOpenModal(!openModal)}>
        Test
      </SimpleModal>
      {value === index && (
        <Box padding={2} position="relative">
          <IconButton aria-label="Delete" sx={{ position: 'absolute', right: '10px', top: '10px' }} onClick={onDeleteHandler}>
            <DeleteOutlineIcon sx={{ color: 'red' }} />
          </IconButton>
          {dayMenuItems.length === 0 && <Typography>Меню еще не добавлено</Typography>}
          <Button onClick={() => setOpenModal(true)}>Добавить</Button>
        </Box>
      )}
    </div>
  );
};

export default DailyMenuTabPanel;
