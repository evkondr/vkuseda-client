/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { TCategory, TMenuItem, TMenuItemLink } from './types';

export const menuItemsLinks:TMenuItemLink[] = [
  {
    name: 'Главная',
    link: '#home',
  },
  {
    name: 'Наше меню',
    link: '#menu',
  },
  {
    name: 'О нас',
    link: '#about',
  },
  {
    name: 'Контакты',
    link: '#contacts',
  },
];
export const mainPageMenuItemLinks:TMenuItemLink[] = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'Меню',
    link: '/main/menu',
  },
  {
    name: 'О нас',
    link: '/main/about',
  },
  {
    name: 'Доставка',
    link: '/main/delivery',
  },
];
