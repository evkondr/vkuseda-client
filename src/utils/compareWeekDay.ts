import { TWeekDayUnion } from '../types';

export default (weekDay: TWeekDayUnion) => {
  const week = [
    'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  const menuDayNumber = week.indexOf(weekDay) + 1;
  const currenDayNumber = new Date().getDay();
  return menuDayNumber === currenDayNumber;
};
