// BEGIN-SNIPPET components-basic-table
import Ember from 'ember';
import Columns from '../mixins/columns';
import layout from '../templates/components/basic-table';
import { Table } from 'ember-semantic-ui-table';

export default Ember.Component.extend(Columns, {
  layout,

  rows: Ember.computed(function() {
    return [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@company.com',
        company: 'Foo Bar Company',
        address: '3184 5th Avenue',
        country: 'Brazil'
      }
    ];
  }),

  table: Ember.computed('columns', 'rows', function() {
    return new Table(this.get('columns'), this.get('rows'));
  })
});
// END-SNIPPET components-basic-table
