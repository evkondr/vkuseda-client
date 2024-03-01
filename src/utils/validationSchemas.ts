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
