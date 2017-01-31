import Ember from 'ember';
import layout from '../templates/components/table-pagination';

/**
 * @class Pagination
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,
  classNames: ['ui', 'pagination', 'menu'],

  currentPage: null,
  totalPages: null,

  firstPage: Ember.computed('totalPages', function() {
    if (this.get('totalPages') === 0) {
      return false;
    }

    return 1;
  }),

  previousPage: Ember.computed('currentPage', function() {
    let current = Number(this.get('currentPage'));
    let first = Number(this.get('firstPage'));

    if (current === first) {
      return false;
    }

    return current - 1;
  }),

  nextPage: Ember.computed('currentPage', 'totalPages', function() {
    let current = Number(this.get('currentPage'));
    let total = Number(this.get('totalPages'));

    if (current === total) {
      return false;
    }

    return current + 1;
  }),

  lastPage: Ember.computed.reads('totalPages'),

  pageNumbers: Ember.computed('totalPages', function() {
    let pages = [];
    let count = this.get('totalPages');

    for (let i = 1; i <= count; ++i) {
      pages.push(i);
    }

    return pages;
  }),

  actions: {
    pageSelected(pageNumber) {
      let page = parseInt(pageNumber);

      if (!isNaN(page)) {
        this.sendAction('onPageChange', page);
      }
    }
  }
});
