/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import AdminContainer from '../AdminContainer/AdminContainer';
import PostCard from '../MenuItems/MenuItemCard';
import MenuItemModal from '../MenuItems/MenuItemModal';
import { deleteMenuItem, getMenuItemsAync } from '../../../store/thunks/menuItemsThunk';
import { addToPromoAsync, deleteFromPromoAsync } from '../../../store/thunks/promoThunk';
import { TMenuItem, TMenuItemFormValues } from '../../../types';

const MenuItemsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [itemForEdit, setItemForEdit] = useState<TMenuItem | undefined>(undefined);
  const { menuItems, loading, error } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();
  const defaultValues:TMenuItemFormValues = {
    name: itemForEdit?.name || '',
    ingredients: itemForEdit?.ingredients || '',
    categoryId: itemForEdit?.category.id || '',
    image: undefined,
    imageAlt: itemForEdit?.imageAlt || '',
    price: itemForEdit?.price || 0,
    weight: itemForEdit?.weight || '0',
  };
  // Handlers
  const promoHandler = (id:string, isInPromo: boolean) => {
    if (!isInPromo) {
      dispatch(addToPromoAsync(id));
    } else {
      dispatch(deleteFromPromoAsync(id));
    }
  };
  const editHandler = (item:TMenuItem) => {
    setItemForEdit(item);
    setOpenEdit(true);
  };
  useEffect(() => {
    dispatch(getMenuItemsAync());
  }, [dispatch]);
  // If error
  if (error) {
    <Box>{error}</Box>;
  }
  // Render component
  return (
    <AdminContainer headerText="Записи" buttonHandler={() => setOpen(true)}>
      <Box display="flex" flexDirection="column" padding={3} rowGap={2}>
        {loading ? <CircularProgress /> : menuItems.length === 0
          ? (
            <Typography>
              Записи еще не добалены
            </Typography>
          )
          : menuItems.map((item) => (
            <PostCard
              key={item.id}
              menuItem={item}
              editHandler={() => editHandler(item)}
              deleteHandler={() => dispatch(deleteMenuItem(item.id))}
              promoHandler={() => promoHandler(item.id, item.isInPromo as boolean)}
            />
          ))}

      </Box>
      {/* Edit menu item modal */}
      {
        itemForEdit ? (
          <MenuItemModal
            open={openEdit}
            onClose={() => {
              setItemForEdit(undefined);
              setOpenEdit(!openEdit);
            }}
            itemForEdit={itemForEdit}
            defaultValues={defaultValues}
          />
        ) : (
          <MenuItemModal
            open={open}
            onClose={() => setOpen(!open)}
            defaultValues={defaultValues}
          />
        )
      }

    </AdminContainer>
  );
};

export default MenuItemsPage;
