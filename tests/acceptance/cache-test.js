import { module, test } from 'qunit';
import { visit, currentURL, findAll, find, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-data-bug/tests/helpers';

module('Acceptance | lists', function (hooks) {
  setupApplicationTest(hooks);

  test('test update', async function (assert) {
    const items = server.createList('item', 2);
    server.create('list', {name: 'list #1', items: items});
    await visit('/lists');
    await click(find('[data-test-update-button]'));
    await click(find('[data-test-update-button]'));

    assert.equal(findAll('[data-test-list]').length, 1);
  });
});
