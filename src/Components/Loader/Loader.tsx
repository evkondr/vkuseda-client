import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface IProps {
  fullWidth?: boolean;
}
const Loader = ({ fullWidth }:IProps) => {
  return (
    <Box padding={3} display="flex" justifyContent="center" sx={{ width: fullWidth ? '100%' : 'auto' }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
