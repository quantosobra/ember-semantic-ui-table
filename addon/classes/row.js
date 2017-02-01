import Ember from 'ember';

const assign = Ember.assign || Ember.merge;

/**
 * @class Row
 * @extends Ember.ObjectProxy
 * @namespace SemanticUI
 */
const Row = Ember.ObjectProxy.extend({
  /**
   * Whether the row is currently selected.
   *
   * @property selected
   * @type Boolean
   * @default false
   * @public
   */
  selected: false,

  /**
   * Content for this row. See {{#crossLink "Ember.ObjectProxy"}}{{/crossLink}}.
   *
   * @property content
   * @type Object
   * @public
   */
  content: null
});

Row.reopenClass({
  /**
   * @method create
   * @param {Object} content Content for this row.
   * @param {Object} options Properties to initialize in this object.
   * @return Row
   * @static
   */
  create(content, options = {}) {
    let _options = assign({ content }, options);
    return this._super(_options);
  }
});

export default Row;
