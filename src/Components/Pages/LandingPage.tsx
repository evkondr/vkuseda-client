import React from 'react';
import { useAppSelector } from '../../hooks';
import Header from '../Header/Header';
import AboutShort from '../About/AboutShort';
import Footer from '../Footer/Footer';
import ShortMenu from '../ShortMenu/ShortMenu';
import Welcome from '../Welcome/Welcome';
import Contacts from '../Contacts/Contacts';
// import ScrollToAnchor from '../ScrollToAnchor';

const phoneNumber = '+7 (902) 300 19 91';
const LandingPage = () => {
  const { allMenuItems } = useAppSelector((state) => state.menu);
  const { landingNavLinks } = useAppSelector((state) => state.navigation);
  return (
    <>
      {/* <ScrollToAnchor /> */}
      <Header menuItemsLinks={landingNavLinks} phoneNumber={phoneNumber} />
      <Welcome />
      <ShortMenu menuItems={allMenuItems} />
      <AboutShort />
      <Contacts />
      <Footer />
    </>
  );
};

export default LandingPage;
