import Ember from 'ember';

const { computed } = Ember;

/**
 * @class Column
 * @extends Ember.Object
 * @namespace SemanticUI
 */
export default Ember.Object.extend({
  /**
   * Label for the column header.
   *
   * @property label
   * @type String
   * @required
   */
  label: '',

  /**
   * Type of the header for this column. The type is mapped to a component
   * name prefixed with `table-header/`. To create custom header types, you
   * can create a new component named `table-header/my-custom-header` and
   * specify it here as `headerType: 'my-custom-header'`.
   *
   * @property headerType
   * @type String
   * @default 'default'
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
   */
  cellType: 'default',

  /**
   * Whether the column can be hidden.
   *
   * @property hideable
   * @type Boolean
   * @default true
   */
  hideable: true,

  /**
   * Whether the column is hidden.
   *
   * @property hidden
   * @type Boolean
   * @default false
   */
  hidden: false,

  /**
   * Whether the column is visible.
   *
   * @property visible
   * @type Boolean
   * @default true
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
   * Whether the column is sorted.
   *
   * @property sorted
   * @type Boolean
   * @default false
   */
  sorted: false,

  /**
   * The sort direction when `sorted` is `true`. Either 'ascending' or 'descending'.
   *
   * @property direction
   * @type String
   */
  direction: '',

  /**
   * Text alignment for the column header and respective cells. Possible
   * values are `'left'`, `'center'` and `'right'`.
   *
   * @property align
   * @type String
   * @default 'left'
   */
  align: 'left',

  /**
   * Vertical alignment for the column header and respective cells. Possible
   * values are `'top'`, `'middle'` and `'bottom'`.
   *
   * @property verticalAlign
   * @type String
   * @default 'top'
   */
  verticalAlign: 'top'
});
