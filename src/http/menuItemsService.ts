import { authHttpRequest } from '.';
import { TMenuItemFomtValues } from '../types';

const URL = '/menu';
class MenuItemsService {
  static fetchAllMenuItems = async () => {
    const response = await authHttpRequest.get(URL);
    return response.data;
  };

  static addNewMenuItem = async (data:TMenuItemFomtValues, contentType?:string) => {
    const response = await authHttpRequest.post(URL, data, {
      headers: {
        'Content-Type': contentType || 'application/json',
      },
    });
    return response.data;
  };

  // static removeCategory = async (id:string) => {
  //   const response = await authHttpRequest.delete(`${URL}/${id}`);
  //   return response.data;
  // };
}

export default MenuItemsService;
