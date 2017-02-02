// BEGIN-SNIPPET routes-custom-types
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('person');
  }
});
// END-SNIPPET routes-custom-types
