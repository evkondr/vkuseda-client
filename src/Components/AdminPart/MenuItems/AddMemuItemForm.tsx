import React from 'react';
import { styled } from '@mui/material/styles';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  TextField, Box, DialogContent, DialogContentText, Button, InputLabel, FormControl, NativeSelect,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface IProps {
  registers: {
    name: UseFormRegisterReturn<'name'>
    ingredients: UseFormRegisterReturn<'ingredients'>,
    category: UseFormRegisterReturn<'category'>,
    image: UseFormRegisterReturn<'image'>,
    imageAlt: UseFormRegisterReturn<'imageAlt'>,
    price: UseFormRegisterReturn<'price'>,
    weight: UseFormRegisterReturn<'weight'>,
  }
}
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
const AddMemuItemForm = ({ registers }:IProps) => {
  return (
    <DialogContent>
      <DialogContentText>
        Добавление очередного гулинарного шедевра
      </DialogContentText>
      <Box paddingY={2}>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Загрузить изображение
          <VisuallyHiddenInput
            type="file"
            name={registers.image.name}
            onBlur={registers.image.onBlur}
            onChange={registers.image.onChange}
            ref={registers.image.ref}
          />
        </Button>
      </Box>
      <TextField
        margin="dense"
        id="imageAlt"
        label="Альтернативный текст для картинки"
        type="text"
        fullWidth
        variant="standard"
        name={registers.imageAlt.name}
        onBlur={registers.imageAlt.onBlur}
        onChange={registers.imageAlt.onChange}
        ref={registers.imageAlt.ref}
      />
      <TextField
        required
        margin="dense"
        id="name"
        label="Название блюда"
        type="text"
        fullWidth
        variant="standard"
        name={registers.name.name}
        onBlur={registers.name.onBlur}
        onChange={registers.name.onChange}
        ref={registers.name.ref}
      />
      <TextField
        required
        margin="dense"
        id="ingredients"
        label="Ингредиенты"
        type="text"
        fullWidth
        variant="standard"
        name={registers.ingredients.name}
        onBlur={registers.ingredients.onBlur}
        onChange={registers.ingredients.onChange}
        ref={registers.ingredients.ref}
      />
      <FormControl fullWidth margin="dense">
        <InputLabel variant="standard" htmlFor="category">
          Катекория
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: registers.category.name,
            onBlur: registers.category.onBlur,
            onChange: registers.category.onChange,
          }}
          ref={registers.category.ref}
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
        label="Вес"
        type="number"
        variant="standard"
        name={registers.weight.name}
        onBlur={registers.weight.onBlur}
        onChange={registers.weight.onChange}
        ref={registers.weight.ref}
      />
      <TextField
        required
        id="price"
        label="Цена"
        type="number"
        variant="standard"
        name={registers.price.name}
        onBlur={registers.price.onBlur}
        onChange={registers.price.onChange}
        ref={registers.price.ref}
      />
    </DialogContent>
  );
};

export default AddMemuItemForm;
