import React from 'react';
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';

type TModelProps = {
    open: boolean,
    // eslint-disable-next-line no-unused-vars
    handleOpen: () => void,
}
const Modal = (props:TModelProps) => {
  const { open, handleOpen } = props;
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
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          required
          margin="dense"
          id="name"
          name="name"
          label="Название"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick}>Отмена</Button>
        <Button type="submit">Создать</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
