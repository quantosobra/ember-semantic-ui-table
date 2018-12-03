import Component from '@ember/component';
import { invokeAction } from 'ember-invoke-action';
import CellAlignment from 'ember-semantic-ui-table/mixins/cell-alignment';
import layout from 'ember-semantic-ui-table/templates/components/table-cell/default';

export default Component.extend(CellAlignment, {
  layout,
  tagName: 'td',
  classNameBindings: [
    'column.collapsing:collapsing'
  ],

  click(e) {
    let { row, column, table } = this.getProperties('row', 'column', 'table');
    invokeAction(this, 'onClick', e, row, column, table);
  },

  doubleClick(e) {
    let { row, column, table } = this.getProperties('row', 'column', 'table');
    invokeAction(this, 'onDoubleClick', e, row, column, table);
  }

  // Events

  /**
   * @event onClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Row} row The row that was clicked.
   * @param {SemanticUI.Column} column The column that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */

  /**
   * @event onDoubleClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Row} row The row that was clicked.
   * @param {SemanticUI.Column} column The column that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */
});
