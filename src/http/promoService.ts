import { authHttpRequest, httpRequest } from '.';

const URL = '/menu/promo';
class PromoService {
  static getAllPromos = async () => {
    const response = await httpRequest.get(URL);
    return response.data;
  };

  static addToPromo = async (id:string) => {
    const response = await authHttpRequest.post(URL, { menuItemId: id });
    return response.data;
  };

  static deleteFromPromo = async (id:string) => {
    const response = await authHttpRequest.delete(URL, { data: { menuItemId: id } });
    return response.data;
  };
}
export default PromoService;
