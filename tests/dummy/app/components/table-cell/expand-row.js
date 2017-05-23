// BEGIN-SNIPPET components-table-cell-expand-row
import DefaultCell from 'ember-semantic-ui-table/components/table-cell/default';
import layout from '../../templates/components/table-cell/expand-row';

export default DefaultCell.extend({
  layout,

  actions: {
    toggleExpanded() {
      this.toggleProperty('row.expanded');
    }
  }
});
// END-SNIPPET components-table-cell-expand-row
