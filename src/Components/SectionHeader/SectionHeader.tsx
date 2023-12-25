import React from 'react';
import {
  Box, Typography, Divider,
} from '@mui/material/';
import './style.scss';

type TSectionHeaderProps = {
  children: React.ReactNode,
  colorClass?: boolean,
}
const SectionHeader = ({ children, colorClass }:TSectionHeaderProps) => {
  return (
    <Box component="header" className="section-header">
      <Divider textAlign="center" className={colorClass ? 'divider_color' : ''}>
        <Typography variant="h3" className={colorClass ? 'header_color' : ''}>
          {children}
        </Typography>
      </Divider>
    </Box>
  );
};

export default SectionHeader;
