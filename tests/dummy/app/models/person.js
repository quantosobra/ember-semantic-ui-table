import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  company: DS.attr(),
  address: DS.attr(),
  country: DS.attr(),
  state: DS.attr()
});
