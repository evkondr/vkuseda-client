import React, { useEffect, useState, memo } from 'react';
import {
  Box, Tab, Tabs, Typography,
} from '@mui/material';
import DailyMenuTabPanel from './DailyMenuTabPanel';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { deleteWeekDayAsync, getAllDaysAsync } from '../../../store/thunks/dailyMenuThunk';
import Loader from '../../Loader/Loader';
import { TMenuItem } from '../../../types';

const DailyMemuContainer = () => {
  const { weekDays, loading } = useAppSelector((state) => state.dailyMenu);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);

  const onDelete = (dayId:string) => {
    dispatch(deleteWeekDayAsync(dayId));
    setValue(0);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
  // UseEffect logic
  useEffect(() => {
    dispatch(getAllDaysAsync());
  }, [dispatch]);
  if (loading) {
    return (
      <Loader fullWidth />
    );
  }
  if (weekDays.length === 0) {
    return (
      <Box padding={2}>
        <Typography>Добавьте день для составления меню</Typography>
      </Box>
    );
  }
  return (
    <Box padding={2}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {weekDays.map((day, index) => (
            <Tab key={day.id} label={day.name} id={tabProps(index).id} />))}
        </Tabs>
      </Box>
      {weekDays.map((day, index) => (
        <DailyMenuTabPanel
          key={day.id}
          value={value}
          index={index}
          menuItems={day.menuItems as TMenuItem[]}
          onDeleteHandler={() => onDelete(day.id as string)}
        />
      ))}
    </Box>
  );
};
export default memo(DailyMemuContainer);
