import Component from '@ember/component';
import { invokeAction } from 'ember-invoke-action';
import layout from '../templates/components/ui-tr';

export default Component.extend({
  layout,
  tagName: 'tr',

  classNameBindings: ['row.selected:active'],

  click(e) {
    let { row, table } = this.getProperties('row', 'table');
    invokeAction(this, 'onClick', e, row, table);
  },

  doubleClick(e) {
    let { row, table } = this.getProperties('row', 'table');
    invokeAction(this, 'onDoubleClick', e, row, table);
  }

  // Events

  /**
   * @event onClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Row} row The row that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */

  /**
   * @event onDoubleClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Row} row The row that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */

  /**
   * @event onCellClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Row} row The row that was clicked.
   * @param {SemanticUI.Column} column The column that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */

  /**
   * @event onCellDoubleClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Row} row The row that was clicked.
   * @param {SemanticUI.Column} column The column that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */
});
