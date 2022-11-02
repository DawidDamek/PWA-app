import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class OnlineStatusComponent extends Component {
  @tracked isOnline = navigator.onLine;

  constructor() {
    super(...arguments);
    window.addEventListener('online', () => (this.isOnline = true));
    window.addEventListener('offline', () => (this.isOnline = false));
  }
}
