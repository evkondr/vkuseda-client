import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DialogModal from '../../Modal/DialogModal';
import AddMemuItemForm from './AddMemuItemForm';
import { useAppDispatch } from '../../../hooks';
import { addNewMenuItem } from '../../../store/thunks/menuItemsThunk';
import { TMenuItem, TMenuItemFormValues } from '../../../types';
import { getAllCategoriesAsync } from '../../../store/thunks/categoriesThunk';
import { menuItemValidationSchema } from '../../../utils/validationSchemas';

interface IProps {
  defaultValues: TMenuItemFormValues,
  open: boolean;
  itemForEdit?: TMenuItem;
  onClose: () => void,
}

const MenuItemModal = ({
  open, onClose, itemForEdit, defaultValues,
}:IProps) => {
  // Std
  console.log(defaultValues);
  const dispatch = useAppDispatch();
  // Init useForm
  const { handleSubmit, register, reset } = useForm({
    defaultValues,
    resolver: yupResolver(menuItemValidationSchema),
  });
  // Registers
  const registers = {
    name: register('name'),
    ingredients: register('ingredients'),
    categoryId: register('categoryId'),
    image: register('image'),
    imageAlt: register('imageAlt'),
    price: register('price'),
    weight: register('weight'),
  };
  // Submit
  const onSubmit: SubmitHandler<TMenuItemFormValues> = (data) => {
    if (itemForEdit) {
      console.log(data);
    } else {
      if (data.image) {
        const image = (data.image as unknown as FileList)[0];
        dispatch(addNewMenuItem({ ...data, image }));
      } else {
        dispatch(addNewMenuItem(data));
      }
      reset(defaultValues);
      onClose();
    }
  };
  useEffect(() => {
    dispatch(getAllCategoriesAsync());
  }, [dispatch]);
  return (
    <DialogModal open={open} onClose={onClose} onSubmit={handleSubmit(onSubmit)} buttonTitle={itemForEdit && 'сохранить'}>
      <AddMemuItemForm registers={registers} />
    </DialogModal>
  );
};

export default MenuItemModal;
