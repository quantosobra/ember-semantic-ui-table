import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import Table from 'ember-semantic-ui-table/classes/table';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | table cell/row index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders rows index starting from zero', async function(assert) {
    assert.expect(5);

    let columns = [{ cellType: 'row-index' }];
    let rows = [{ text: 'Dummy' }, { text: 'Dummy' }, { text: 'Dummy' }];

    this.set('table', new Table(columns, rows));
    await render(hbs`{{ui-tbody table=table}}`);

    assert.equal(findAll('tr').length, 3);
    assert.equal(findAll('tr td').length, 3);
    assert.equal(this.$('tr td').eq(0).text().trim(), '0');
    assert.equal(this.$('tr td').eq(1).text().trim(), '1');
    assert.equal(this.$('tr td').eq(2).text().trim(), '2');
  });
});