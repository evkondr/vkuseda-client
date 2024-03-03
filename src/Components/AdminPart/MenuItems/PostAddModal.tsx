import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import DialogModal from '../../Modal/DialogModal';
import AddMemuItemForm from './AddMemuItemForm';
// import { TMenuItemFormData } from '../../../types';

interface IProps {
  open: boolean;
  onClose: () => void,
}
interface temp {
  name: string,
  image: FileList | undefined,
  ingredients: string,
  category: string,
  weghit: number,
  price: number,
  imageAlt?: string
}
const defaultValues: temp = {
  name: '',
  ingredients: '',
  category: '',
  image: undefined,
  imageAlt: '',
  price: 0,
  weghit: 0,
};
const PostAddForm = ({ open, onClose }:IProps) => {
  // Init useForm
  const { handleSubmit, register } = useForm({
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
    weghit: register('weghit'),
  };
  // Submit
  const onSubmit: SubmitHandler<temp> = (data) => {
    if (data.image) {
      console.log({ ...data, image: data.image[0] });
    } else {
      console.log(data);
    }
  };
  return (
    <DialogModal open={open} onClose={onClose} onSubmit={handleSubmit(onSubmit)}>
      <AddMemuItemForm registers={registers} />
    </DialogModal>
  );
};

export default PostAddForm;
