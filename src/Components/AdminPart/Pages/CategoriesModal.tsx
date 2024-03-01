// Container for categories modal form
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DialogModal from '../../Modal/DialogModal';
import CategoriesAddForm from '../Categories/CategoriesAddForm';
import { categoryValidationSchema } from '../../../utils/validationSchemas';

interface IProps {
  open: boolean;
  onClose: () => void,
  // eslint-disable-next-line no-unused-vars
  submit: (data:{ name:string }) => void,
}
type TFormValues = {
  name: string
}
const defaultValues: TFormValues = {
  name: '',
};
const CategoriesModal = ({ open, onClose, submit }:IProps) => {
  // useForm
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<TFormValues>({
    defaultValues,
    resolver: yupResolver(categoryValidationSchema),
  });
  // Registers
  const nameRegister = register('name');
  // Submit
  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    submit(data);
    reset(defaultValues);
    onClose();
  };
  // UseEffect
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast.error('Ошибка формы');
      console.log(errors);
    }
  }, [errors]);
  return (
    <DialogModal open={open} onClose={onClose} onSubmit={handleSubmit(onSubmit)}>
      <CategoriesAddForm registers={{ nameRegister }} />
    </DialogModal>
  );
};

export default CategoriesModal;
