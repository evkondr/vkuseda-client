import React from 'react';
import { styled } from '@mui/material/styles';
import {
  TextField, Box, DialogContent, DialogContentText, Button, InputLabel, FormControl, NativeSelect,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const AddMemuItemForm = () => {
  return (
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <Box paddingY={2}>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Загрузить изображение
          <VisuallyHiddenInput type="file" name="vkuseda-img" />
        </Button>
      </Box>
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
      <TextField
        required
        margin="dense"
        id="ingredients"
        name="ingredients"
        label="Ингредиенты"
        type="text"
        fullWidth
        variant="standard"
      />
      <FormControl fullWidth margin="dense">
        <InputLabel variant="standard" htmlFor="category">
          Катекория
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'category',
            id: 'category',
          }}
        >
          <option value={10}>Супы</option>
          <option value={20}>Вторые блюда</option>
          <option value={30}>Салаты</option>
        </NativeSelect>
      </FormControl>
      <TextField
        sx={{ marginRight: '10px' }}
        required
        id="weight"
        name="weight"
        label="Вес"
        type="number"
        variant="standard"
      />
      <TextField
        required
        id="price"
        name="price"
        label="Цена"
        type="number"
        variant="standard"
      />
    </DialogContent>
  );
};

export default AddMemuItemForm;
