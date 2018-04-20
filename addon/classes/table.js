import { empty, filterBy } from '@ember/object/computed';
import { A as emberArray } from '@ember/array';
import EmberObject from '@ember/object';
import Row from 'ember-semantic-ui-table/classes/row';
import Column from 'ember-semantic-ui-table/classes/column';

/**
 * @class Table
 * @extends Ember.Object
 * @namespace SemanticUI
 */
export default class Table extends EmberObject.extend({
  /**
   * @property columns
   * @type Ember.Array
   * @default []
   * @public
   */
  columns: null,

  /**
   * @property rows
   * @type Ember.Array
   * @default []
   * @public
   */
  rows: null,

  /**
   * @property isEmpty
   * @type Boolean
   * @public
   */
  isEmpty: empty('rows').readOnly(),

  /**
   * @property selectedRows
   * @type Ember.Array
   * @public
   */
  selectedRows: filterBy('rows', 'selected', true).readOnly(),

  /**
   * @property hideableColumns
   * @type Ember.Array
   * @public
   */
  hideableColumns: filterBy('columns', 'hideable', true).readOnly(),

  /**
   * @property hiddenColumns
   * @type Ember.Array
   * @public
   */
  hiddenColumns: filterBy('columns', 'hidden', true).readOnly(),

  /**
   * @property visibleColumns
   * @type Ember.Array
   * @public
   */
  visibleColumns: filterBy('columns', 'hidden', false).readOnly(),

  /**
   * @property sortedColumns
   * @type Ember.Array
   * @public
   */
  sortedColumns: filterBy('columns', 'sorted', true).readOnly()
}) {
  /**
   * @class Table
   * @constructor
   * @param  {Array} columns
   * @param  {Array} rows
   * @public
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
   * @method setColumns
   * @param {Array} columns
   * @public
   */
  setColumns(columns) {
    this.set('columns', Table.createColumns(columns));
  }

  /**
   * @method setRows
   * @param {Array} rows
   * @public
   */
  setRows(rows) {
    this.set('rows', Table.createRows(rows));
  }

  /**
   * Create a collection of Row objects with the given collection
   * @method createRows
   * @param  {Array}  rows
   * @return {Array}
   * @public
   * @static
   */
  static createRows(rows = [], options = {}) {
    return rows.map((r) => {
      if (r instanceof Row) {
        return r;
      } else {
        return Row.create(r, options);
      }
    });
  }

  /**
   * Create a collection of Column objects with the given collection
   * @method createColumns
   * @param  {Array}  columns
   * @return {Array}
   * @public
   * @static
   */
  static createColumns(columns = []) {
    return columns.map((c) => {
      if (c instanceof Column) {
        return c;
      } else {
        return Column.create(c);
      }
    });
  }
}
