/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Grid, Typography, Button,
} from '@mui/material/';
import aboutBG from '../../assets/about-bg.jpg';
import './style.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

const AboutShort = () => {
  return (
    <Box id="about" component="section" className="section about-short" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${aboutBG})` }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="flex-end">
          <Grid item lg={6} md={6} sm={12} alignContent="center">
            <SectionHeader colorClass>
              О нас
            </SectionHeader>
            <Box component="section">
              <Typography className="about-short__info">
                Добро пожаловать в "Вкусная Еда" - вашего надежного партнера в мире вкусной кухни с удобной доставкой прямо к вашему порогу в Нижнем Новгороде.
                "Вкусная Еда" была основана с любовью к традиционным рецептам кухни разных народов и стремлению подарить каждому клиенту незабываемый опыт.
                Наша команда поваров тщательно отбирает лучшие ингредиенты, чтобы создавать блюда, полные вкуса и тепла домашней кухни.
                {' '}
                {/* <Link href="##" underline="hover" className="">Узнать больше</Link> */}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }} padding={2}>
                <Button variant="contained" className="about-short__btn">
                  <Link to="main/about">Узнать больше</Link>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutShort;
