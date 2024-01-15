import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import MainPage from './Components/Pages/MainPage';
import MenuPage from './Components/Pages/MenuPage';
import CartPage from './Components/Pages/CartPage';
import PageNotFound from './Components/Pages/PageNotFound';
import AdminPage from './Components/Pages/AdminPage';
import PostsPage from './Components/Pages/PostsPage';
import CategoriesPage from './Components/Pages/CategoriesPage';
import SettingsPage from './Components/Pages/SettingsPage';

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
  {
    path: '/vkuseda-adm',
    element: <AdminPage />,
    children: [
      {
        path: 'posts',
        element: <PostsPage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);
export default router;
