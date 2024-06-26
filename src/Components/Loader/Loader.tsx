import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface IProps {
  fullWidth?: boolean;
  size?: number | string;
}
const Loader = ({ fullWidth, size }:IProps) => {
  return (
    <Box padding={3} display="flex" justifyContent="center" sx={{ width: fullWidth ? '100%' : 'auto' }}>
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loader;
