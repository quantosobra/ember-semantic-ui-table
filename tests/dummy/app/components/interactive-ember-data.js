// BEGIN-SNIPPET components-interactive-ember-data
import Ember from 'ember';
import Columns from '../mixins/columns';
import EmberDataTable from '../mixins/ember-data-table';
import layout from '../templates/components/interactive-ember-data';

export default Ember.Component.extend(Columns, EmberDataTable, {
  layout,

  init() {
    this._super(...arguments);
    this.fetchRecords();
  },

  actions: {
    sortColumn(e, column, table) {
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
