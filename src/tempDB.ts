/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import menuItem0 from './assets/menu-item-0.jpeg';
import menuItem1 from './assets/menu-item-1.jpeg';
import menuItem2 from './assets/menu-item-2.jpeg';
import menuItem3 from './assets/menu-item-3.jpeg';
import menuItem4 from './assets/menu-item-4.jpeg';
import menuItem5 from './assets/menu-item-5.jpeg';
import { TCategory, TMenuItem, TMenuItemLink } from './types';

export const menuItems:TMenuItem[] = [
  {
    id: '1',
    name: 'Куриная отбивная "Лепёшка"',
    image: menuItem1,
    ingredients: 'Куриная, отбавная, майонез',
    category: 'Второе',
    weghit: 120,
    price: 150,
  },
  {
    id: '2',
    name: 'Котлеты "Непонятные"',
    image: menuItem2,
    ingredients: 'Мясо, мякушек белого хлеба, специи по вкусу',
    category: 'Второе',
    weghit: 120,
    price: 150,
  },
  {
    id: '3',
    name: 'Салат "Винегретовый"',
    image: menuItem3,
    ingredients: 'Свекла, жадина-говядина, соленый огурец',
    category: 'Салаты',
    weghit: 120,
    price: 100,
  },
  {
    id: '4',
    name: 'Салат "Яички"',
    image: menuItem4,
    ingredients: 'Яйцо, сверху майонез',
    category: 'Салаты',
    weghit: 120,
    price: 100,
  },
  {
    id: '5',
    name: 'Суп "Макароновый"',
    image: menuItem5,
    ingredients: 'Вода питьевая, макароны съедобные, там зелень еще положим',
    category: 'Супы',
    weghit: 120,
    price: 100,
  },
  {
    id: '6',
    name: 'Куриная отбивная "Лепёшка"',
    image: menuItem1,
    ingredients: 'Куриная, отбавная, майонез',
    category: 'Второе',
    weghit: 120,
    price: 150,
  },
  {
    id: '7',
    name: 'Котлеты "Непонятные"',
    image: menuItem2,
    ingredients: 'Мясо, мякушек белого хлеба, специи по акусу',
    category: 'Второе',
    weghit: 120,
    price: 150,
  },
  {
    id: '8',
    name: 'Салат "Винегретовый"',
    image: menuItem3,
    ingredients: 'Свекла, жадина-говядина, соленый огурец',
    category: 'Салаты',
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
    link: '/menu',
  },
  {
    name: 'О нас',
    link: '/about',
  },
  {
    name: 'Доставк',
    link: '/delivery',
  },
  {
    name: 'Контакты',
    link: '/contacts',
  },
];
export const categories: TCategory[] = [
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
