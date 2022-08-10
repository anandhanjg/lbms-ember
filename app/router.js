import EmberRouter from '@ember/routing/router';
import config from 'library-management-system/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/admin' }, function () {
    this.route('books', { path: '/' });
    this.route('users');
    this.route('admins');
    this.route('rents');
  });
  this.route('login');
  this.route('search', { path: '/' });
});
