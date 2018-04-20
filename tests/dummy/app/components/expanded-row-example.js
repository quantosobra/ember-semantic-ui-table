// BEGIN-SNIPPET components-expanded-row-example
import { computed } from '@ember/object';

import Component from '@ember/component';
import Columns from '../mixins/columns';
import layout from '../templates/components/expanded-row-example';
import { Table } from 'ember-semantic-ui-table';

export default Component.extend(Columns, {
  layout,

  columns: computed(function() {
    return [
      {
        cellType: 'expand-row'
      },
      {
        label: 'First Name',
        valuePath: 'firstName'
      },
      {
        label: 'Last Name',
        valuePath: 'lastName'
      },
      {
        label: 'Email',
        valuePath: 'email'
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
// END-SNIPPET components-expanded-row-example
