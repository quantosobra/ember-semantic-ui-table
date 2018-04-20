// BEGIN-SNIPPET routes-editable
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('person');
  }
});
// END-SNIPPET routes-editable
