import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import Table from 'ember-semantic-ui-table/classes/table';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui table', function(hooks) {
  setupRenderingTest(hooks);

  test('tag name is table', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table}}`);

    assert.ok(findAll('table').length);
  });

  test('single line table has class `single line`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table singleLine=true}}`);

    assert.ok(find('table').className.indexOf('single line') !== -1);
  });

  test('sortable table has class `sortable`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table sortable=true}}`);

    assert.ok(find('table').classList.contains('sortable'));
  });

  test('not stackable table has class `unstackable`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table stacking=false}}`);

    assert.ok(find('table').classList.contains('unstackable'));
  });

  test('fixed table has class `fixed`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table fixed=true}}`);

    assert.ok(find('table').classList.contains('fixed'));
  });

  test('striped table has class `striped`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table striped=true}}`);

    assert.ok(find('table').classList.contains('striped'));
  });

  test('celled table has class `celled`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table celled=true}}`);

    assert.ok(find('table').classList.contains('celled'));
  });

  test('padded table has class `padded`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table padded=true}}`);

    assert.ok(find('table').classList.contains('padded'));
  });

  test('compact table has class `compact`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table compact=true}}`);

    assert.ok(find('table').classList.contains('compact'));
  });

  test('small table has class `small`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table size="small"}}`);

    assert.ok(find('table').classList.contains('small'));
  });

  test('large table has class `large`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table size="large"}}`);

    assert.ok(find('table').classList.contains('large'));
  });

  test('table with row selection enabled has class `selectable`', async function(assert) {
    assert.expect(1);

    this.set('table', Table.create());
    await render(hbs`{{ui-table table rowSelection=true}}`);

    assert.ok(find('table').classList.contains('selectable'));
  });
});
