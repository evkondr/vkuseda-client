import React from 'react';
import {
  Box, Typography, Button, Container,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import './welcome.scss';
import bgImage from '../../assets/welcome.jpg';
import { ReactComponent as ReactLogo } from '../../assets/menu-chef.svg';

const Welcome = () => {
  return (
    <Box id="home" component="section" className="welcome-section" sx={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})` }}>
      <Container maxWidth="lg" className="welcome-section__container">
        <div>
          <ReactLogo />
          <Typography variant="h1">
            Вкусная еда
          </Typography>
          <Typography variant="h2" gutterBottom>
            Организация и доставка обедов по Нижнему Новгороду
          </Typography>
          <NavLink to="/main/menu">
            <Button variant="contained" color="success" className="welcome-section__btn" sx={{ marginTop: '20px' }}>
              Заказать
            </Button>
          </NavLink>
        </div>
      </Container>
    </Box>
  );
};

export default Welcome;
