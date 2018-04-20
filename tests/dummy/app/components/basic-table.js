// BEGIN-SNIPPET components-basic-table
import { computed } from '@ember/object';

import Component from '@ember/component';
import Columns from '../mixins/columns';
import layout from '../templates/components/basic-table';
import { Table } from 'ember-semantic-ui-table';

export default Component.extend(Columns, {
  layout,

  rows: computed(function() {
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

  table: computed('columns', 'rows', function() {
    return new Table(this.get('columns'), this.get('rows'));
  })
});
// END-SNIPPET components-basic-table
