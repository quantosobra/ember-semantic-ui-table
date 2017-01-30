import Ember from 'ember';
import CellAlignment from 'ember-semantic-ui-table/mixins/cell-alignment';
import layout from '../templates/components/ui-th';

const { Component } = Ember;

export default Component.extend(CellAlignment, {
  layout,
  tagName: 'th',
  classNameBindings: ['column.direction']
});
