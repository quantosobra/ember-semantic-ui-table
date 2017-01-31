// BEGIN-SNIPPET components-ember-data
import Ember from 'ember';
import Columns from '../mixins/columns';
import layout from '../templates/components/ember-data';
import { Table } from 'ember-semantic-ui-table';

export default Ember.Component.extend(Columns, {
  layout,

  table: Ember.computed('columns', 'model', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});
// END-SNIPPET components-ember-data
