/* eslint-disable no-console */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from '../../../hooks';
import AdminContainer from '../AdminContainer/AdminContainer';
import PostCard from '../PostCard/PostCard';
import Modal from '../../Modal/Modal';

const PostsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { allMenuItems } = useAppSelector((state) => state.menu);
  return (
    <AdminContainer headerText="Записи" buttonHandler={() => setOpen(true)}>
      <Box display="flex" flexDirection="column" padding={3} rowGap={2}>
        {allMenuItems.map((item) => <PostCard key={item.id} menuItem={item} />)}
      </Box>
      <Modal open={open} handleOpen={() => setOpen(!open)} />
    </AdminContainer>
  );
};

export default PostsPage;
