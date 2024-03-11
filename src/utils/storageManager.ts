import { TCartItem } from '../types';

type TCart = {
  cartItems: TCartItem[],
  amount: number,
  total: number,
}

class StorageManager {
  private menuItemsKey:string;

  constructor() {
    this.menuItemsKey = 'menu-items';
  }

  getCartValues():TCart {
    const cartValuesString = localStorage.getItem(this.menuItemsKey);
    if (cartValuesString) {
      const cartValues = JSON.parse(cartValuesString) as TCart;
      return cartValues;
    }
    return {
      cartItems: [],
      amount: 0,
      total: 0,
    };
  }

  setCartValues(cartValues:TCart) {
    const cartValuesString = JSON.stringify(cartValues);
    localStorage.setItem(this.menuItemsKey, cartValuesString);
  }

  clearCartValues() {
    localStorage.removeItem(this.menuItemsKey);
  }
}
export default StorageManager;
