import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import './sass/index.scss';
import router from './router';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
  </Provider>,
);
