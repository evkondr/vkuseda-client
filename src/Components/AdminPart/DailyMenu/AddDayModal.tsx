import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import DialogModal from '../../Modal/DialogModal';
import AddDayForm from './AddDayForm';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addWeekDayAsync, getAllDaysAsync } from '../../../store/thunks/dailyMenuThunk';
import Loader from '../../Loader/Loader';

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
  const { weekDays, loading } = useAppSelector((state) => state.dailyMenu);
  const dispatch = useAppDispatch();
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
    dispatch(addWeekDayAsync(data.name));
    reset(defaultValues);
    onClose();
  };
  // UseEffect
  useEffect(() => {
    if (open) {
      dispatch(getAllDaysAsync());
    }
  }, [dispatch, open]);
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast.error('Ошибка формы');
      console.log(errors);
    }
  }, [errors]);
  return (
    <DialogModal open={open} onClose={onClose} onSubmit={handleSubmit(onSubmit)} title="Выбрать день">
      {loading
        ? <Loader fullWidth /> : <AddDayForm registers={{ nameRegister }} weekDays={weekDays} />}
    </DialogModal>
  );
};

export default AddDayModal;
