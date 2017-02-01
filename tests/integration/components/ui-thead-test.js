import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-thead', 'Integration | Component | ui thead', {
  integration: true
});

test('tag name is thead', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ui-thead}}`);

  assert.ok(this.$('thead').length);
});
