import React, { useState, memo, useEffect } from 'react';
import {
  Box, Button, IconButton, Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SimpleModal from '../../Modal/SimpleModal';
import DailyMenuItemCard from './DailyMenuItemCard';
import { TMenuItem } from '../../../types';
import { addWeekDayMenuItemAsync, deleteWeekDayMenuItemAsync } from '../../../store/thunks/dailyMenuThunk';
import { useAppDispatch } from '../../../hooks';
import filterDataArray from '../../../utils/filterDataArray';

interface ITabPanelProps {
  index: number;
  value: number;
  dayId: string;
  allMenuItems: TMenuItem[],
  menuItems: TMenuItem[],
  onDeleteHandler: () => void;
}
const DailyMenuTabPanel = ({
  value, index, dayId, allMenuItems, menuItems, onDeleteHandler,
}:ITabPanelProps) => {
  // State
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [availableMenu, setMenu] = useState<TMenuItem[]>([]);
  const dispatch = useAppDispatch();
  // Handlers
  const deleteItemHandler = (menuItemId:string) => {
    const data = { dayId, menuItemId };
    dispatch(deleteWeekDayMenuItemAsync(data));
  };
  const addItemHandler = (menuItemId:string) => {
    const data = { dayId, menuItemId };
    dispatch(addWeekDayMenuItemAsync(data));
  };
  // Effects
  useEffect(() => {
    if (openModal) {
      // Filter already added menu items
      setMenu(filterDataArray(allMenuItems, menuItems, 'id'));
    }
  }, [allMenuItems, menuItems, openModal]);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <SimpleModal open={openModal} handleClose={() => setOpenModal(!openModal)}>
        <Box display="flex" flexDirection="column" rowGap={2}>
          {availableMenu.map((item) => (
            <DailyMenuItemCard
              key={item.id}
              menuItem={{ id: item.id, name: item.name }}
              addHandler={() => addItemHandler(item.id)}
            />
          ))}
        </Box>
      </SimpleModal>
      {value === index && (
        <Box padding={2} position="relative">
          <IconButton aria-label="Delete" sx={{ position: 'absolute', right: '10px', top: '10px' }} onClick={onDeleteHandler}>
            <DeleteOutlineIcon sx={{ color: 'red' }} />
          </IconButton>
          {menuItems.length === 0
            && <Typography>Меню еще не добавлено</Typography>}
          <Button onClick={() => setOpenModal(true)}>Добавить</Button>
          <Box paddingTop={2} display="flex" flexDirection="column" rowGap={2}>
            {menuItems.map((item) => (
              <DailyMenuItemCard
                key={item.id}
                menuItem={{ id: item.id, name: item.name }}
                deleteHandler={() => deleteItemHandler(item.id)}
              />
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default memo(DailyMenuTabPanel);
