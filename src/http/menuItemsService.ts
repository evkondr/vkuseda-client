import { authHttpRequest, httpRequest } from '.';
import { TMenuItemFomtValues } from '../types';

const URL = '/menu';
class MenuItemsService {
  static fetchAllMenuItems = async () => {
    const response = await httpRequest.get(URL);
    return response.data;
  };

  static addNewMenuItem = async (data:TMenuItemFomtValues) => {
    const response = await authHttpRequest.post(URL, data);
    return response.data;
  };

  // static removeCategory = async (id:string) => {
  //   const response = await authHttpRequest.delete(`${URL}/${id}`);
  //   return response.data;
  // };
}

export default MenuItemsService;
