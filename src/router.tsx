import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import MainPage from './Components/Pages/MainPage';
import MenuPage from './Components/Pages/MenuPage';
import CartPage from './Components/Pages/CartPage';
import PageNotFound from './Components/Pages/PageNotFound';
import AdminPage from './Components/AdminPart/Pages/AdminPage';
import PostsPage from './Components/AdminPart/Pages/PostsPage';
import CategoriesPage from './Components/AdminPart/Pages/CategoriesPage';
import SettingsPage from './Components/AdminPart/Pages/SettingsPage';
import AboutPage from './Components/Pages/AboutPage';
import DeliveryPage from './Components/Pages/DeliveryPage';
import ContactsPage from './Components/Pages/ContactsPage';
import AuthPage from './Components/AdminPart/Pages/AuthPage';

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
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'delivery',
        element: <DeliveryPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'authorization',
        element: <AuthPage />,
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
