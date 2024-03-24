import React from 'react';
import {
  Button, Dialog, DialogActions, DialogTitle,
} from '@mui/material';

type TModelProps = {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode,
    onSubmit: () => void,
    title?: string,
    buttonTitle?: string,
}
const DialogModal = (props:TModelProps) => {
  const {
    open, onClose, children, title, buttonTitle, onSubmit,
  } = props;
  const handleClick = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClick}
      PaperProps={{
        component: 'form',
        onSubmit,
      }}
      id="addOrEdit"
    >
      <DialogTitle>{title || 'Форма'}</DialogTitle>
      { children }
      <DialogActions>
        <Button onClick={handleClick}>Отмена</Button>
        <Button type="submit">{buttonTitle || 'Создать'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModal;
