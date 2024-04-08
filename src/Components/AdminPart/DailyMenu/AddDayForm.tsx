import React from 'react';
import {
  Box, InputLabel, MenuItem, Select, FormControl,
} from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';
import { TWeekDay } from '../../../types';

interface IProps {
  registers: {
    nameRegister: UseFormRegisterReturn<'name'>
  },
  weekDays: TWeekDay[],
}
// Component
const AddDayForm = ({ registers, weekDays }:IProps) => {
  // init data
  const { nameRegister } = registers;
  const allWeekDays = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье',
  ];
  const createdDays = weekDays.map((item) => item.name);
  // Make new array of available week days to exclude repetitive days in the DB
  const availableWeekDays = allWeekDays.filter((item) => !createdDays.includes(item));
  return (
    <Box padding={2}>
      <FormControl fullWidth>
        <InputLabel id="week-day">День</InputLabel>
        <Select
          required
          labelId="week-day"
          id="week-day"
          label="День"
          name={nameRegister.name}
          onBlur={nameRegister.onBlur}
          onChange={nameRegister.onChange}
          ref={nameRegister.ref}
        >
          {availableWeekDays.map((day) => <MenuItem key={day} value={day}>{day}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddDayForm;
