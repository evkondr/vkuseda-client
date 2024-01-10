import React from 'react';
import {
  AppBar, Typography, Button, Box,
} from '@mui/material/';

const AdminPage = () => {
  return (
    <main>
      <AppBar>
        <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
          <Typography>
            Администратор
          </Typography>
          <Button variant="contained">Выход</Button>
        </Box>
      </AppBar>
    </main>
  );
};

export default AdminPage;
