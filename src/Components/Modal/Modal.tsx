import React from 'react';
import {
  Button, Dialog, DialogActions, DialogTitle,
} from '@mui/material';

type TModelProps = {
    open: boolean,
    // eslint-disable-next-line no-unused-vars
    handleOpen: () => void,
    children: React.ReactNode
}
const Modal = (props:TModelProps) => {
  const { open, handleOpen, children } = props;
  const handleClick = () => {
    handleOpen();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClick}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          console.log(event);
          handleClick();
        },
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

export default Modal;
