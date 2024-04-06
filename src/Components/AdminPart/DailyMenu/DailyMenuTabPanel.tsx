import { Box, Typography } from '@mui/material';
import React from 'react';

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const DailyMenuTabPanel = ({ value, index, children }:ITabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default DailyMenuTabPanel;
