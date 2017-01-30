import Ember from 'ember';
import layout from '../templates/components/ui-table';

const { Component, assert, computed } = Ember;

/**
 * @class UiTable
 */
const UiTable = Component.extend({
  layout,

  tagName: 'table',
  classNames: ['ui', 'table'],
  classNameBindings: [
    'singleLineClass',
    'sortable',
    'stacking::unstackable',
    'fixed',
    'striped',
    'celled',
    'padded',
    'compact',
    'size',
    'rowSelection:selectable'
  ],

  /**
   * Whether the single line table variant should be used.
   *
   * @property singleLine
   * @type Boolean
   * @default false
   * @public
   */
  singleLine: false,

  singleLineClass: computed('singleLine', function() {
    if (this.get('singleLine')) {
      return 'single line';
    }
    return '';
  }),

  /**
   * Whether the table columns can be sorted.
   *
   * @property sortable
   * @type Boolean
   * @default false
   * @public
   */
  sortable: false,

  /**
   * Whether the table should use fixed layout.
   *
   * @property fixed
   * @type Boolean
   * @default false
   * @public
   */
  fixed: false,

  /**
   * Whether table content should stack in small screens.
   *
   * @property stacking
   * @type Boolean
   * @default false
   * @public
   */
  stacking: false,

  /**
   * Whether alternate table rows should use a different background color for contrast.
   *
   * @property striped
   * @type Boolean
   * @default true
   * @public
   */
  striped: true,

  /**
   * Whether the table should divide the cells with a vertical border.
   *
   * @property celled
   * @type Boolean
   * @default false
   * @public
   */
  celled: false,

  /**
   * Whether the table cells have more spacing to the content.
   *
   * @property padded
   * @type Boolean
   * @default false
   * @public
   */
  padded: false,

  /**
   * Whether the table cells have less spacing to the content.
   *
   * @property padded
   * @type Boolean
   * @default false
   * @public
   */
  compact: false,

  /**
   * Table size. Options are: `'small'` and `'large'`.
   *
   * @property size
   * @type String
   * @default ''
   * @public
   */
  size: '',

  /**
   * Whether rows should be selectable.
   *
   * @property rowSelection
   * @type Bolean
   * @default false
   * @public
   */
  rowSelection: false,

  /**
   * Table object.
   *
   * @property table
   * @type SemanticUI.Table
   */
  table: null,

  init() {
    this._super(...arguments);
    assert('You must pass a table object {{ui-table}}', this.get('table'));
  }
});

UiTable.reopenClass({
  positionalParams: ['table']
});

export default UiTable;
