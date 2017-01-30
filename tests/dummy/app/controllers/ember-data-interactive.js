import Ember from 'ember';
import TableController from './table';
import { Table } from 'ember-semantic-ui-table';

export default TableController.extend({
  store: Ember.inject.service(),

  page: 1,
  limit: 10,
  sort: false,
  dir: 'asc',

  isLoading: false,

  table: Ember.computed('columns', 'model', function() {
    return new Table(this.get('columns'), this.get('model'));
  }),

  fetchRecords() {
    this.set('isLoading', true);
    this.get('store').query('person', this.getProperties(['page', 'limit', 'sort', 'dir'])).then((records) => {
      this.set('model', records);
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
