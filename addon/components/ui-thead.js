import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/ui-thead';

export default Component.extend({
  layout,
  tagName: 'thead',

  columns: alias('table.visibleColumns').readOnly()

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
