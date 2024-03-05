import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import DialogModal from '../../Modal/DialogModal';
import AddMemuItemForm from './AddMemuItemForm';
import { useAppDispatch } from '../../../hooks';
import { addNewMenuItem } from '../../../store/thunks/menuItemsThunk';
import { TMenuItemFomtValues } from '../../../types';

interface IProps {
  open: boolean;
  onClose: () => void,
}

const defaultValues:TMenuItemFomtValues = {
  name: '',
  ingredients: '',
  category: '',
  image: undefined,
  imageAlt: '',
  price: 0,
  weight: 0,
};
const PostAddForm = ({ open, onClose }:IProps) => {
  // Std
  const dispatch = useAppDispatch();
  // Init useForm
  const { handleSubmit, register, reset } = useForm({
    defaultValues,
  });
  // Registers
  const registers = {
    name: register('name'),
    ingredients: register('ingredients'),
    category: register('category'),
    image: register('image'),
    imageAlt: register('imageAlt'),
    price: register('price'),
    weight: register('weight'),
  };
  // Submit
  const onSubmit: SubmitHandler<TMenuItemFomtValues> = (data) => {
    if (data.image) {
      const image = (data.image as unknown as FileList)[0];
      dispatch(addNewMenuItem({ ...data, image }));
    } else {
      dispatch(addNewMenuItem(data));
    }
    reset(defaultValues);
    onClose();
  };
  return (
    <DialogModal open={open} onClose={onClose} onSubmit={handleSubmit(onSubmit)}>
      <AddMemuItemForm registers={registers} />
    </DialogModal>
  );
};

export default PostAddForm;
