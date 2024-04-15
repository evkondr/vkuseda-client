import React, { useEffect } from 'react';
import { Box, Grid, CircularProgress } from '@mui/material';
import MenuFilter from '../MenuFilter/MenuFilter';
import { filterMenu } from '../../store/features/menuSlice';
import { addToCart } from '../../store/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TMenuItem } from '../../types';
import MenuItem from '../MenuItem/MenuItem';
import { getAllCategoriesOnClientAsync } from '../../store/thunks/categoriesThunk';
import { getMenuItemsOnClientAync } from '../../store/thunks/menuItemsThunk';

const MenuPage = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const filterCategories = [{ id: '1', name: 'Все' }, ...categories];
  const { filtered, loading } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();
  const handleCategory = (categoryName: string) => {
    dispatch(filterMenu(categoryName));
  };
  const addToCartHandelr = (menuItem: TMenuItem) => {
    const {
      id, name, price,
    } = menuItem;
    dispatch(addToCart({
      id, name, price, amount: 1, totalPrice: price,
    }));
  };
  useEffect(() => {
    dispatch(getAllCategoriesOnClientAsync());
    dispatch(getMenuItemsOnClientAync());
  }, [dispatch]);
  // eslint-disable-next-line no-constant-condition
  if (loading) {
    return (
      <Box width="100%" display="flex" justifyContent="center" padding={3}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div>
      <MenuFilter data={filterCategories} handleFilter={handleCategory} />
      <Grid container spacing={3} paddingTop={2}>
        {filtered.map((menuItem:TMenuItem) => (
          <Grid key={menuItem.id} item xs={12} sm={6} md={4} lg={3}>
            <MenuItem menuItem={menuItem} addToCurtHandler={() => addToCartHandelr(menuItem)} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MenuPage;
