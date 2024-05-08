import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material/';
import logo from '../../assets/logo.svg';
import './index.scss';

type LogoProps = {
  size?: 'sm' | 'lg'
}
const Logo = ({ size }:LogoProps) => {
  const logoClass = size ? `logo logo__${size}` : 'logo';
  return (
    <NavLink to="/">
      <Box className={logoClass}>
        <img src={logo} alt="Лого сайта доставки обедов Вкусная Еда" />
      </Box>
    </NavLink>
  );
};

export default Logo;
