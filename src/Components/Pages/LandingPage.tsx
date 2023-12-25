import React from 'react';
import Header from '../Header/Header';
import AboutShort from '../About/AboutShort';
import Footer from '../Footer/Footer';
import ShortMenu from '../ShortMenu/ShortMenu';
import Welcome from '../Welcome/Welcome';
import Contacts from '../Contacts/Contacts';
import { menuItemsLinks } from '../../tempDB';

const phoneNumber = '+7 (902) 300 19 91';
const LandingPage = () => {
  return (
    <>
      <Header menuItemsLinks={menuItemsLinks} phoneNumber={phoneNumber} />
      <Welcome />
      <ShortMenu />
      <AboutShort />
      <Contacts />
      <Footer />
    </>
  );
};

export default LandingPage;
