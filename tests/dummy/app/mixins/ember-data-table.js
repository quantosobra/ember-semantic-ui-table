// BEGIN-SNIPPET mixins-ember-data-table
import Ember from 'ember';
import { Table } from 'ember-semantic-ui-table';

export default Ember.Mixin.create({
  store: Ember.inject.service(),

  search: '',
  page: 1,
  limit: 10,
  sort: false,
  dir: 'asc',

  isLoading: false,
  rows: [],

  table: Ember.computed('columns', 'rows', function() {
    return new Table(this.get('columns'), this.get('rows'));
  }),

  fetchRecords() {
    let query = this.getProperties(['search', 'page', 'limit', 'sort', 'dir']);

    this.set('isLoading', true);
    this.get('store').query('person', query).then((records) => {
      this.set('rows', records);
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
