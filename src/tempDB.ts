/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import menuItem1 from './assets/menu-item-1.jpg';
import menuItem2 from './assets/menu-item-2.jpg';
import menuItem3 from './assets/menu-item-3.jpg';
import menuItem4 from './assets/menu-item-4.jpg';
import menuItem5 from './assets/menu-item-5.jpg';
import menuItem6 from './assets/menu-item-6.jpg';
import menuItem7 from './assets/menu-item-7.jpg';
import menuItem8 from './assets/menu-item-8.jpg';
import { TCategory, TMenuItem, TMenuItemLink } from './types';

export const menuItems:TMenuItem[] = [
  {
    id: '1',
    name: 'Салат "Мимоза"',
    image: menuItem1,
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Салаты',
    weghit: 120,
    price: 150,
  },
  {
    id: '2',
    name: 'Курица запеченая под сыром',
    image: menuItem2,
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Вторые блюда',
    weghit: 120,
    price: 150,
  },
  {
    id: '3',
    name: 'Курица запеченая под сыром',
    image: menuItem3,
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Первые блюда',
    weghit: 120,
    price: 100,
  },
  {
    id: '4',
    name: 'Куриная ножка',
    image: menuItem4,
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Первые блюда',
    weghit: 120,
    price: 100,
  },
  {
    id: '5',
    name: 'Суп "Харчо"',
    image: menuItem5,
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Супы',
    weghit: 120,
    price: 100,
  },
  {
    id: '6',
    name: 'Плов',
    image: menuItem6,
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Вторые блюда',
    weghit: 120,
    price: 150,
  },
  {
    id: '7',
    name: 'Котлеты запеченне',
    image: menuItem7,
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Первые блюда',
    weghit: 120,
    price: 150,
  },
  {
    id: '8',
    name: 'Суп "Борщ"',
    image: menuItem8,
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Супы',
    weghit: 120,
    price: 100,
  },
];
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
    name: 'Доставк',
    link: '/main/delivery',
  },
  {
    name: 'Контакты',
    link: '/main/contacts',
  },
];
export const categories: TCategory[] = [
  {
    id: '0',
    name: 'Все',
  },
  {
    id: '1',
    name: 'Первые блюда',
  },
  {
    id: '2',
    name: 'Вторые блюда',
  },
  {
    id: '3',
    name: 'Гарниры',
  },
  {
    id: '4',
    name: 'Десерты',
  },
  {
    id: '5',
    name: 'Салаты',
  },
];
