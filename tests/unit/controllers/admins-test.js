import { module, test } from 'qunit';
import { setupTest } from 'library-management-system/tests/helpers';

module('Unit | Controller | admins', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:admins');
    assert.ok(controller);
  });
});
