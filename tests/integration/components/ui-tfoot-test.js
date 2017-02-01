import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-tfoot', 'Integration | Component | ui tfoot', {
  integration: true
});

test('tag name is tfoot', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ui-tfoot}}`);

  assert.ok(this.$('tfoot').length);
});

test('footer content is rendered', function(assert) {
  assert.expect(1);

  this.render(hbs`{{#ui-tfoot}}footer content{{/ui-tfoot}}`);

  assert.equal(this.$().text().trim(), 'footer content');
});
