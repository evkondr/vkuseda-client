import { authHttpRequest, httpRequest } from '.';
import { TMenuItemFormValues } from '../types';

const URL = '/menu';
class MenuItemsService {
  static fetchAllMenuItems = async () => {
    const response = await authHttpRequest.get(URL);
    return response.data;
  };

  static addNewMenuItem = async (data:TMenuItemFormValues, contentType?:string) => {
    const response = await authHttpRequest.post(URL, data, {
      headers: {
        'Content-Type': contentType || 'application/json',
      },
    });
    return response.data;
  };

  static removeMenuItem = async (id:string) => {
    const response = await authHttpRequest.delete(`${URL}/${id}`);
    return response.data;
  };

  static editMenuItem = async (id:string, changes: Partial<TMenuItemFormValues>) => {
    const response = await authHttpRequest.patch(`${URL}/${id}`, changes);
    return response.data;
  };

  static addToPromo = async (id:string) => {
    const response = await authHttpRequest.post(`${URL}/promo`, { menuItemId: id });
    return response.data;
  };

  static deleteFromPromo = async (id:string) => {
    const response = await authHttpRequest.delete(`${URL}/promo`, { data: { menuItemId: id } });
    return response.data;
  };

  static getAllPromos = async () => {
    const response = await httpRequest.get(`${URL}/promo`);
    return response.data;
  };
}

export default MenuItemsService;
