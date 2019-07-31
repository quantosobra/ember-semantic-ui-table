// BEGIN-SNIPPET components-ember-data
import { computed } from '@ember/object';

import Component from '@ember/component';
import Columns from '../mixins/columns';
import layout from '../templates/components/ember-data';
import { Table } from 'ember-semantic-ui-table';

export default Component.extend(Columns, {
  layout,

  table: computed('columns', 'model', function() {
    return Table.create(this.get('columns'), this.get('model'));
  })
});
// END-SNIPPET components-ember-data
