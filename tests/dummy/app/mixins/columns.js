// BEGIN-SNIPPET mixins-columns
import { computed } from '@ember/object';

import Mixin from '@ember/object/mixin';

export default Mixin.create({
  columns: computed(function() {
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
