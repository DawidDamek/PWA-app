import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GyroscopeComponent extends Component {
  @tracked x;
  @tracked y;
  @tracked z;
  @tracked gyroscope;

  constructor() {
    super(...arguments);
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        'deviceorientation',
        (event) => {
          const rotateDegrees = event.alpha; // alpha: rotation around z-axis
          const leftToRight = event.gamma; // gamma: left to right
          const frontToBack = event.beta; // beta: front back motion

          this.handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
        },
        true
      );
    }
  }
  handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
    this.x = frontToBack;
    this.y = leftToRight;
    this.z = rotateDegrees;
  };
}
