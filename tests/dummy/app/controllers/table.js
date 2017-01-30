import Ember from 'ember';

export default Ember.Controller.extend({
  columns: Ember.computed(function() {
    return [
      {
        label: 'First Name',
        valuePath: 'firstName',
        hideable: false,
        verticalAlign: 'middle'
      },
      {
        label: 'Last Name',
        valuePath: 'lastName',
        verticalAlign: 'middle'
      },
      {
        label: 'Email',
        valuePath: 'email',
        align: 'right'
      },
      {
        label: 'Company',
        valuePath: 'company'
      },
      {
        label: 'Address',
        valuePath: 'address'
      },
      {
        label: 'Country',
        valuePath: 'country',
        align: 'center'
      },
      {
        label: 'State',
        valuePath: 'state',
        align: 'center'
      }
    ];
  })
});
