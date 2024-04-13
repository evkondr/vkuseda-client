import { authHttpRequest, httpRequest } from '.';

const URL = '/days';

export default class DailyMenuService {
  static async getAllWeekDays() {
    const response = await httpRequest.get(URL);
    return response.data;
  }

  static async addWeekDay(name: string) {
    const response = await authHttpRequest.post(URL, { name });
    return response.data;
  }

  static async deleteWeekDay(daiId: string) {
    const response = await authHttpRequest.delete(`${URL}/${daiId}`);
    return response.data;
  }

  static async addMenuItem(dayId:string, menuItemId:string) {
    const response = await authHttpRequest.post(`${URL}/add-menu-items`, { dayId, menuItemId });
    return response.data;
  }
}
