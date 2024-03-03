import React, { useEffect } from 'react';
import {
  AppBar, Typography, Button, Box,
} from '@mui/material/';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { checkAuth, logout } from '../../../store/features/authSlice';

const content = {
  marginTop: '69px',
  paddingLeft: '260px',
};
const aSide = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  marginTop: '69px',
  width: '260px',
  boxShadow: '1px 1px 5px rgba(0,0,0, .5)',
};

const AdminPage = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(checkAuth());
  });
  if (!isAuth) {
    return <Navigate to="/adm-dashboard/authorization" state={{ from: location.pathname }} />;
  }
  return (
    <main style={{ maxHeight: '100vh' }}>
      <AppBar position="fixed">
        <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
          <Typography>
            Администратор
          </Typography>
          <Button variant="contained" onClick={() => dispatch(logout())}>Выход</Button>
        </Box>
      </AppBar>
      <Box
        component="aside"
        sx={aSide}
      >
        <AdminSidebar />
      </Box>
      <Box sx={content}>
        <Box component="section" flexGrow={1} padding={2}>
          <Outlet />
        </Box>
      </Box>
    </main>
  );
};

export default AdminPage;
