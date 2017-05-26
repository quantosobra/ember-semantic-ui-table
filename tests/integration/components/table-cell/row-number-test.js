import { moduleForComponent, test } from 'ember-qunit';
import Table from 'ember-semantic-ui-table/classes/table';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('table-cell/row-number', 'Integration | Component | table cell/row number', {
  integration: true
});

test('it renders rows number starting from one', function(assert) {
  assert.expect(5);

  let columns = [{ cellType: 'row-number' }];
  let rows = [{ text: 'Dummy' }, { text: 'Dummy' }, { text: 'Dummy' }];

  this.set('table', new Table(columns, rows));
  this.render(hbs`{{ui-tbody table=table}}`);

  assert.equal(this.$('tr').length, 3);
  assert.equal(this.$('tr td').length, 3);
  assert.equal(this.$('tr td').eq(0).text().trim(), '1');
  assert.equal(this.$('tr td').eq(1).text().trim(), '2');
  assert.equal(this.$('tr td').eq(2).text().trim(), '3');
});
