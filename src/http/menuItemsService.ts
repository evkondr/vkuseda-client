import { authHttpRequest, httpRequest } from '.';
import { TMenuItemFormValues } from '../types';

const URL = '/menu';
class MenuItemsService {
  static fetchAllMenuItems = async () => {
    const response = await authHttpRequest.get(URL);
    return response.data;
  };

  static fetchAllMenuItemsOnClient = async () => {
    const response = await httpRequest.get(URL);
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

  static deleteMenuItem = async (id:string) => {
    const response = await authHttpRequest.delete(`${URL}/${id}`);
    return response.data;
  };

  static updateMenuItem = async (
    id:string,
    changes: Partial<TMenuItemFormValues>,
    contentType?:string,
  ) => {
    const response = await authHttpRequest.patch(`${URL}/${id}`, changes, {
      headers: {
        'Content-Type': contentType || 'application/json',
      },
    });
    return response.data;
  };
}

export default MenuItemsService;
