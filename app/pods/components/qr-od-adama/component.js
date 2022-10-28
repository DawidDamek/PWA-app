import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class QrOdAdamaComponent extends Component {
  @tracked device;
  @tracked result = '';

  @action
  onDevicesFound(device) {
    this.device = device;
  }

  @action
  onScanSuccess(result) {
    this.result = result.text;
    console.log(result.text);
  }

  @action
  onScanError() {
    console.log('err');
  }

  @action
  onDevicesError() {
    console.log('dev err');
  }

  @action
  resetResult() {
    this.result = '';
  }
}
