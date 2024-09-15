import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DialogModal from '../../Modal/DialogModal';
import AddMenuItemForm from './AddMenuItemForm';
import { useAppDispatch } from '../../../hooks';
import { addNewMenuItem, updateMenuItemAsync } from '../../../store/thunks/menuItemsThunk';
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
    handleSubmit, register, reset, setValue, formState: { errors },
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
      // if item provided, we can edit it
      const { image, ...rest } = data;
      const imageSet = image as FileList;
      if (imageSet.length === 0) {
        dispatch(updateMenuItemAsync({ id: itemForEdit.id, values: { ...rest } }));
      } else {
        dispatch(updateMenuItemAsync({
          id: itemForEdit.id,
          values: { ...rest, image: imageSet[0] },
        }));
      }
      onClose();
    } else {
      // if item not provided we create new one
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
    // Set form values with menu item data
    dispatch(getAllCategoriesAsync());
    setValue('name', itemForEdit?.name || '');
    setValue('image', undefined);
    setValue('imageAlt', itemForEdit?.imageAlt || '');
    setValue('ingredients', itemForEdit?.ingredients || '');
    setValue('categoryId', itemForEdit?.category.id || '');
    setValue('weight', itemForEdit?.weight || '0');
    setValue('price', itemForEdit?.price || 0);
  }, [dispatch, itemForEdit, setValue]);
  return (
    <DialogModal
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      buttonTitle={buttonTitle}
    >
      <AddMenuItemForm registers={registers} errors={errors} />
    </DialogModal>
  );
};

export default MenuItemModal;
