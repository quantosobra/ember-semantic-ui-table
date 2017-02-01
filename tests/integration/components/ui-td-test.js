import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-td', 'Integration | Component | ui td', {
  integration: true
});

test('tag name is td', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ui-td}}`);

  assert.ok(this.$('td').length);
});
