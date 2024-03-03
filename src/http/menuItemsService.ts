import { httpRequest } from '.';

const URL = '/menu';
class MenuItemsService {
  static fetchAllMenuItems = async () => {
    const response = await httpRequest.get(URL);
    return response.data;
  };

  // static addNewCategory = async (name:string) => {
  //   const response = await authHttpRequest.post(URL, {
  //     name,
  //   });
  //   return response.data;
  // };

  // static removeCategory = async (id:string) => {
  //   const response = await authHttpRequest.delete(`${URL}/${id}`);
  //   return response.data;
  // };
}

export default MenuItemsService;
