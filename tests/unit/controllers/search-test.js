import { module, test } from 'qunit';
import { setupTest } from 'library-management-system/tests/helpers';

module('Unit | Controller | search', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:search');
    assert.ok(controller);
  });
});
