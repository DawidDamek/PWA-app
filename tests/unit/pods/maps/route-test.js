import { module, test } from 'qunit';
import { setupTest } from 'pwa-app/tests/helpers';

module('Unit | Route | maps', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:maps');
    assert.ok(route);
  });
});
