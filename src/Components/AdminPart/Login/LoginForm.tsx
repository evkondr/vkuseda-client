import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Box, Paper, TextField, Typography, Stack, Alert,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { TRegistrerFormData } from '../../../types';
import { loginValidationSchema, regValidationSchema } from '../../../utils/validationSchemas';
import { loginUser } from '../../../store/thunks/authThunks';
import { checkAuth } from '../../../store/features/authSlice';

const defaultValues: TRegistrerFormData = {
  login: '',
  email: '',
  password: '',
};
const LoginForm = () => {
  const [isLogin, setIslogin] = useState<boolean>(true);
  const { error, loading, isAuth } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { state: { from } } = useLocation();

  const dispatch = useAppDispatch();

  const res = () => {
    if (isLogin) {
      return loginValidationSchema;
    }
    return regValidationSchema;
  };
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<TRegistrerFormData>({
    defaultValues,
    resolver: yupResolver(res()),
  });
  const loginRegister = register('login');
  const emailRegister = register('email');
  const passwordRegister = register('password');
  const onSubmit: SubmitHandler<TRegistrerFormData> = (data) => {
    if (isLogin) {
      dispatch(loginUser(data));
    } else {
      console.log('Регистрация временно закрыта');
    }
    if (!error) {
      reset(defaultValues);
    }
  };
  // EFFECT
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [navigate, isAuth, from]);
  return (
    <Paper style={{ paddingTop: '20px' }}>
      <Typography variant="h5" textAlign="center">{isLogin ? 'Вход' : 'Регистрация'}</Typography>
      <Box
        component="form"
        paddingY={2}
        paddingX={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={2}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          required
          id="login"
          label="Логин"
          placeholder="Логин"
          variant="outlined"
          name={loginRegister.name}
          onBlur={loginRegister.onBlur}
          onChange={loginRegister.onChange}
          ref={loginRegister.ref}
        />
        { !isLogin && (
        <TextField
          required
          id="email"
          label="Почта"
          placeholder="Почта"
          variant="outlined"
          name={emailRegister.name}
          onBlur={emailRegister.onBlur}
          onChange={emailRegister.onChange}
          ref={emailRegister.ref}
        />
        )}
        <TextField
          required
          id="password"
          label="Пароль"
          placeholder="Пароль"
          variant="outlined"
          type="password"
          name={passwordRegister.name}
          onBlur={passwordRegister.onBlur}
          onChange={passwordRegister.onChange}
          ref={passwordRegister.ref}
        />
        <Box padding={2}>
          <Stack>
            {
              isLogin ? <LoadingButton type="submit" loading={loading} disabled={loading} variant="text">{ isLogin ? 'Войти' : 'Отправить'}</LoadingButton> : (
                <Alert variant="outlined" severity="error">
                  Регистрация временно закрыта
                </Alert>
              )
            }
            <LoadingButton type="button" disabled variant="text" onClick={() => setIslogin(!isLogin)}>{isLogin ? 'Зарегистрироватья' : 'Войти в систему'}</LoadingButton>
          </Stack>
        </Box>
      </Box>
      <Box padding={1} textAlign="center">
        {errors.login && <Typography variant="body1" sx={{ color: 'red' }}>Логин меньше 3 символов</Typography>}
        {errors.email && <Typography variant="body1" sx={{ color: 'red' }}>Некорректный email</Typography>}
        {errors.password && <Typography variant="body1" sx={{ color: 'red' }}>Пароль меньше 6 символов</Typography>}
      </Box>
    </Paper>
  );
};

export default LoginForm;
