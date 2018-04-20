import Table from 'ember-semantic-ui-table/classes/table';
import Column from 'ember-semantic-ui-table/classes/column';
import Row from 'ember-semantic-ui-table/classes/row';
import { module, test } from 'qunit';

module('Unit | Classes | table', function() {
  test('Column instances are created when passed plain objects to table constructor', function(assert) {
    assert.expect(2);

    let table = new Table([
      {
        label: 'Column',
        valuePath: 'value'
      }
    ]);

    let column = table.get('columns.firstObject');
    assert.ok(column instanceof Column);
    assert.equal('Column', column.get('label'));
  });

  test('should not create a new Column object if a Column instance is provided', function(assert) {
    assert.expect(2);

    let table = new Table([
      Column.create({ label: 'Column' })
    ]);

    let column = table.get('columns.firstObject');
    assert.ok(column instanceof Column);
    assert.notOk(column.get('content') instanceof Column);
  });

  test('Row instances are created when passed plain objects to table constructor', function(assert) {
    assert.expect(2);

    let table = new Table([], [
      { foo: 'bar' }
    ]);

    let row = table.get('rows.firstObject');
    assert.ok(row instanceof Row);
    assert.equal('bar', row.get('foo'));
  });

  test('should not create a new Row object if a Row instance is provided', function(assert) {
    assert.expect(2);

    let table = new Table([], [
      Row.create({ foo: 'bar' })
    ]);

    let row = table.get('rows.firstObject');
    assert.ok(row instanceof Row);
    assert.notOk(row.get('content') instanceof Row);
  });
});