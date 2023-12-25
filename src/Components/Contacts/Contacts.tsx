import React from 'react';
import {
  Box, Container, Grid, Typography,
} from '@mui/material/';
import RoomIcon from '@mui/icons-material/Room';
import Form from '../Form/Form';
import SectionHeader from '../SectionHeader/SectionHeader';

const Contacts = () => {
  return (
    <Box id="contacts">
      <Container maxWidth="lg">
        <SectionHeader>
          Контакты
        </SectionHeader>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} padding={2}>
            <Typography padding={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <RoomIcon />
              Наш адрес: Памирская ул., 11В, Нижний Новгород
            </Typography>
            <iframe title="map" src="https://yandex.ru/map-widget/v1/?ll=43.941710%2C56.270793&mode=poi&poi%5Bpoint%5D=43.940836%2C56.270351&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D138234516466&z=15.41" width="100%" height="340px" style={{ border: 'none' }} />
          </Grid>
          <Grid item lg={6} md={6} sm={12} padding={2}>
            <Typography padding={2} align="center">
              Оставьте ваш вопрос или пожелание и мы с вами свяжемся.
            </Typography>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacts;
