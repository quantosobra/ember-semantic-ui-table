import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-th', 'Integration | Component | ui th', {
  integration: true
});

test('tag name is th', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ui-th}}`);

  assert.ok(this.$('th').length);
});
