import EmberRouter from '@ember/routing/router';
import config from 'pwa-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('maps');
  this.route('notes');
  this.route('scan');
  this.route('gyro');
});
