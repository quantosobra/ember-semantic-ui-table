import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Column from 'ember-semantic-ui-table/classes/column';

moduleForComponent('table-header/default', 'Integration | Component | table header/default', {
  integration: true
});

test('tag name is th', function(assert) {
  assert.expect(1);

  this.render(hbs`{{table-header/default}}`);

  assert.ok(this.$('th').length);
});

test('sortable column has class `sortable`', function(assert) {
  assert.expect(1);

  this.set('column', new Column({ sortable: true }));
  this.render(hbs`{{table-header/default column=column}}`);

  assert.ok(this.$('th').hasClass('sortable'));
});

test('sorted column has class `sorted`', function(assert) {
  assert.expect(1);

  this.set('column', new Column({ sorted: true }));
  this.render(hbs`{{table-header/default column=column}}`);

  assert.ok(this.$('th').hasClass('sorted'));
});

test('collapsing column has class `collapsing`', function(assert) {
  assert.expect(1);

  this.set('column', new Column({ collapsing: true }));
  this.render(hbs`{{table-header/default column=column}}`);

  assert.ok(this.$('th').hasClass('collapsing'));
});

test('column configured with width has correct class', function(assert) {
  assert.expect(2);

  this.set('column', new Column({ width: 'ten wide' }));
  this.render(hbs`{{table-header/default column=column}}`);

  assert.ok(this.$('th').hasClass('ten'));
  assert.ok(this.$('th').hasClass('wide'));
});
