import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import Column from 'ember-semantic-ui-table/classes/column';

let service;

moduleForComponent('table-header/translatable', 'Integration | Component | table header/translatable', {
  integration: true,
  setup() {
    service = this.container.lookup('service:intl');
    service.setLocale('en-us');
  }
});

test('header label is translated', function(assert) {
  assert.expect(1);

  this.set('column', new Column({ label: 'labels.first_name' }));
  this.render(hbs`{{table-header/translatable column=column}}`);

  return wait().then(() => {
    assert.equal(this.$().text().trim(), 'First Name');
  });
});
