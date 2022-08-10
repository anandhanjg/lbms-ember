import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class LoginRoute extends Route {
  @service authManager;
  @service router;

  beforeModel(transition) {
    if (this.authManager.isAuthenticated) {
      let loginController = this.controllerFor('login');
      loginController.previousTransition = transition;
      this.router.transitionTo('/admin/');
    }
  }
}
