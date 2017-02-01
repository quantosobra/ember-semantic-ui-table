import Column from 'ember-semantic-ui-table/classes/column';
import { module, test } from 'qunit';

module('Unit | Classes | column');

test('setting `visible` should change `hidden`', function(assert) {
  assert.expect(4);

  let column = Column.create();
  assert.ok(column.get('visible'), 'Column is visible');
  assert.notOk(column.get('hidden'), 'Column is not hidden');

  column.set('visible', false);
  assert.notOk(column.get('visible'), 'Column is not visible');
  assert.ok(column.get('hidden'), 'Column is hidden');
});
