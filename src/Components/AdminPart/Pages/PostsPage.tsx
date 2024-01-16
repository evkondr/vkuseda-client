import React from 'react';
import { Box } from '@mui/material';
import AdminContainer from '../AdminContainer/AdminContainer';
import { menuItems } from '../../../tempDB';
import PostCard from '../PostCard/PostCard';

const PostsPage = () => {
  return (
    <AdminContainer headerText="Записи" buttonHandler={() => console.log('handler')}>
      <Box padding={1}>
        {menuItems.map((item) => <PostCard menuItem={item} />)}
      </Box>
    </AdminContainer>
  );
};

export default PostsPage;
