import { authHttpRequest } from '.';

const fetchAllCategories = async () => {
  const response = await authHttpRequest.get('/categories');
  return response.data;
};

export default fetchAllCategories;
