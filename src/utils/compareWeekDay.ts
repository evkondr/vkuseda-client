import { TWeekDayUnion } from '../types';

export default (weekDay: TWeekDayUnion) => {
  const week = [
    'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  let menuDayNumber = week.indexOf(weekDay) + 1;
  if (menuDayNumber > 6) menuDayNumber = 0;
  const currentDayNumber = new Date().getDay();
  return menuDayNumber === currentDayNumber;
};
