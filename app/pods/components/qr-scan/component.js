import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class QrOdAdamaComponent extends Component {
  @tracked device;
  @tracked result = '';
  @tracked isScanning = false;

  @action
  onDevicesFound(device) {
    this.device = device;
  }

  @action
  onScanSuccess(result) {
    this.result = result.text;
    console.log(result.text);
    this.isScanning = false;
  }

  @action
  onScanError(error) {
    console.log(error);
  }

  @action
  onDevicesError() {
    console.log('dev err');
  }

  @action
  onScanToggle() {
    this.isScanning = !this.isScanning;
    this.result = '';
  }
}
