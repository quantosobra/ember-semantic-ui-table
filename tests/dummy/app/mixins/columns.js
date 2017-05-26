// BEGIN-SNIPPET mixins-columns
import Ember from 'ember';

export default Ember.Mixin.create({
  columns: Ember.computed(function() {
    return [
      {
        cellType: 'row-number',
        verticalAlign: 'middle'
      },
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
        align: 'center',
        collapsing: true
      },
      {
        label: 'State',
        valuePath: 'state',
        align: 'center',
        collapsing: true
      }
    ];
  })
});
// END-SNIPPET mixins-columns
