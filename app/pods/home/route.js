import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  willDestroy() {
    super.willDestroy(...arguments);
    window.removeEventListener('online', false);
    window.removeEventListener('offline', false);
  }
}
