import React, { useState, memo } from 'react';
import {
  Box, Button, IconButton, Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TMenuItem } from '../../../types';
import SimpleModal from '../../Modal/SimpleModal';
import DailyMenuItemCard from './DailyMenuItemCard';

interface ITabPanelProps {
  index: number;
  value: number;
  dayId: string | undefined;
  allMenuItems: TMenuItem[];
  dayMenuItems: TMenuItem[];
  onDeleteHandler: () => void;
}
const DailyMenuTabPanel = ({
  value, index, dayMenuItems, onDeleteHandler, allMenuItems, dayId,
}:ITabPanelProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const deleteItemHandler = (itemId:string) => {
    console.log({ dayId, itemId });
  };
  const addItemHandler = (itemId:string) => {
    console.log({ dayId, itemId });
  };
  console.log('DailyMenuTabPanel');
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <SimpleModal open={openModal} handleClose={() => setOpenModal(!openModal)}>
        <Box display="flex" flexDirection="column" rowGap={2}>
          {allMenuItems.map((item) => (
            <DailyMenuItemCard
              key={item.id}
              add
              menuItem={{ id: item.id, name: item.name }}
              addHandler={() => addItemHandler(item.id)}
              deleteHandler={() => deleteItemHandler(item.id)}
            />
          ))}
        </Box>
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

export default memo(DailyMenuTabPanel, (prev, next) => prev.value !== next.value);
