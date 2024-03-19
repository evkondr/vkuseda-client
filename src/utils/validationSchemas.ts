import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  login: yup.string().min(3).required(),
  password: yup.string().min(6).required(),
}).required();
export const regValidationSchema = yup.object({
  login: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
}).required();
export const categoryValidationSchema = yup.object({
  name: yup.string().required(),
});
export const menuItemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  ingredients: yup.string().required(),
  categoryId: yup.string(),
  image: yup.mixed(
    (input): input is File | FileList => input instanceof File || input instanceof FileList,
  ),
  imageAlt: yup.string(),
  price: yup.number().required(),
  weight: yup.number().required(),
});
