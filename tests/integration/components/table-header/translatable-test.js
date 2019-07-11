import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Column from 'ember-semantic-ui-table/classes/column';

let service;

module('Integration | Component | table header/translatable', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    service = this.owner.lookup('service:intl');
    service.setLocale('en-us');
  });

  test('header label is translated', async function(assert) {
    assert.expect(1);

    this.set('column', Column.create({ label: 'labels.first_name' }));
    await render(hbs`{{table-header/translatable column=column}}`);

    return settled().then(() => {
      assert.equal(find('*').textContent.trim(), 'First Name');
    });
  });
});
