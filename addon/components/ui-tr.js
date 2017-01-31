import Ember from 'ember';
import layout from '../templates/components/ui-tr';

const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'tr',

  classNameBindings: ['row.selected:active'],

  click(e) {
    let { row, table } = this.getProperties('row', 'table');
    this.sendAction('onClick', e, row, table);
  },

  doubleClick(e) {
    let { row, table } = this.getProperties('row', 'table');
    this.sendAction('onDoubleClick', e, row, table);
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
