import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
export default class HomeRentsRoute extends Route {
  @service store;

  model() {
    return RSVP.hash({
      books: this.store.peekAll('book'),
      users: this.store.peekAll('user'),
      rents: this.store.findAll('rent'),
    });
  }
}
