import Ember from 'ember';
import TableController from './table';
import { Table } from 'ember-semantic-ui-table';

export default TableController.extend({
  table: Ember.computed('columns', 'model', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});
