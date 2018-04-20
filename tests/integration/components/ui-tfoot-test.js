import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui tfoot', function(hooks) {
  setupRenderingTest(hooks);

  test('tag name is tfoot', async function(assert) {
    assert.expect(1);

    await render(hbs`{{ui-tfoot}}`);

    assert.ok(findAll('tfoot').length);
  });

  test('footer content is rendered', async function(assert) {
    assert.expect(1);

    await render(hbs`{{#ui-tfoot}}footer content{{/ui-tfoot}}`);

    assert.equal(find('*').textContent.trim(), 'footer content');
  });
});