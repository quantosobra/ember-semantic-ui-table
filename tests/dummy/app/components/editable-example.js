// BEGIN-SNIPPET components-editable-example
import Ember from 'ember';
import Columns from '../mixins/columns';
import layout from '../templates/components/editable-example';
import { Table } from 'ember-semantic-ui-table';

export default Ember.Component.extend(Columns, {
  layout,

  columns: Ember.computed(function() {
    return [
      {
        label: 'First Name',
        valuePath: 'firstName',
        editable: true,
        cellType: 'editable'
      },
      {
        label: 'Last Name',
        valuePath: 'lastName',
        editable: true,
        cellType: 'editable'
      },
      {
        label: 'Email',
        valuePath: 'email',
        align: 'right'
      },
      {
        label: 'Company',
        valuePath: 'company'
      },
      {
        label: 'Address',
        valuePath: 'address'
      },
      {
        label: 'Country',
        valuePath: 'country',
        align: 'center',
        collapsing: true
      },
      {
        label: 'State',
        valuePath: 'state',
        align: 'center',
        collapsing: true
      }
    ];
  }),

  table: Ember.computed('columns', 'model', function() {
    return new Table(this.get('columns'), this.get('model'));
  }),

  actions: {
    toggleEditing(e, row) {
      row.toggleProperty('editing');
    }
  }
});
// END-SNIPPET components-editable-example
