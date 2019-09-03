import Mixin from '@ember/object/mixin';
import { get, computed } from '@ember/object';

export default Mixin.create({
  classNameBindings: ['alignClass', 'verticalAlignClass'],

  alignClass: computed('column.align', function() {
    let align = get(this, 'column.align');
    if (align) {
      return `${align} aligned`;
    }
    return '';
  }),

  verticalAlignClass: computed('column.align', function() {
    let verticalAlign = get(this, 'column.verticalAlign');
    if (verticalAlign) {
      return `${verticalAlign} aligned`;
    }
    return '';
  })
});
