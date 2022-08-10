import { module, test } from 'qunit';
import { setupTest } from 'library-management-system/tests/helpers';

module('Unit | Adapter | user', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:user');
    assert.ok(adapter);
  });
});
