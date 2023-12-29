import React from 'react';
import { Grid } from '@mui/material';
import MenuFilter from '../MenuFilter/MenuFilter';
import { filterMenu } from '../../store/features/menuSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TMenuItem } from '../../types';
import MenuItem from '../MenuItem/MenuItem';

const MenuPage = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const { filtered } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();
  const handleCategory = (categoryName: string) => {
    dispatch(filterMenu(categoryName));
  };
  return (
    <div>
      <MenuFilter categories={categories} handleFilterButton={handleCategory} />
      <Grid container spacing={3} paddingTop={2}>
        {filtered.map((menuItem:TMenuItem) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MenuItem menuItem={menuItem} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MenuPage;
