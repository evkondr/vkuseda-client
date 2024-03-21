const NAME = 'tkn';

export default class TokenManager {
  static save(value:string) {
    localStorage.setItem(NAME, value);
  }

  static getValue() {
    return localStorage.getItem(NAME);
  }

  static removeValue() {
    localStorage.removeItem(NAME);
  }
}
