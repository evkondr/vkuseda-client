/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useAppSelector } from '../../../hooks';
import AdminContainer from '../AdminContainer/AdminContainer';
import PostCard from '../MenuItems/PostCard';
import PostAddModal from '../MenuItems/PostAddModal';

const PostsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { menuItems, loading, error } = useAppSelector((state) => state.menu);
  if (error) {
    <Box>{error}</Box>;
  }
  return (
    <AdminContainer headerText="Записи" buttonHandler={() => setOpen(true)}>
      <Box display="flex" flexDirection="column" padding={3} rowGap={2}>
        {loading ? <CircularProgress /> : menuItems.length === 0
          ? (
            <Typography>
              Записи еще не добалены
            </Typography>
          )
          : menuItems.map((item) => <PostCard key={item.id} menuItem={item} />)}

      </Box>
      <PostAddModal open={open} onClose={() => setOpen(!open)} />
    </AdminContainer>
  );
};

export default PostsPage;
