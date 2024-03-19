import { httpRequest, authHttpRequest } from '.';

const URL = '/auth';
class AuthService {
  static async userLogin(login:string, password:string) {
    const response = httpRequest.post(`${URL}/login`, {
      login,
      password,
    });
    return response;
  }

  static async registration(login:string, email: string, password:string) {
    const response = httpRequest.post(`${URL}/registration`, {
      login,
      email,
      password,
    });
    return response;
  }

  static async chechAuth() {
    const response = await authHttpRequest.get(`${URL}/check`);
    return response.data;
  }
}
export default AuthService;
