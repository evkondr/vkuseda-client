import React from 'react';
import MenuFilter from '../MenuFilter/MenuFilter';
import { categories } from '../../tempDB';

const MenuPage = () => {
  return (
    <div>
      <MenuFilter categories={categories} />
      Menu Page
    </div>
  );
};

export default MenuPage;
