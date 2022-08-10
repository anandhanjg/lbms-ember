import { module, test } from 'qunit';
import { setupTest } from 'library-management-system/tests/helpers';

module('Unit | Route | home/admins', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:home/admins');
    assert.ok(route);
  });
});
