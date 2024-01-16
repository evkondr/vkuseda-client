import React from 'react';
import AdminContainer from '../AdminContainer/AdminContainer';

const PostsPage = () => {
  return (
    <AdminContainer headerText="Записи" buttonHandler={() => console.log('handler')}>
      <div>PostsPage</div>
    </AdminContainer>
  );
};

export default PostsPage;
