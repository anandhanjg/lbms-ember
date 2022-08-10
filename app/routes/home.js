import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
export default class HomeRoute extends Route {
  @service authManager;
  @service router;
  @service store;

  beforeModel(transition) {
    if (!this.authManager.isAuthenticated) {
      this.router.transitionTo('login');
    }
  }

  model() {
    return RSVP.hash({
      books: this.store.findAll('book'),
      users: this.store.findAll('user'),
      rents: this.store.findAll('admin'),
    });
  }
}
