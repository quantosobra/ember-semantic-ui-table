import Ember from 'ember';
import layout from '../templates/components/ui-thead';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  tagName: 'thead',

  columns: computed.alias('table.visibleColumns').readOnly()

  /**
   * @event onHeaderClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Column} column The column that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */

  /**
   * @event onHeaderDoubleClick
   * @param {Event} event Browser event object.
   * @param {SemanticUI.Column} column The column that was clicked.
   * @param {SemanticUI.Table} table The table object.
   */
});
