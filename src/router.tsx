import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import MainPage from './Components/Pages/MainPage';
import MenuPage from './Components/Pages/MenuPage';
import CartPage from './Components/Pages/CartPage';
import PageNotFound from './Components/Pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/main',
    element: <MainPage />,
    children: [
      {
        path: 'menu',
        element: <MenuPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
]);
export default router;
