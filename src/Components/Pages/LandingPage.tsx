import React from 'react';
import Header from '../Header/Header';
import AboutShort from '../About/AboutShort';
import Footer from '../Footer/Footer';
import ShortMenu from '../ShortMenu/ShortMenu';
import Welcome from '../Welcome/Welcome';
import Contacts from '../Contacts/Contacts';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <ShortMenu />
      <AboutShort />
      <Contacts />
      <Footer />
    </>
  );
};

export default LandingPage;
