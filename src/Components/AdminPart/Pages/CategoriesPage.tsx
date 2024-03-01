import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAllCategoriesAsync, addNewCategory } from '../../../store/thunks/categoriesThunk';
import NotImplemented from '../../NotImplemented/NotImplemented';
import AdminContainer from '../AdminContainer/AdminContainer';
import CategoriesModal from './CategoriesModal';

const CategoriesPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { categories, error } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  // Submit
  const submit = (data: {name:string}) => {
    dispatch(addNewCategory(data.name));
  };
  // useEffect
  useEffect(() => {
    dispatch(getAllCategoriesAsync());
  }, [dispatch]);
  // Component
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
      <CategoriesModal open={open} onClose={() => setOpen(!open)} submit={submit} />
    </AdminContainer>
  );
};

export default CategoriesPage;
