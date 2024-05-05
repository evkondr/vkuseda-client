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
import { getAllSettingsClientAsync } from '../../store/thunks/settingsThunk';
import { settingsConstants } from '../../app-data';

const LandingPage = () => {
  const { landingNavLinks } = useAppSelector((state) => state.navigation);
  const {
    settings: { textSettings },
    ...anotherTextSetting
  } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const { promoItems, loading, error } = useAppSelector((state) => state.promo);
  const headerText = textSettings.find((item) => item.name === settingsConstants.headerText);
  const sloganText = textSettings.find((item) => item.name === settingsConstants.slogan);
  const phoneNumber = textSettings.find((item) => item.name === settingsConstants.phoneNumber);
  useEffect(() => {
    dispatch(getAllPromoAsync());
    dispatch(getAllSettingsClientAsync());
  }, [dispatch]);
  return (
    <>
      <ScrollToAnchor />
      <Header menuItemsLinks={landingNavLinks} phoneNumber={phoneNumber?.value as string | undefined} position="absolute" />
      <Welcome
        headerText={headerText?.value as string | undefined}
        loading={anotherTextSetting.loading}
        sloganText={sloganText?.value as string | undefined}
      />
      <ShortMenu promoItems={promoItems} loading={loading} error={error} />
      <AboutShort />
      <Contacts phoneNumber={phoneNumber?.value as string | undefined} />
      <Footer phoneNumber={phoneNumber?.value as string | undefined} />
    </>
  );
};

export default LandingPage;
