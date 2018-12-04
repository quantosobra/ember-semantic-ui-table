import EmberObject, { computed } from '@ember/object';

/**
 * @class Column
 * @extends Ember.Object
 * @namespace SemanticUI
 */
export default EmberObject.extend({
  /**
   * Label for the column header.
   *
   * @property label
   * @type String
   * @required
   * @public
   */
  label: '',

  /**
   * Path to the value displayed in this column.
   *
   * @property valuePath
   * @type String
   * @public
   */
  valuePath: null,

  /**
   * Type of the header for this column. The type is mapped to a component
   * name prefixed with `table-header/`. To create custom header types, you
   * can create a new component named `table-header/my-custom-header` and
   * specify it here as `headerType: 'my-custom-header'`.
   *
   * @property headerType
   * @type String
   * @default 'default'
   * @public
   */
  headerType: 'default',

  /**
   * Type of the cells for this column. The type is mapped to a component name
   * prefixed with `table-cell/`. To create custom cell types, you can create
   * a new component named `table-cell/my-custom-cell` specify it here as
   * `cellType: 'my-custom-cell'`.
   *
   * @property cellType
   * @type String
   * @default 'default'
   * @public
   */
  cellType: 'default',

  /**
   * Whether the column can be hidden.
   *
   * @property hideable
   * @type Boolean
   * @default true
   * @public
   */
  hideable: true,

  /**
   * Whether the column is hidden.
   *
   * @property hidden
   * @type Boolean
   * @default false
   * @public
   */
  hidden: false,

  /**
   * Whether the column is visible.
   *
   * @property visible
   * @type Boolean
   * @default true
   * @public
   */
  visible: computed('hidden', {
    get() {
      return !this.get('hidden');
    },
    set(name, value) {
      this.set('hidden', !value);
    }
  }),

  /**
   * Whether the column can be sorted.
   *
   * @property sortable
   * @type Boolean
   * @default false
   * @public
   */
  sortable: false,

  /**
   * Whether the column is sorted.
   *
   * @property sorted
   * @type Boolean
   * @default false
   * @public
   */
  sorted: false,

  /**
   * The sort direction when `sorted` is `true`. Either 'ascending' or 'descending'.
   *
   * @property direction
   * @type String
   * @public
   */
  direction: '',

  /**
   * Text alignment for the column header and respective cells. Possible
   * values are `'left'`, `'center'` and `'right'`.
   *
   * @property align
   * @type String
   * @default 'left'
   * @public
   */
  align: 'left',

  /**
   * Vertical alignment for the column header and respective cells. Possible
   * values are `'top'`, `'middle'` and `'bottom'`.
   *
   * @property verticalAlign
   * @type String
   * @default 'top'
   * @public
   */
  verticalAlign: 'top',

  /**
   * Column width specified as in Semantic UI grid size (e.g. 'ten wide').
   *
   * @property width
   * @type String
   * @default null
   * @public
   */
  width: null,

  /**
   * Whether the column is collapsing so that it only uses as much space
   * as required.
   *
   * @property collapsing
   * @type Boolean
   * @default false
   * @public
   */
  collapsing: false,

  /**
   * Whether the cells in this column can be edited. Must be used together
   * with a `cellType` that supports editing.
   *
   * @property editable
   * @type Boolean
   * @default false
   * @public
   */
  editable: false
});
