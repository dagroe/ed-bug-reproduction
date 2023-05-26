import { module, test } from 'qunit';
import { visit, currentURL, findAll, find, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-data-bug/tests/helpers';

module('Acceptance | items', function (hooks) {
  setupApplicationTest(hooks);

  test('failing with 2 items', async function (assert) {

    server.createList('item', 2);

    await visit('/items');

    assert.strictEqual(currentURL(), '/items');

    assert.equal(findAll('[data-test-item]').length, 2);

    await click(find('[data-test-delete-button]'));

    assert.equal(findAll('[data-test-item]').length, 1);
  });

  test('passing with 3 items', async function (assert) {

    server.createList('item', 3);

    await visit('/items');

    assert.strictEqual(currentURL(), '/items');

    assert.equal(findAll('[data-test-item]').length, 3);

    await click(find('[data-test-delete-button]'));

    assert.equal(findAll('[data-test-item]').length, 2);
  });

  test('passing with 1 item', async function (assert) {

    server.createList('item', 1);

    await visit('/items');

    assert.strictEqual(currentURL(), '/items');

    assert.equal(findAll('[data-test-item]').length, 1);

    await click(find('[data-test-delete-button]'));

    assert.equal(findAll('[data-test-item]').length, 0);
  });
  test('passing with 42 item', async function (assert) {

    server.createList('item', 42);

    await visit('/items');

    assert.strictEqual(currentURL(), '/items');

    assert.equal(findAll('[data-test-item]').length, 42);

    await click(find('[data-test-delete-button]'));

    assert.equal(findAll('[data-test-item]').length, 41);
  });
});
