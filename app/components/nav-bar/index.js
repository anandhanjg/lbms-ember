import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class NavBarComponent extends Component {
  @tracked navCollapse = false;
  @tracked navSelected = 'books';
  @service authManager;
  @service router;

  @action
  toggle() {
    this.navCollapse = !this.navCollapse;
  }

  @action
  logout() {
    this.authManager.invalidate();
    this.router.transitionTo('');
  }

  @action
  selNav(val) {
    this.navSelected = val;
  }
}
