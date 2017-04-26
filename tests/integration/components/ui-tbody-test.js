import { moduleForComponent, test } from 'ember-qunit';
import Table from 'ember-semantic-ui-table/classes/table';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-tbody', 'Integration | Component | ui tbody', {
  integration: true
});

test('tag name is tbody', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ui-tbody}}`);

  assert.ok(this.$('tbody').length);
});

test('it renders rows in the table', function(assert) {
  assert.expect(3);

  let columns = [{ label: 'Column', valuePath: 'text' }];
  let rows = [{ text: 'This is a test' }];

  this.set('table', new Table(columns, rows));
  this.render(hbs`{{#ui-tbody table=table}}Table is empty{{/ui-tbody}}`);

  assert.equal(this.$('tr').length, 1);
  assert.equal(this.$('tr td').length, 1);
  assert.equal(this.$('tr td').text().trim(), 'This is a test');
});

test('it renders block content when table is empty', function(assert) {
  assert.expect(1);

  this.set('table', new Table());
  this.render(hbs`{{#ui-tbody table=table}}Table is empty{{/ui-tbody}}`);

  assert.equal(this.$('').text().trim(), 'Table is empty');
});
