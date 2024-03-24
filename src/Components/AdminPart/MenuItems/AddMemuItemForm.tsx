import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  TextField, Box, DialogContent,
  DialogContentText, Button, InputLabel, FormControl, NativeSelect, Typography,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useAppSelector } from '../../../hooks';

interface IProps {
  registers: {
    name: UseFormRegisterReturn<'name'>
    ingredients: UseFormRegisterReturn<'ingredients'>,
    categoryId: UseFormRegisterReturn<'categoryId'>,
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
  const [file, setFile] = useState<File | undefined>(undefined);
  const { categories } = useAppSelector((state) => state.categories);
  // onImageChage hanbdler
  const onImageChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      registers.image.onChange(e);
    }
  };
  return (
    <DialogContent>
      <DialogContentText>
        Добавление очередного кулинарного шедевра
      </DialogContentText>
      <Box paddingY={2}>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Загрузить изображение
          <VisuallyHiddenInput
            type="file"
            name={registers.image.name}
            onBlur={registers.image.onBlur}
            onChange={onImageChage}
            ref={registers.image.ref}
          />
        </Button>
        {file && <Typography sx={{ marginTop: '10px' }}>{file.name}</Typography>}
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
          defaultValue=""
          inputProps={{
            name: registers.categoryId.name,
            onBlur: registers.categoryId.onBlur,
            onChange: registers.categoryId.onChange,
          }}
          ref={registers.categoryId.ref}
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
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
