import Ember from 'ember';

const { Mixin, computed, get } = Ember;

export default Mixin.create({
  classNameBindings: ['alignClass', 'verticalAlignClass'],

  alignClass: computed('column.align', function() {
    let align = get(this, 'column.align');
    if (align) {
      return `${align} aligned`;
    }
  }),

  verticalAlignClass: computed('column.align', function() {
    let verticalAlign = get(this, 'column.verticalAlign');
    if (verticalAlign) {
      return `${verticalAlign} aligned`;
    }
  })
});
