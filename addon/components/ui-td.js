import Ember from 'ember';
import CellAlignment from 'ember-semantic-ui-table/mixins/cell-alignment';
import layout from 'ember-semantic-ui-table/templates/components/ui-td';

const { Component } = Ember;

export default Component.extend(CellAlignment, {
  layout,
  tagName: 'td'
});
