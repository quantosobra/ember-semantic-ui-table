// BEGIN-SNIPPET mixins-ember-data-table
import { computed } from '@ember/object';

import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';
import { Table } from 'ember-semantic-ui-table';

export default Mixin.create({
  store: service(),

  search: '',
  page: 1,
  limit: 10,
  total: null,

  pageCount: computed('limit', 'total', function() {
    let { limit, total } = this.getProperties('limit', 'total');
    if (total) {
      return Math.ceil(total / limit);
    }

    return 0;
  }),

  sort: computed('table.sortedColumns.firstObject.valuePath', function() {
    let sortedColumn = this.get('table.sortedColumns.firstObject');
    if (sortedColumn && sortedColumn.get('sorted')) {
      return sortedColumn.get('valuePath');
    }
    return false;
  }),

  dir: computed('table.sortedColumns.firstObject.direction', function() {
    let sortedColumn = this.get('table.sortedColumns.firstObject');
    if (sortedColumn && sortedColumn.get('sorted')) {
      return sortedColumn.get('direction') === 'ascending' ? 'asc' : 'desc';
    }
    return false;
  }),

  isLoading: false,

  table: computed(function() {
    return new Table(this.get('columns'), []);
  }),

  fetchRecords() {
    let query = this.getProperties(['search', 'page', 'limit', 'sort', 'dir']);

    this.set('isLoading', true);
    this.get('store').query('person', query).then((records) => {
      this.set('table.rows', records);
      this.set('total', records.get('meta.total'));
    }).finally(() => {
      this.set('isLoading', false);
    });
  },

  actions: {
    refresh() {
      this.fetchRecords();
    },

    navigateToPage(pageNumber) {
      this.set('page', pageNumber);
      this.fetchRecords();
    }
  }
});
// END-SNIPPET mixins-ember-data-table
