import { module, test } from 'qunit';
import { setupTest } from 'library-management-system/tests/helpers';

module('Unit | Adapter | book', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:book');
    assert.ok(adapter);
  });
});
