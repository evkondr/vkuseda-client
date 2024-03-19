import { authHttpRequest, httpRequest } from '.';

const URL = '/categories';
class CategoriesService {
  static fetchAllCategories = async () => {
    const response = await authHttpRequest.get(URL);
    return response.data;
  };

  static fetchCategoriesOnClient = async () => {
    const response = await httpRequest.get(URL);
    return response.data;
  };

  static addNewCategory = async (name:string) => {
    const response = await authHttpRequest.post(URL, {
      name,
    });
    return response.data;
  };

  static removeCategory = async (id:string) => {
    const response = await authHttpRequest.delete(`${URL}/${id}`);
    return response.data;
  };
}

export default CategoriesService;
