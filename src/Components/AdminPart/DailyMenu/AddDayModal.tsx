import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import DialogModal from '../../Modal/DialogModal';
import AddDayForm from './AddDayForm';
// import { useAppDispatch } from '../../../hooks';

interface IProps {
  open: boolean;
  onClose: () => void,
}
type TFormValues = {
  name: string
}
const defaultValues: TFormValues = {
  name: '',
};
const AddDayModal = ({ open, onClose }:IProps) => {
  // useForm
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<TFormValues>({
    defaultValues,
  });
  // Registers
  const nameRegister = register('name');
  // Submit
  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
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
    <DialogModal open={open} onClose={onClose} onSubmit={handleSubmit(onSubmit)} title="Выбрать день">
      <AddDayForm registers={{ nameRegister }} />
    </DialogModal>
  );
};

export default AddDayModal;
