/* eslint-disable no-console */
import React from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from '../../../hooks';
import AdminContainer from '../AdminContainer/AdminContainer';
import PostCard from '../PostCard/PostCard';

const PostsPage = () => {
  const { allMenuItems } = useAppSelector((state) => state.menu);
  return (
    <AdminContainer headerText="Записи" buttonHandler={() => console.log('handler')}>
      <Box display="flex" flexDirection="column" padding={3} rowGap={2}>
        {allMenuItems.map((item) => <PostCard key={item.id} menuItem={item} />)}
      </Box>
    </AdminContainer>
  );
};

export default PostsPage;
