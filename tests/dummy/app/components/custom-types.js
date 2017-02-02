// BEGIN-SNIPPET components-custom-types
import Ember from 'ember';
import Columns from '../mixins/columns';
import layout from '../templates/components/custom-types';
import { Table } from 'ember-semantic-ui-table';

export default Ember.Component.extend(Columns, {
  layout,

  columns: Ember.computed(function() {
    return [
      {
        label: 'First Name',
        valuePath: 'firstName',
        headerType: 'custom',
        verticalAlign: 'middle'
      },
      {
        label: 'Last Name',
        valuePath: 'lastName',
        verticalAlign: 'middle'
      },
      {
        label: 'Email',
        valuePath: 'email',
        cellType: 'email'
      },
      {
        label: 'Company',
        valuePath: 'company'
      }
    ];
  }),

  table: Ember.computed('columns', 'rows', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});
// END-SNIPPET components-custom-types
