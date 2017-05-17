import { moduleForComponent, test } from 'ember-qunit';
import Table from 'ember-semantic-ui-table/classes/table';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-table', 'Integration | Component | ui table', {
  integration: true
});

test('tag name is table', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table}}`);

  assert.ok(this.$('table').length);
});

test('single line table has class `single line`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table singleLine=true}}`);

  assert.ok(this.$('table').hasClass('single line'));
});

test('sortable table has class `sortable`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table sortable=true}}`);

  assert.ok(this.$('table').hasClass('sortable'));
});

test('not stackable table has class `unstackable`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table stacking=false}}`);

  assert.ok(this.$('table').hasClass('unstackable'));
});

test('fixed table has class `fixed`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table fixed=true}}`);

  assert.ok(this.$('table').hasClass('fixed'));
});

test('striped table has class `striped`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table striped=true}}`);

  assert.ok(this.$('table').hasClass('striped'));
});

test('celled table has class `celled`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table celled=true}}`);

  assert.ok(this.$('table').hasClass('celled'));
});

test('padded table has class `padded`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table padded=true}}`);

  assert.ok(this.$('table').hasClass('padded'));
});

test('compact table has class `compact`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table compact=true}}`);

  assert.ok(this.$('table').hasClass('compact'));
});

test('small table has class `small`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table size="small"}}`);

  assert.ok(this.$('table').hasClass('small'));
});

test('large table has class `large`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table size="large"}}`);

  assert.ok(this.$('table').hasClass('large'));
});

test('table with row selection enabled has class `selectable`', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{ui-table table rowSelection=true}}`);

  assert.ok(this.$('table').hasClass('selectable'));
});
