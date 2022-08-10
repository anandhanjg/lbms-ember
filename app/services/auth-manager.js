import Service from '@ember/service';
import fetch from 'fetch';
import ApiEndPoints from '../utils/endpoints';

export default class AuthManagerService extends Service {
  SESSION_KEY = 'session_id';

  async authenticate(username, password) {
    // let token = 'abcd';
    // localStorage.setItem(this.SESSION_KEY, token);

    const response = await fetch(ApiEndPoints.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      let data = await response.text();
      data = JSON.parse(data);
      if (data.success) {
        localStorage.setItem(this.SESSION_KEY, data.payload.token);
      } else {
        throw data.message;
      }
    }
  }

  invalidate() {
    localStorage.clear();
  }

  get isAuthenticated() {
    return (localStorage.getItem(this.SESSION_KEY) && true) ?? false;
  }

  get header() {
    return {
      Authorization: `Bearer ${localStorage.getItem(this.SESSION_KEY)}`,
    };
  }
}
