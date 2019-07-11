import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Column from 'ember-semantic-ui-table/classes/column';

module('Integration | Component | table header/default', function(hooks) {
  setupRenderingTest(hooks);

  test('tag name is th', async function(assert) {
    assert.expect(1);

    await render(hbs`{{table-header/default}}`);

    assert.ok(findAll('th').length);
  });

  test('sortable column has class `sortable`', async function(assert) {
    assert.expect(1);

    this.set('column', Column.create({ sortable: true }));
    await render(hbs`{{table-header/default column=column}}`);

    assert.ok(find('th').classList.contains('sortable'));
  });

  test('sorted column has class `sorted`', async function(assert) {
    assert.expect(1);

    this.set('column', Column.create({ sorted: true }));
    await render(hbs`{{table-header/default column=column}}`);

    assert.ok(find('th').classList.contains('sorted'));
  });

  test('collapsing column has class `collapsing`', async function(assert) {
    assert.expect(1);

    this.set('column', Column.create({ collapsing: true }));
    await render(hbs`{{table-header/default column=column}}`);

    assert.ok(find('th').classList.contains('collapsing'));
  });

  test('column configured with width has correct class', async function(assert) {
    assert.expect(2);

    this.set('column', Column.create({ width: 'ten wide' }));
    await render(hbs`{{table-header/default column=column}}`);

    assert.ok(find('th').classList.contains('ten'));
    assert.ok(find('th').classList.contains('wide'));
  });
});