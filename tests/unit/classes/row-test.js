import Row from 'ember-semantic-ui-table/classes/row';
import { module, test } from 'qunit';

module('Unit | Classes | row', function() {
  test('options passed to create should be set on object', function(assert) {
    assert.expect(1);

    let content = {};
    let row = Row.create(content, { selected: true });

    assert.ok(row.get('selected'));
  });

  test('content should be proxied to row object', function(assert) {
    assert.expect(1);

    let content = { foo: 'bar' };
    let row = Row.create(content);

    assert.equal(row.get('foo'), 'bar');
  });
});