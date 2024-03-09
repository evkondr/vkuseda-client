import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../Header/Header';
import AboutShort from '../About/AboutShort';
import Footer from '../Footer/Footer';
import ShortMenu from '../ShortMenu/ShortMenu';
import Welcome from '../Welcome/Welcome';
import Contacts from '../Contacts/Contacts';
import ScrollToAnchor from '../ScrollToAnchor';
import { getAllPromoAsync } from '../../store/thunks/promoThunk';

const phoneNumber = '+7 (902) 300 19 91';
const LandingPage = () => {
  const { landingNavLinks } = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  const { promoItems, loading, error } = useAppSelector((state) => state.promo);
  useEffect(() => {
    dispatch(getAllPromoAsync());
  }, [dispatch]);
  return (
    <>
      <ScrollToAnchor />
      <Header menuItemsLinks={landingNavLinks} phoneNumber={phoneNumber} />
      <Welcome />
      <ShortMenu promoItems={promoItems} loading={loading} error={error} />
      <AboutShort />
      <Contacts />
      <Footer />
    </>
  );
};

export default LandingPage;
