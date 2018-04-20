// BEGIN-SNIPPET components-custom-types
import { computed } from '@ember/object';

import Component from '@ember/component';
import Columns from '../mixins/columns';
import layout from '../templates/components/custom-types';
import { Table } from 'ember-semantic-ui-table';

export default Component.extend(Columns, {
  layout,

  columns: computed(function() {
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

  table: computed('columns', 'rows', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});
// END-SNIPPET components-custom-types
