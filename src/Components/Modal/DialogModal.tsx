import React from 'react';
import {
  Button, Dialog, DialogActions, DialogTitle,
} from '@mui/material';

type TModelProps = {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode,
    onSubmit: () => void
}
const DialogModal = (props:TModelProps) => {
  const {
    open, onClose, children, onSubmit,
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
    >
      <DialogTitle>Запись</DialogTitle>
      { children }
      <DialogActions>
        <Button onClick={handleClick}>Отмена</Button>
        <Button type="submit">Создать</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModal;
