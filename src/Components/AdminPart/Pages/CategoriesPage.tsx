import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import getAllCategoriesAsync from '../../../store/thunks/categoriesThunk';

const CategoriesPage = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesAsync());
    console.log(categories);
  }, [dispatch, categories]);
  return (
    <div>CategoriesPage</div>
  );
};

export default CategoriesPage;
