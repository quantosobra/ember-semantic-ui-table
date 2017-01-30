import Ember from 'ember';
import layout from '../templates/components/ui-thead';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  tagName: 'thead',

  columns: computed.alias('table.visibleColumns').readOnly()
});
