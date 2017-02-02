import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('table-cell/default', 'Integration | Component | table cell/default', {
  integration: true
});

test('tag name is td', function(assert) {
  assert.expect(1);

  this.render(hbs`{{table-cell/default}}`);

  assert.ok(this.$('td').length);
});
