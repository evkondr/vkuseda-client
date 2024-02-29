import React, { useEffect, useState } from 'react';
import { Box, Modal } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import getAllCategoriesAsync from '../../../store/thunks/categoriesThunk';
import NotImplemented from '../../NotImplemented/NotImplemented';
import AdminContainer from '../AdminContainer/AdminContainer';
import CategoriesAddForm from '../Categories/CategoriesAddForm';

const CategoriesPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { categories, error } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesAsync());
  }, [dispatch]);
  if (error) {
    return <Box>{error}</Box>;
  }
  return (
    <AdminContainer headerText="Категории" buttonHandler={() => setOpen(true)}>
      {
        categories.length === 0
          ? <Box padding={2}>Еше не добавлено ни одной категории</Box>
          : <NotImplemented />
      }
      <Modal open={open} onClose={() => setOpen(!open)}>
        <CategoriesAddForm />
      </Modal>
    </AdminContainer>
  );
};

export default CategoriesPage;
