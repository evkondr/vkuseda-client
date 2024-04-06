import React from 'react';
import {
  Box, InputLabel, MenuItem, Select, FormControl,
} from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  registers: {
    nameRegister: UseFormRegisterReturn<'name'>
  }
}
const AddDayForm = ({ registers }:IProps) => {
  const { nameRegister } = registers;
  const weekDays = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье',
  ];
  return (
    <Box padding={2}>
      <FormControl fullWidth>
        <InputLabel id="week-day">День</InputLabel>
        <Select
          required
          labelId="week-day"
          id="week-day"
          label="День"
          defaultValue={weekDays[0]}
          name={nameRegister.name}
          onBlur={nameRegister.onBlur}
          onChange={nameRegister.onChange}
          ref={nameRegister.ref}
        >
          {weekDays.map((day) => <MenuItem key={day} value={day}>{day}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddDayForm;
