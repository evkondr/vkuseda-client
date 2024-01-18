import React from 'react';
import {
  AppBar, Typography, Button, Box,
} from '@mui/material/';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

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
  return (
    <main style={{ maxHeight: '100vh' }}>
      <AppBar position="fixed">
        <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
          <Typography>
            Администратор
          </Typography>
          <Button variant="contained">Выход</Button>
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
