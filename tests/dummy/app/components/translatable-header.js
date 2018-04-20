// BEGIN-SNIPPET components-translatable-header
import { computed } from '@ember/object';

import Component from '@ember/component';
import Columns from '../mixins/columns';
import layout from '../templates/components/translatable-header';
import { Table } from 'ember-semantic-ui-table';

export default Component.extend(Columns, {
  layout,

  columns: computed(function() {
    return [
      {
        label: 'labels.first_name',
        headerType: 'translatable',
        valuePath: 'firstName',
        verticalAlign: 'middle'
      },
      {
        label: 'labels.last_name',
        headerType: 'translatable',
        valuePath: 'lastName',
        verticalAlign: 'middle'
      },
      {
        label: 'labels.email',
        headerType: 'translatable',
        valuePath: 'email',
        cellType: 'email'
      },
      {
        label: 'labels.company',
        headerType: 'translatable',
        valuePath: 'company'
      }
    ];
  }),

  table: computed('columns', 'rows', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});
// END-SNIPPET components-translatable-header
