import React from 'react';
import {
  Box, Container, Typography, Link,
} from '@mui/material/';
import RoomIcon from '@mui/icons-material/Room';
import SectionHeader from '../SectionHeader/SectionHeader';
import './style.scss';
import formatPhoneNumber from '../../utils/formatPhoneNumber';

type TContacts = {
  phoneNumber: string | undefined
}
const Contacts = ({ phoneNumber }:TContacts) => {
  return (
    <Box component="section" id="contacts" className="contacts">
      <Container maxWidth="lg">
        <SectionHeader>
          Контакты
        </SectionHeader>
        <Box component="section" className="contacts__content">
          <Typography textAlign="center" className="contacts__text">
            По вопросам организации обедов обращаться по телефону:
          </Typography>
          <Typography textAlign="center" className="contacts__text">
            {phoneNumber && <Link href={`tel:+7${phoneNumber}`}>{formatPhoneNumber(phoneNumber)}</Link>}
          </Typography>
          <Typography className="contacts__text contacts__map-text">
            <RoomIcon />
            Наш адрес: Памирская ул., 11В, Нижний Новгород
          </Typography>
          <iframe title="map" src="https://yandex.ru/map-widget/v1/?ll=43.941710%2C56.270793&mode=poi&poi%5Bpoint%5D=43.940836%2C56.270351&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D138234516466&z=15.41" width="100%" height="340px" style={{ border: 'none' }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Contacts;
