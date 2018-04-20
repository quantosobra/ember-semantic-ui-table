import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, find } from '@ember/test-helpers';
import Table from 'ember-semantic-ui-table/classes/table';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui tbody', function(hooks) {
  setupRenderingTest(hooks);

  test('tag name is tbody', async function(assert) {
    assert.expect(1);

    await render(hbs`{{ui-tbody}}`);

    assert.ok(findAll('tbody').length);
  });

  test('it renders rows in the table', async function(assert) {
    assert.expect(3);

    let columns = [{ label: 'Column', valuePath: 'text' }];
    let rows = [{ text: 'This is a test' }];

    this.set('table', new Table(columns, rows));
    await render(hbs`{{#ui-tbody table=table}}Table is empty{{/ui-tbody}}`);

    assert.equal(findAll('tr').length, 1);
    assert.equal(findAll('tr td').length, 1);
    assert.equal(find('tr td').textContent.trim(), 'This is a test');
  });

  test('it renders block content when table is empty', async function(assert) {
    assert.expect(1);

    this.set('table', new Table());
    await render(hbs`{{#ui-tbody table=table}}Table is empty{{/ui-tbody}}`);

    assert.equal(this.element.textContent.trim(), 'Table is empty');
  });

  test('it renders expanded row component when row is expanded', async function(assert) {
    assert.expect(2);

    let columns = [{ label: 'Column', valuePath: 'text' }];
    let rows = [{ text: 'This is a test' }];

    this.set('table', new Table(columns, rows));
    await render(hbs`{{#ui-tbody table=table expandedRowComponent="expanded-profile-row"}}{{/ui-tbody}}`);

    assert.equal(findAll('tr').length, 1);

    this.set('table.rows.firstObject.expanded', true);
    assert.equal(findAll('tr').length, 2);
  });
});
