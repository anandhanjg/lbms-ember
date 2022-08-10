import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class LoginController extends Controller {
  @service authManager;
  @service router;

  @tracked username;
  @tracked password;
  @tracked error;

  @action
  async authenticate(e) {
    e.preventDefault();
    try {
      await this.authManager.authenticate(this.username, this.password);
      this.router.transitionTo('/admin/');
      this.username = '';
      this.password = '';
      this.error = '';
    } catch (err) {
      this.error = err.message || err;
      setTimeout(() => (this.error = null), 2000);
    }
  }
}
