import Ember from 'ember';
import CellAlignment from 'ember-semantic-ui-table/mixins/cell-alignment';
import layout from 'ember-semantic-ui-table/templates/components/table-header/default';

const { Component } = Ember;

export default Component.extend(CellAlignment, {
  layout,
  tagName: 'th',
  classNameBindings: ['column.sortable:sortable', 'column.sorted:sorted', 'column.direction'],

  click(e) {
    let { column, table } = this.getProperties('column', 'table');
    this.sendAction('onClick', e, column, table);
  },

  doubleClick(e) {
    let { column, table } = this.getProperties('column', 'table');
    this.sendAction('onDoubleClick', e, column, table);
  }

  // Events

  /**
   * @event onClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Column} column The column that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */

  /**
   * @event onDoubleClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Column} column The column that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */
});
