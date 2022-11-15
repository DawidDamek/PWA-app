import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class OnlineStatusComponent extends Component {
  @service fastboot;
  @tracked isOnline;

  constructor() {
    super(...arguments);
    if (!this.fastboot.isFastBoot) {
      this.isOnline = navigator.onLine;
      window.addEventListener('online', this.onSetOnline);
      window.addEventListener('offline', this.onSetOffline);
    }
  }
  @action
  onSetOnline() {
    this.isOnline = true;
  }

  @action
  onSetOffline() {
    this.isOnline = false;
  }

  willDestroy() {
    super.willDestroy(...arguments);
    window.removeEventListener?.('online', this.onOnline);
    window.removeEventListener?.('offline', this.onOffline);
  }
}
