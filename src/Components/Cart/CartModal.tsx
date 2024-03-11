import React, { useEffect } from 'react';
// import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import DialogModal from '../Modal/DialogModal';
import CartForm from './CartForm';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { clearCart } from '../../store/features/cartSlice';

interface IProps {
  open: boolean;
  onClose: () => void,
}
type TFormValues = {
  customerName: string,
  customerAddress: string,
  customerPhone: string,
  comment: string,
}
const defaultValues: TFormValues = {
  customerName: '',
  customerAddress: '',
  customerPhone: '',
  comment: '',
};
const CartModal = ({ open, onClose }:IProps) => {
  const { cartItems, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  // useForm
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<TFormValues>({
    defaultValues,
    resolver: undefined,
  });
  // Registers
  const registers = {
    customerName: register('customerName'),
    customerAddress: register('customerAddress'),
    customerPhone: register('customerPhone'),
    comment: register('comment'),
  };
  // Submit
  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log({ ...data, totalPrice: total, cart: cartItems });
    reset(defaultValues);
    dispatch(clearCart());
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
    <DialogModal open={open} onClose={onClose} buttonTitle="Отправить" onSubmit={handleSubmit(onSubmit)}>
      <CartForm registers={registers} />
    </DialogModal>
  );
};
export default CartModal;
