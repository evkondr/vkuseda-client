import { authHttpRequest } from '.';
import { TSettings } from '../types';

const URL = '/settings';
class SettingsService {
  static async getAllSettings() {
    const response = await authHttpRequest.get(URL);
    return response.data;
  }

  static async updateSettingsOption(id:string, value:string | boolean) {
    const response = await authHttpRequest.patch(`${URL}/${id}`, { value });
    return response.data;
  }

  static async updateAllSettings(values:TSettings) {
    const response = await authHttpRequest.post(`${URL}/update`, values);
    return response.data;
  }
}
export default SettingsService;
