import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import DailyMenuTabPanel from './DailyMenuTabPanel';

const DailyMemuContainer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
  return (
    <Box padding={2}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Понедельник" id={tabProps(0).id} />
          <Tab label="Вторник" id={tabProps(1).id} />
          <Tab label="Среда" id={tabProps(2).id} />
        </Tabs>
      </Box>
      <DailyMenuTabPanel value={value} index={0}>Меню на пн</DailyMenuTabPanel>
      <DailyMenuTabPanel value={value} index={1}>Меню на вт</DailyMenuTabPanel>
      <DailyMenuTabPanel value={value} index={2}>Меню на ср</DailyMenuTabPanel>
    </Box>
  );
};

export default DailyMemuContainer;
