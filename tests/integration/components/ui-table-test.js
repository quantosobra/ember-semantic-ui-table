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
