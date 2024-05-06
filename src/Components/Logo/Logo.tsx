import React from 'react';
import { Box } from '@mui/material/';
import logo from '../../assets/logo.svg';
import './index.scss';

type LogoProps = {
  size?: 'sm' | 'lg'
}
const Logo = ({ size }:LogoProps) => {
  const logoClass = size ? `logo logo__${size}` : 'logo';
  return (
    <Box className={logoClass}>
      <img src={logo} alt="Лого сайта доставки обедов Вкуная Еда" />
    </Box>
  );
};

export default Logo;
