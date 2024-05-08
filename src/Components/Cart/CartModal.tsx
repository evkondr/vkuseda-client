import React, { useEffect, useState } from 'react';
// import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import DialogModal from '../Modal/DialogModal';
import CartForm from './CartForm';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { clearCart } from '../../store/features/cartSlice';
import { sendOrderAsync } from '../../store/thunks/ordersThunk';
import { settingsConstants } from '../../app-data';

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
  // Init state
  const [isReCapPassed, setReCapPassed] = useState<null | string>(null);
  const { cartItems, total } = useAppSelector((state) => state.cart);
  const { settings: { textSettings } } = useAppSelector((state) => state.settings);
  const capKey = textSettings.find((item) => item.name === settingsConstants.reCAPTCHA);
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
  // Handlers
  const onReCapChange = (value: null | string) => {
    setReCapPassed(value);
  };
  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    if (isReCapPassed) {
      dispatch(sendOrderAsync({ ...data, totalPrice: total, cart: cartItems }));
      reset(defaultValues);
      dispatch(clearCart());
      onClose();
    } else {
      toast.error('Не пройдена проверка reCAPTCHA');
    }
  };
  // Effects
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast.error('Ошибка формы');
      console.log(errors);
    }
  }, [errors]);
  return (
    <DialogModal title="Оформление заказа" open={open} onClose={onClose} buttonTitle="Отправить" onSubmit={handleSubmit(onSubmit)}>
      <CartForm
        registers={registers}
        reCapKey={capKey?.value as string | undefined}
        onReCapChange={onReCapChange}
      />
    </DialogModal>
  );
};
export default CartModal;
