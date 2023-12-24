import React from 'react';
import Header from './Components/Header/Header';
import Welcome from './Components/Welcome/Welcome';
import ShortMenu from './Components/ShortMenu/ShortMenu';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <ShortMenu />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
