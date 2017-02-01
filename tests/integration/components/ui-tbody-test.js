import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-tbody', 'Integration | Component | ui tbody', {
  integration: true
});

test('tag name is tbody', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ui-tbody}}`);

  assert.ok(this.$('tbody').length);
});
