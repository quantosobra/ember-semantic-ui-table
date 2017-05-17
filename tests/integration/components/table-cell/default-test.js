import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Column from 'ember-semantic-ui-table/classes/column';

moduleForComponent('table-cell/default', 'Integration | Component | table cell/default', {
  integration: true
});

test('tag name is td', function(assert) {
  assert.expect(1);

  this.render(hbs`{{table-cell/default}}`);

  assert.ok(this.$('td').length);
});

test('collapsing column has class `collapsing`', function(assert) {
  assert.expect(1);

  this.set('column', new Column({ collapsing: true }));
  this.render(hbs`{{table-cell/default column=column}}`);

  assert.ok(this.$('td').hasClass('collapsing'));
});
