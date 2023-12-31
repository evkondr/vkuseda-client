import React from 'react';
import { Grid } from '@mui/material';
import MenuFilter from '../MenuFilter/MenuFilter';
import { filterMenu } from '../../store/features/menuSlice';
import { addToCart } from '../../store/features/cartSlice';
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
  const addToCartHandelr = (menuItem: TMenuItem) => {
    const {
      id, name, image, price,
    } = menuItem;
    dispatch(addToCart({
      id, name, price, image, amount: 1,
    }));
  };
  return (
    <div>
      <MenuFilter categories={categories} handleFilterButton={handleCategory} />
      <Grid container spacing={3} paddingTop={2}>
        {filtered.map((menuItem:TMenuItem) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MenuItem menuItem={menuItem} addToCurtHandler={() => addToCartHandelr(menuItem)} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MenuPage;
