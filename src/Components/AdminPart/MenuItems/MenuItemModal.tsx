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
  const dispatch = useAppDispatch();
  const buttonTitle = itemForEdit ? 'Сохранить' : 'Создать';
  // Init useForm
  const {
    handleSubmit, register, reset, setValue,
  } = useForm({
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
    setValue('name', itemForEdit?.name || '');
    setValue('imageAlt', itemForEdit?.imageAlt || '');
    setValue('ingredients', itemForEdit?.ingredients || '');
    setValue('categoryId', itemForEdit?.category.id || '');
    setValue('weight', itemForEdit?.weight || 0);
    setValue('price', itemForEdit?.price || 0);
  }, [dispatch, itemForEdit, setValue]);
  return (
    <DialogModal
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      buttonTitle={buttonTitle}
    >
      <AddMemuItemForm registers={registers} />
    </DialogModal>
  );
};

export default MenuItemModal;
