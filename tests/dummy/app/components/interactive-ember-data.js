// BEGIN-SNIPPET components-interactive-ember-data
import { computed } from '@ember/object';

import Component from '@ember/component';
import Columns from '../mixins/columns';
import EmberDataTable from '../mixins/ember-data-table';
import layout from '../templates/components/interactive-ember-data';
import { Table } from 'ember-semantic-ui-table';

export default Component.extend(Columns, EmberDataTable, {
  layout,

  init() {
    this._super(...arguments);
    this.fetchRecords();
  },

  table: computed(function() {
    let columns = this.get('columns');
    columns[0].sortable = true;
    columns[1].sortable = true;
    return Table.create(columns, []);
  }),

  actions: {
    sortColumn(e, column, table) {
      if (!column.get('sortable')) {
        return;
      }

      table.get('sortedColumns').setEach('sorted', false);

      column.setProperties({
        sorted: true,
        direction: column.get('direction') === 'ascending' ? 'descending' : 'ascending'
      });
      this.fetchRecords();
    },

    selectRow(e, row/* , table */) {
      row.toggleProperty('selected');
    },

    doubleClickCell(r, row, column/* , table */) {
      let content = row.get(column.valuePath);
      window.alert(`double click on ${content}`);
    }
  }
});
// END-SNIPPET components-interactive-ember-data
