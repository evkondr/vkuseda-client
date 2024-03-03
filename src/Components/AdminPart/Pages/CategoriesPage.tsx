import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAllCategoriesAsync, removeCategoryAsync } from '../../../store/thunks/categoriesThunk';
import AdminContainer from '../AdminContainer/AdminContainer';
import CategoriesModal from '../Categories/CategoriesModal';
import CategoryCard from '../Categories/CategoryCard';
import { TCategory } from '../../../types';

const CategoriesPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { categories, loading, error } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  // Remove item
  const removeItem = (id:string) => {
    dispatch(removeCategoryAsync(id));
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
          : (
            <Box padding={2} display="flex" flexDirection="column" rowGap={2}>
              {loading ? <CircularProgress /> : categories.map((categoryItem:TCategory) => (
                <CategoryCard
                  key={categoryItem.id}
                  categoryItem={categoryItem}
                  removeItem={() => removeItem(categoryItem.id)}
                />
              ))}
            </Box>
          )
      }
      <CategoriesModal open={open} onClose={() => setOpen(!open)} />
    </AdminContainer>
  );
};

export default CategoriesPage;
