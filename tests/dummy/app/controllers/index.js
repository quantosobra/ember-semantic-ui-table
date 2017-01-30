import Ember from 'ember';
import TableController from './table';
import { Table } from 'ember-semantic-ui-table';

export default TableController.extend({
  rows: Ember.computed(function() {
    return [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@company.com'
      }
    ];
  }),

  table: Ember.computed('columns', 'rows', function() {
    return new Table(this.get('columns'), this.get('rows'));
  })
});
