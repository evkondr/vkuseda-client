import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import MainPage from './Components/Pages/MainPage';
import MenuPage from './Components/Pages/MenuPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
    children: [
      {
        path: 'menu',
        element: <MenuPage />,
      },
    ],
  },
]);
export default router;
