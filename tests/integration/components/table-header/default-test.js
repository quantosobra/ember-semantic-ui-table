import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('table-header/default', 'Integration | Component | table header/default', {
  integration: true
});

test('tag name is th', function(assert) {
  assert.expect(1);

  this.render(hbs`{{table-header/default}}`);

  assert.ok(this.$('th').length);
});
