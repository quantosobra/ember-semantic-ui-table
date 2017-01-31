// BEGIN-SNIPPET mixins-ember-data-table
import Ember from 'ember';
import { Table } from 'ember-semantic-ui-table';

export default Ember.Mixin.create({
  store: Ember.inject.service(),

  search: '',
  page: 1,
  limit: 10,

  sort: Ember.computed('table.sortedColumns.firstObject.valuePath', function() {
    let sortedColumn = this.get('table.sortedColumns.firstObject');
    if (sortedColumn && sortedColumn.get('sorted')) {
      return sortedColumn.get('valuePath');
    }
    return false;
  }),

  dir: Ember.computed('table.sortedColumns.firstObject.direction', function() {
    let sortedColumn = this.get('table.sortedColumns.firstObject');
    if (sortedColumn && sortedColumn.get('sorted')) {
      return sortedColumn.get('direction') === 'ascending' ? 'asc' : 'desc';
    }
    return false;
  }),

  isLoading: false,

  table: Ember.computed(function() {
    return new Table(this.get('columns'), []);
  }),

  fetchRecords() {
    let query = this.getProperties(['search', 'page', 'limit', 'sort', 'dir']);

    this.set('isLoading', true);
    this.get('store').query('person', query).then((records) => {
      this.set('table.rows', records);
    }).finally(() => {
      this.set('isLoading', false);
    });
  },

  actions: {
    navigateToPage(pageNumber) {
      this.set('page', pageNumber);
      this.fetchRecords();
    }
  }
});
// END-SNIPPET mixins-ember-data-table
