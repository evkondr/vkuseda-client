import React from 'react';
import {
  Box, TextField, Stack, Button,
} from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
  return (
    <Box component="form">
      <Stack spacing={2} alignItems="center">
        <TextField id="name" label="Ваше имя" variant="outlined" fullWidth margin="dense" />
        <TextField id="phone" label="Номер телефона" variant="outlined" fullWidth margin="dense" />
        <TextField id="message" label="Сообшение" multiline rows={7} fullWidth variant="outlined" margin="dense" />
        <Button variant="contained" endIcon={<SendIcon />}>Отправить</Button>
      </Stack>
    </Box>
  );
};

export default Form;
