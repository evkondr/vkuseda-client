import { httpRequest, authHttpRequest } from '.';
import { TSendOrderValues } from '../types';

const URL = '/orders';
class OrdersService {
  static async getOrders() {
    const response = await authHttpRequest.get(URL);
    return response.data;
  }

  static async updateOrder(id:string, updates:{isDone:boolean}) {
    const response = await authHttpRequest.patch(`${URL}/${id}`, updates);
    return response.data;
  }

  static async sendOrder(data:TSendOrderValues) {
    const response = await httpRequest.post(`${URL}/send-order`, data);
    return response.data;
  }
}
export default OrdersService;
