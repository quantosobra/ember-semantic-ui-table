import Ember from 'ember';
import CellAlignmentMixin from 'ember-semantic-ui-table/mixins/cell-alignment';
import Column from 'ember-semantic-ui-table/classes/column';
import { module, test } from 'qunit';

module('Unit | Mixin | cell alignment');

test('text alignment class is correct', function(assert) {
  let column = Column.create({ align: 'center' });
  let CellAlignmentObject = Ember.Object.extend(CellAlignmentMixin);
  let subject = CellAlignmentObject.create({ column });

  assert.equal(subject.get('alignClass'), 'center aligned');
});

test('vertical alignment class is correct', function(assert) {
  let column = Column.create({ verticalAlign: 'bottom' });
  let CellAlignmentObject = Ember.Object.extend(CellAlignmentMixin);
  let subject = CellAlignmentObject.create({ column });

  assert.equal(subject.get('verticalAlignClass'), 'bottom aligned');
});
