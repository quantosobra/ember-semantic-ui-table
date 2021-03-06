import { computed } from '@ember/object';
import DefaultCell from 'ember-semantic-ui-table/components/table-cell/default';
import layout from 'ember-semantic-ui-table/templates/components/table-cell/row-number';

export default DefaultCell.extend({
  layout,

  number: computed('index', function() {
    return this.get('index') + 1;
  })
});
