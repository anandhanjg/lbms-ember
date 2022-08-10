import { API_URL } from './const';

export default class ApiEndPoints {
  static get login() {
    return API_URL + '/admins/login';
  }

  static get profile() {
    return API_URL + '/admins/profile';
  }

  static get bookSearch() {
    return API_URL + '/books/search';
  }
}
