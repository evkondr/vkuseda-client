import { authHttpRequest } from '.';

const URL = '/categories';
class CategoriesService {
  static fetchAllCategories = async () => {
    const response = await authHttpRequest.get(URL);
    return response.data;
  };

  static addNewCategory = async (name:string) => {
    const response = await authHttpRequest.post(URL, {
      name,
    });
    return response.data;
  };
}

export default CategoriesService;
