import React, { useEffect, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import DailyMenuTabPanel from './DailyMenuTabPanel';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAllDaysAsync } from '../../../store/thunks/dailyMenuThunk';

const DailyMemuContainer = () => {
  const { weekDays } = useAppSelector((state) => state.dailyMenu);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);

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
  return (
    <Box padding={2}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {weekDays.map((day, index) => (
            <Tab key={day.id} label={day.name} id={tabProps(index).id} />))}
        </Tabs>
      </Box>
      {weekDays.map((day, index) => (
        <DailyMenuTabPanel key={day.id} value={value} index={index}>
          {day.id}
        </DailyMenuTabPanel>
      ))}
    </Box>
  );
};

export default DailyMemuContainer;
