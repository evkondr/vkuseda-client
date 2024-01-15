import React from 'react';
import {
  AppBar, Typography, Button, Box,
} from '@mui/material/';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const content = {
  position: 'absolute!important',
  marginTop: '69px',
  width: '100%',
  top: 0,
  bottom: 0,
};
const AdminPage = () => {
  return (
    <main style={{ maxHeight: '100vh' }}>
      <AppBar position="static">
        <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
          <Typography>
            Администратор
          </Typography>
          <Button variant="contained">Выход</Button>
        </Box>
      </AppBar>
      <Box display="flex" sx={content}>
        <Box
          component="aside"
          sx={{
            position: 'relative', width: '260px', boxShadow: '1px 1px 5px rgba(0,0,0, .5)',
          }}
        >
          <AdminSidebar />
        </Box>
        <Box component="section" flexGrow={1} padding={2}>
          <Outlet />
        </Box>
      </Box>
    </main>
  );
};

export default AdminPage;
