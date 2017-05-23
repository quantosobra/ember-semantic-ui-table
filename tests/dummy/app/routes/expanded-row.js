// BEGIN-SNIPPET routes-expanded-row
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('person');
  }
});
// END-SNIPPET routes-expanded-row
