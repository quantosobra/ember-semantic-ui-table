import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Column from 'ember-semantic-ui-table/classes/column';

module('Integration | Component | table cell/default', function(hooks) {
  setupRenderingTest(hooks);

  test('tag name is td', async function(assert) {
    assert.expect(1);

    await render(hbs`{{table-cell/default}}`);

    assert.ok(findAll('td').length);
  });

  test('collapsing column has class `collapsing`', async function(assert) {
    assert.expect(1);

    this.set('column', Column.create({ collapsing: true }));
    await render(hbs`{{table-cell/default column=column}}`);

    assert.ok(find('td').classList.contains('collapsing'));
  });
});