import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-tr', 'Integration | Component | ui tr', {
  integration: true
});

test('tag name is tr', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ui-tr}}`);

  assert.ok(this.$('tr').length);
});
