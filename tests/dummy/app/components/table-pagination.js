// BEGIN-SNIPPET components-table-pagination
import { reads } from '@ember/object/computed';

import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/table-pagination';

export default Component.extend({
  layout,
  classNames: ['ui', 'pagination', 'menu'],

  currentPage: null,
  totalPages: null,

  firstPage: computed('totalPages', function() {
    if (this.get('totalPages') === 0) {
      return false;
    }

    return 1;
  }),

  previousPage: computed('currentPage', function() {
    let current = Number(this.get('currentPage'));
    let first = Number(this.get('firstPage'));

    if (current === first) {
      return false;
    }

    return current - 1;
  }),

  nextPage: computed('currentPage', 'totalPages', function() {
    let current = Number(this.get('currentPage'));
    let total = Number(this.get('totalPages'));

    if (current === total) {
      return false;
    }

    return current + 1;
  }),

  lastPage: reads('totalPages'),

  pageNumbers: computed('totalPages', function() {
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
// END-SNIPPET components-table-pagination
