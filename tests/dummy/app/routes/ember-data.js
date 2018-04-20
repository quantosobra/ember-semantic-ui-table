// BEGIN-SNIPPET routes-ember-data
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('person');
  }
});
// END-SNIPPET routes-ember-data
