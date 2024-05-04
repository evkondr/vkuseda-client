import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Box, FormGroup, FormControlLabel, Switch, TextField, Stack, Button,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAllSettingsAsync, updateAllSettingsAsync } from '../../../store/thunks/settingsThunk';
import AdminContainer from '../AdminContainer/AdminContainer';
import { TSettings } from '../../../types';

const SettingsPage = () => {
  // Init state
  const [isEdit, setEdit] = useState<boolean>(false);
  const { settings } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const { boolSettings, textSettings } = settings;
  const { register, handleSubmit } = useForm<TSettings>();
  // Handlers
  const onSubmitHandler:SubmitHandler<TSettings> = (data) => {
    dispatch(updateAllSettingsAsync(data));
    setEdit(false);
  };
  // Effects
  useEffect(() => {
    dispatch(getAllSettingsAsync());
  }, [dispatch]);
  return (
    <AdminContainer headerText="Настройка сайта">
      <Box padding={2}>
        <Box component="form" onSubmit={handleSubmit(onSubmitHandler)}>
          <FormGroup>
            {boolSettings.map((item) => {
              const reg = register(item.name as 'name');
              return (
                <FormControlLabel
                  key={item.id}
                  control={(
                    <Switch
                      defaultChecked={item.value as boolean}
                      name={reg.name}
                      ref={reg.ref}
                      onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        reg.onChange(e);
                        setEdit(true);
                      }}
                    />
                  )}
                  label={item.name}
                />
              );
            })}
          </FormGroup>
          <Stack direction="column" rowGap={2} paddingTop={2} maxWidth="500px">
            {textSettings.map((item) => {
              if (item.name === 'Название сайта') {
                const reg = register(item.name as 'name');
                return (
                  <TextField
                    id="outlined-basic"
                    key={item.id}
                    defaultValue={item.value}
                    label={item.name}
                    variant="outlined"
                    name={reg.name}
                    ref={reg.ref}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                      reg.onChange(e);
                      setEdit(true);
                    }}
                  />
                );
              }
              return null;
            })}
            {textSettings.map((item) => {
              if (item.name === 'Слоган') {
                const reg = register(item.name as 'name');
                return (
                  <TextField
                    key={item.id}
                    multiline
                    rows={3}
                    defaultValue={item.value}
                    id="outlined-basic"
                    label={item.name}
                    variant="outlined"
                    name={reg.name}
                    ref={reg.ref}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                      reg.onChange(e);
                      setEdit(true);
                    }}
                  />
                );
              }
              return null;
            })}
            {textSettings.map((item) => {
              if (item.name.includes('сумма')) {
                const reg = register(item.name as 'name');
                return (
                  <TextField
                    type="number"
                    id="outlined-basic"
                    key={item.id}
                    defaultValue={item.value}
                    label={item.name}
                    variant="outlined"
                    sx={{ maxWidth: '250px' }}
                    name={reg.name}
                    ref={reg.ref}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                      reg.onChange(e);
                      setEdit(true);
                    }}
                  />
                );
              }
              return null;
            })}
            {textSettings.map((item) => {
              if (item.name === 'Телефон') {
                const reg = register(item.name as 'name');
                return (
                  <TextField
                    type="number"
                    id="outlined-basic"
                    key={item.id}
                    defaultValue={item.value}
                    label={item.name}
                    variant="outlined"
                    sx={{ maxWidth: '250px' }}
                    name={reg.name}
                    ref={reg.ref}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                      reg.onChange(e);
                      setEdit(true);
                    }}
                  />
                );
              }
              return null;
            })}
          </Stack>
          {isEdit && (
          <Box marginTop={2}>
            <Button type="submit" variant="contained">Сохранить</Button>
          </Box>
          )}
        </Box>
      </Box>
    </AdminContainer>
  );
};

export default SettingsPage;
