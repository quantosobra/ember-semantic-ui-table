import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui thead', function(hooks) {
  setupRenderingTest(hooks);

  test('tag name is thead', async function(assert) {
    assert.expect(1);

    await render(hbs`{{ui-thead}}`);

    assert.ok(findAll('thead').length);
  });
});