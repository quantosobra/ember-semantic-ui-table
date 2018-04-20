import ObjectProxy from '@ember/object/proxy';
import { merge } from '@ember/polyfills';

/**
 * @class Row
 * @extends Ember.ObjectProxy
 * @namespace SemanticUI
 */
const Row = ObjectProxy.extend({
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
   * Whether the row is currently expanded.
   *
   * @property expanded
   * @type Boolean
   * @default false
   * @public
   */
  expanded: false,

  /**
   * Whether thw row is currently being edited.
   *
   * @property editing
   * @type Boolean
   * @default false
   * @public
   */
  editing: false,

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
   * @public
   * @static
   */
  create(content, options = {}) {
    let _options = merge({ content }, options);
    return this._super(_options);
  }
});

export default Row;