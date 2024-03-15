import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import MainPage from './Components/Pages/MainPage';
import MenuPage from './Components/Pages/MenuPage';
import CartPage from './Components/Pages/CartPage';
import PageNotFound from './Components/Pages/PageNotFound';
import AdminPage from './Components/AdminPart/Pages/AdminPage';
import MenuItemsPage from './Components/AdminPart/Pages/MenuItemsPage';
import CategoriesPage from './Components/AdminPart/Pages/CategoriesPage';
import SettingsPage from './Components/AdminPart/Pages/SettingsPage';
import AboutPage from './Components/Pages/AboutPage';
import DeliveryPage from './Components/Pages/DeliveryPage';
import ContactsPage from './Components/Pages/ContactsPage';
import AuthPage from './Components/AdminPart/Pages/AuthPage';
import OrdersPage from './Components/AdminPart/Pages/OrdersPage';

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
    ],
  },
  {
    path: '/adm-dashboard',
    element: <AdminPage />,
    children: [
      {
        path: 'menu-items',
        element: <MenuItemsPage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'orders',
        element: <OrdersPage />,
      },
    ],
  },
  {
    path: '/adm-dashboard/authorization',
    element: <AuthPage />,
  },
]);
export default router;
