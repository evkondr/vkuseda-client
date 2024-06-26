import React from 'react';
import { Box, Modal } from '@mui/material/';

interface IProps {
  children: React.ReactNode
  open: boolean,
  handleClose: () => void;
}
const style = {
  position: 'absolute',
  maxHeight: '350px',
  overflowY: 'scroll',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const SimpleModal = ({ children, open, handleClose }:IProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  );
};

export default SimpleModal;
