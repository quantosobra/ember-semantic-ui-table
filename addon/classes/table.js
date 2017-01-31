import Ember from 'ember';
import Row from 'ember-semantic-ui-table/classes/row';
import Column from 'ember-semantic-ui-table/classes/column';

const { computed, A: emberArray } = Ember;

/**
 * @class Table
 * @extends Ember.Object
 * @namespace SemanticUI
 */
export default class Table extends Ember.Object.extend({
  /**
   * @property columns
   * @type Ember.Array
   * @default []
   */
  columns: null,

  /**
   * @property rows
   * @type Ember.Array
   * @default []
   */
  rows: null,

  /**
   * @property isEmpty
   * @type Boolean
   */
  isEmpty: computed.empty('rows').readOnly(),

  /**
   * @property selectedRows
   * @type Ember.Array
   */
  selectedRows: computed.filterBy('rows', 'selected', true).readOnly(),

  /**
   * @property hideableColumns
   * @type Ember.Array
   */
  hideableColumns: computed.filterBy('columns', 'hideable', true).readOnly(),

  /**
   * @property hiddenColumns
   * @type Ember.Array
   */
  hiddenColumns: computed.filterBy('columns', 'hidden', true).readOnly(),

  /**
   * @property visibleColumns
   * @type Ember.Array
   */
  visibleColumns: computed.filterBy('columns', 'hidden', false).readOnly(),

  /**
   * @property sortedColumns
   * @type Ember.Array
   */
  sortedColumns: computed.filterBy('columns', 'sorted', true).readOnly()
}) {
  /**
   * @class Table
   * @constructor
   * @param  {Array} columns
   * @param  {Array} rows
   */
  constructor(columns = [], rows = []) {
    super();

    let _columns = emberArray(Table.createColumns(columns));
    let _rows = emberArray(Table.createRows(rows));

    this.setProperties({
      columns: _columns,
      rows: _rows
    });
  }

  /**
   * Create a collection of Row objects with the given collection
   * @method createRows
   * @static
   * @param  {Array}  rows
   * @return {Array}
   */
  static createRows(rows = [], options = {}) {
    return rows.map((r) => Row.create(r, options));
  }

  /**
   * Create a collection of Column objects with the given collection
   * @method createColumns
   * @static
   * @param  {Array}  columns
   * @return {Array}
   */
  static createColumns(columns = []) {
    return columns.map((c) => Column.create(c));
  }
}
