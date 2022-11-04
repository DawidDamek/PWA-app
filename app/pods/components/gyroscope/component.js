import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

// import { action } from '@ember/object';

export default class GyroscopeComponent extends Component {
  @service fastboot;
  @tracked beta;
  @tracked gamma;
  @tracked alpha;

  constructor() {
    super(...arguments);
    if (!this.fastboot.isFastBoot) {
      DeviceOrientationEvent.requestPermission?.()
        .then((response) => {
          if (response == 'granted') {
            window.addEventListener('deviceorientation', (event) => {
              this.beta = event.beta.toFixed(1);
              this.gamma = event.gamma.toFixed(1);
              this.alpha = event.alpha.toFixed(1);
            });
          }
        })
        .catch(console.error);
    }
  }

  willDestroy() {
    super.willDestroy(...arguments);
  }
}
