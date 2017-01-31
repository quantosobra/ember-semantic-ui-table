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
  }
});
// END-SNIPPET components-interactive-ember-data
