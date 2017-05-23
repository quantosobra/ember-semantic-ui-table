"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({});
});
define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("dummy/cldrs/en", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = [{ "locale": "en-US", "parentLocale": "en" }, { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } }];
});
define("dummy/cldrs/pt", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = [{ "locale": "pt-br", "parentLocale": "pt" }, { "locale": "pt", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          t0 = Number(s[0]) == n;if (ord) return "other";return t0 && n >= 0 && n <= 2 && n != 2 ? "one" : "other";
    }, "fields": { "year": { "displayName": "ano", "relative": { "0": "este ano", "1": "próximo ano", "-1": "ano passado" }, "relativeTime": { "future": { "one": "em {0} ano", "other": "em {0} anos" }, "past": { "one": "há {0} ano", "other": "há {0} anos" } } }, "month": { "displayName": "mês", "relative": { "0": "este mês", "1": "próximo mês", "-1": "mês passado" }, "relativeTime": { "future": { "one": "em {0} mês", "other": "em {0} meses" }, "past": { "one": "há {0} mês", "other": "há {0} meses" } } }, "day": { "displayName": "dia", "relative": { "0": "hoje", "1": "amanhã", "2": "depois de amanhã", "-2": "anteontem", "-1": "ontem" }, "relativeTime": { "future": { "one": "em {0} dia", "other": "em {0} dias" }, "past": { "one": "há {0} dia", "other": "há {0} dias" } } }, "hour": { "displayName": "hora", "relativeTime": { "future": { "one": "em {0} hora", "other": "em {0} horas" }, "past": { "one": "há {0} hora", "other": "há {0} horas" } } }, "minute": { "displayName": "minuto", "relativeTime": { "future": { "one": "em {0} minuto", "other": "em {0} minutos" }, "past": { "one": "há {0} minuto", "other": "há {0} minutos" } } }, "second": { "displayName": "segundo", "relative": { "0": "agora" }, "relativeTime": { "future": { "one": "em {0} segundo", "other": "em {0} segundos" }, "past": { "one": "há {0} segundo", "other": "há {0} segundos" } } } } }];
});
define('dummy/components/basic-table', ['exports', 'ember', 'dummy/mixins/columns', 'dummy/templates/components/basic-table', 'ember-semantic-ui-table'], function (exports, _ember, _dummyMixinsColumns, _dummyTemplatesComponentsBasicTable, _emberSemanticUiTable) {
  exports['default'] = _ember['default'].Component.extend(_dummyMixinsColumns['default'], {
    layout: _dummyTemplatesComponentsBasicTable['default'],

    rows: _ember['default'].computed(function () {
      return [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@company.com',
        company: 'Foo Bar Company',
        address: '3184 5th Avenue',
        country: 'Brazil'
      }];
    }),

    table: _ember['default'].computed('columns', 'rows', function () {
      return new _emberSemanticUiTable.Table(this.get('columns'), this.get('rows'));
    })
  });

  // END-SNIPPET components-basic-table
});
// BEGIN-SNIPPET components-basic-table
define("dummy/components/code-snippet", ["exports", "ember", "dummy/snippets"], function (exports, _ember, _dummySnippets) {

  /* global require */
  var Highlight = require('highlight.js');

  exports["default"] = _ember["default"].Component.extend({
    tagName: 'pre',
    classNameBindings: ['language'],
    unindent: true,

    _unindent: function _unindent(src) {
      if (!this.get('unindent')) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n");
      for (var i = 0; i < lines.length; i++) {
        match = /^\s*/.exec(lines[i]);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== 'undefined' && min > 0) {
        src = src.replace(new RegExp("(\\n|^)\\s{" + min + "}", 'g'), "$1");
      }
      return src;
    },

    source: _ember["default"].computed('name', function () {
      return this._unindent((_dummySnippets["default"][this.get('name')] || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get('element'));
    },

    language: _ember["default"].computed('name', function () {
      var m = /\.(\w+)$/i.exec(this.get('name'));
      if (m) {
        switch (m[1].toLowerCase()) {
          case 'js':
            return 'javascript';
          case 'coffee':
            return 'coffeescript';
          case 'hbs':
            return 'htmlbars';
          case 'css':
            return 'css';
          case 'scss':
            return 'scss';
          case 'less':
            return 'less';
          case 'emblem':
            return 'emblem';
          case 'ts':
            return 'typescript';
        }
      }
    })
  });
});
define('dummy/components/custom-types', ['exports', 'ember', 'dummy/mixins/columns', 'dummy/templates/components/custom-types', 'ember-semantic-ui-table'], function (exports, _ember, _dummyMixinsColumns, _dummyTemplatesComponentsCustomTypes, _emberSemanticUiTable) {
  exports['default'] = _ember['default'].Component.extend(_dummyMixinsColumns['default'], {
    layout: _dummyTemplatesComponentsCustomTypes['default'],

    columns: _ember['default'].computed(function () {
      return [{
        label: 'First Name',
        valuePath: 'firstName',
        headerType: 'custom',
        verticalAlign: 'middle'
      }, {
        label: 'Last Name',
        valuePath: 'lastName',
        verticalAlign: 'middle'
      }, {
        label: 'Email',
        valuePath: 'email',
        cellType: 'email'
      }, {
        label: 'Company',
        valuePath: 'company'
      }];
    }),

    table: _ember['default'].computed('columns', 'rows', function () {
      return new _emberSemanticUiTable.Table(this.get('columns'), this.get('model'));
    })
  });

  // END-SNIPPET components-custom-types
});
// BEGIN-SNIPPET components-custom-types
define('dummy/components/editable-example', ['exports', 'ember', 'dummy/mixins/columns', 'dummy/templates/components/editable-example', 'ember-semantic-ui-table'], function (exports, _ember, _dummyMixinsColumns, _dummyTemplatesComponentsEditableExample, _emberSemanticUiTable) {
  exports['default'] = _ember['default'].Component.extend(_dummyMixinsColumns['default'], {
    layout: _dummyTemplatesComponentsEditableExample['default'],

    columns: _ember['default'].computed(function () {
      return [{
        label: 'First Name',
        valuePath: 'firstName',
        editable: true,
        cellType: 'editable'
      }, {
        label: 'Last Name',
        valuePath: 'lastName',
        editable: true,
        cellType: 'editable'
      }, {
        label: 'Email',
        valuePath: 'email',
        align: 'right'
      }, {
        label: 'Company',
        valuePath: 'company'
      }, {
        label: 'Address',
        valuePath: 'address'
      }, {
        label: 'Country',
        valuePath: 'country',
        align: 'center',
        collapsing: true
      }, {
        label: 'State',
        valuePath: 'state',
        align: 'center',
        collapsing: true
      }];
    }),

    table: _ember['default'].computed('columns', 'model', function () {
      return new _emberSemanticUiTable.Table(this.get('columns'), this.get('model'));
    }),

    actions: {
      toggleEditing: function toggleEditing(e, row) {
        row.toggleProperty('editing');
      }
    }
  });

  // END-SNIPPET components-editable-example
});
// BEGIN-SNIPPET components-editable-example
define('dummy/components/ember-data', ['exports', 'ember', 'dummy/mixins/columns', 'dummy/templates/components/ember-data', 'ember-semantic-ui-table'], function (exports, _ember, _dummyMixinsColumns, _dummyTemplatesComponentsEmberData, _emberSemanticUiTable) {
  exports['default'] = _ember['default'].Component.extend(_dummyMixinsColumns['default'], {
    layout: _dummyTemplatesComponentsEmberData['default'],

    table: _ember['default'].computed('columns', 'model', function () {
      return new _emberSemanticUiTable.Table(this.get('columns'), this.get('model'));
    })
  });

  // END-SNIPPET components-ember-data
});
// BEGIN-SNIPPET components-ember-data
define('dummy/components/expanded-profile-row', ['exports', 'ember', 'dummy/templates/components/expanded-profile-row'], function (exports, _ember, _dummyTemplatesComponentsExpandedProfileRow) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyTemplatesComponentsExpandedProfileRow['default']
  });

  // END-SNIPPET components-expanded-profile-row
});
// BEGIN-SNIPPET components-expanded-profile-row
define('dummy/components/expanded-row-example', ['exports', 'ember', 'dummy/mixins/columns', 'dummy/templates/components/expanded-row-example', 'ember-semantic-ui-table'], function (exports, _ember, _dummyMixinsColumns, _dummyTemplatesComponentsExpandedRowExample, _emberSemanticUiTable) {
  exports['default'] = _ember['default'].Component.extend(_dummyMixinsColumns['default'], {
    layout: _dummyTemplatesComponentsExpandedRowExample['default'],

    columns: _ember['default'].computed(function () {
      return [{
        cellType: 'expand-row'
      }, {
        label: 'First Name',
        valuePath: 'firstName'
      }, {
        label: 'Last Name',
        valuePath: 'lastName'
      }, {
        label: 'Email',
        valuePath: 'email'
      }, {
        label: 'Company',
        valuePath: 'company'
      }];
    }),

    table: _ember['default'].computed('columns', 'rows', function () {
      return new _emberSemanticUiTable.Table(this.get('columns'), this.get('model'));
    })
  });

  // END-SNIPPET components-expanded-row-example
});
// BEGIN-SNIPPET components-expanded-row-example
define('dummy/components/interactive-ember-data', ['exports', 'ember', 'dummy/mixins/columns', 'dummy/mixins/ember-data-table', 'dummy/templates/components/interactive-ember-data', 'ember-semantic-ui-table'], function (exports, _ember, _dummyMixinsColumns, _dummyMixinsEmberDataTable, _dummyTemplatesComponentsInteractiveEmberData, _emberSemanticUiTable) {
  exports['default'] = _ember['default'].Component.extend(_dummyMixinsColumns['default'], _dummyMixinsEmberDataTable['default'], {
    layout: _dummyTemplatesComponentsInteractiveEmberData['default'],

    init: function init() {
      this._super.apply(this, arguments);
      this.fetchRecords();
    },

    table: _ember['default'].computed(function () {
      var columns = this.get('columns');
      columns[0].sortable = true;
      columns[1].sortable = true;
      return new _emberSemanticUiTable.Table(columns, []);
    }),

    actions: {
      sortColumn: function sortColumn(e, column, table) {
        if (!column.get('sortable')) {
          return;
        }

        table.get('sortedColumns').setEach('sorted', false);

        column.setProperties({
          sorted: true,
          direction: column.get('direction') === 'ascending' ? 'descending' : 'ascending'
        });
        this.fetchRecords();
      },

      selectRow: function selectRow(e, row /* , table */) {
        row.toggleProperty('selected');
      },

      doubleClickCell: function doubleClickCell(r, row, column /* , table */) {
        var content = row.get(column.valuePath);
        window.alert('double click on ' + content);
      }
    }
  });

  // END-SNIPPET components-interactive-ember-data
});
// BEGIN-SNIPPET components-interactive-ember-data
define('dummy/components/table-cell/default', ['exports', 'ember-semantic-ui-table/components/table-cell/default'], function (exports, _emberSemanticUiTableComponentsTableCellDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSemanticUiTableComponentsTableCellDefault['default'];
    }
  });
});
define('dummy/components/table-cell/editable', ['exports', 'ember-semantic-ui-table/components/table-cell/default', 'dummy/templates/components/table-cell/email'], function (exports, _emberSemanticUiTableComponentsTableCellDefault, _dummyTemplatesComponentsTableCellEmail) {
  exports['default'] = _emberSemanticUiTableComponentsTableCellDefault['default'].extend({
    layout: _dummyTemplatesComponentsTableCellEmail['default']
  });

  // END-SNIPPET components-table-cell-editable
});
// BEGIN-SNIPPET components-table-cell-editable
define('dummy/components/table-cell/email', ['exports', 'ember-semantic-ui-table/components/table-cell/default', 'dummy/templates/components/table-cell/email'], function (exports, _emberSemanticUiTableComponentsTableCellDefault, _dummyTemplatesComponentsTableCellEmail) {
  exports['default'] = _emberSemanticUiTableComponentsTableCellDefault['default'].extend({
    layout: _dummyTemplatesComponentsTableCellEmail['default']
  });

  // END-SNIPPET components-table-cell-email
});
// BEGIN-SNIPPET components-table-cell-email
define('dummy/components/table-cell/expand-row', ['exports', 'ember-semantic-ui-table/components/table-cell/default', 'dummy/templates/components/table-cell/expand-row'], function (exports, _emberSemanticUiTableComponentsTableCellDefault, _dummyTemplatesComponentsTableCellExpandRow) {
  exports['default'] = _emberSemanticUiTableComponentsTableCellDefault['default'].extend({
    layout: _dummyTemplatesComponentsTableCellExpandRow['default'],

    actions: {
      toggleExpanded: function toggleExpanded() {
        this.toggleProperty('row.expanded');
      }
    }
  });

  // END-SNIPPET components-table-cell-expand-row
});
// BEGIN-SNIPPET components-table-cell-expand-row
define('dummy/components/table-header/custom', ['exports', 'ember-semantic-ui-table/components/table-header/default', 'dummy/templates/components/table-header/custom'], function (exports, _emberSemanticUiTableComponentsTableHeaderDefault, _dummyTemplatesComponentsTableHeaderCustom) {
  exports['default'] = _emberSemanticUiTableComponentsTableHeaderDefault['default'].extend({
    layout: _dummyTemplatesComponentsTableHeaderCustom['default']
  });

  // END-SNIPPET components-table-header-custom
});
// BEGIN-SNIPPET components-table-header-custom
define('dummy/components/table-header/default', ['exports', 'ember-semantic-ui-table/components/table-header/default'], function (exports, _emberSemanticUiTableComponentsTableHeaderDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSemanticUiTableComponentsTableHeaderDefault['default'];
    }
  });
});
define('dummy/components/table-header/translatable', ['exports', 'ember-semantic-ui-table/components/table-header/translatable'], function (exports, _emberSemanticUiTableComponentsTableHeaderTranslatable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSemanticUiTableComponentsTableHeaderTranslatable['default'];
    }
  });
});
define('dummy/components/table-pagination', ['exports', 'ember', 'dummy/templates/components/table-pagination'], function (exports, _ember, _dummyTemplatesComponentsTablePagination) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyTemplatesComponentsTablePagination['default'],
    classNames: ['ui', 'pagination', 'menu'],

    currentPage: null,
    totalPages: null,

    firstPage: _ember['default'].computed('totalPages', function () {
      if (this.get('totalPages') === 0) {
        return false;
      }

      return 1;
    }),

    previousPage: _ember['default'].computed('currentPage', function () {
      var current = Number(this.get('currentPage'));
      var first = Number(this.get('firstPage'));

      if (current === first) {
        return false;
      }

      return current - 1;
    }),

    nextPage: _ember['default'].computed('currentPage', 'totalPages', function () {
      var current = Number(this.get('currentPage'));
      var total = Number(this.get('totalPages'));

      if (current === total) {
        return false;
      }

      return current + 1;
    }),

    lastPage: _ember['default'].computed.reads('totalPages'),

    pageNumbers: _ember['default'].computed('totalPages', function () {
      var pages = [];
      var count = this.get('totalPages');

      for (var i = 1; i <= count; ++i) {
        pages.push(i);
      }

      return pages;
    }),

    actions: {
      pageSelected: function pageSelected(pageNumber) {
        var page = parseInt(pageNumber);

        if (!isNaN(page)) {
          this.sendAction('onPageChange', page);
        }
      }
    }
  });

  // END-SNIPPET components-table-pagination
});
// BEGIN-SNIPPET components-table-pagination
define('dummy/components/translatable-header', ['exports', 'ember', 'dummy/mixins/columns', 'dummy/templates/components/translatable-header', 'ember-semantic-ui-table'], function (exports, _ember, _dummyMixinsColumns, _dummyTemplatesComponentsTranslatableHeader, _emberSemanticUiTable) {
  exports['default'] = _ember['default'].Component.extend(_dummyMixinsColumns['default'], {
    layout: _dummyTemplatesComponentsTranslatableHeader['default'],

    columns: _ember['default'].computed(function () {
      return [{
        label: 'labels.first_name',
        headerType: 'translatable',
        valuePath: 'firstName',
        verticalAlign: 'middle'
      }, {
        label: 'labels.last_name',
        headerType: 'translatable',
        valuePath: 'lastName',
        verticalAlign: 'middle'
      }, {
        label: 'labels.email',
        headerType: 'translatable',
        valuePath: 'email',
        cellType: 'email'
      }, {
        label: 'labels.company',
        headerType: 'translatable',
        valuePath: 'company'
      }];
    }),

    table: _ember['default'].computed('columns', 'rows', function () {
      return new _emberSemanticUiTable.Table(this.get('columns'), this.get('model'));
    })
  });

  // END-SNIPPET components-translatable-header
});
// BEGIN-SNIPPET components-translatable-header
define('dummy/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _semanticUiEmberComponentsUiAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiAccordion['default'];
    }
  });
});
define('dummy/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _semanticUiEmberComponentsUiCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiCheckbox['default'];
    }
  });
});
define('dummy/components/ui-dimmer', ['exports', 'semantic-ui-ember/components/ui-dimmer'], function (exports, _semanticUiEmberComponentsUiDimmer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiDimmer['default'];
    }
  });
});
define('dummy/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _semanticUiEmberComponentsUiDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiDropdown['default'];
    }
  });
});
define('dummy/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _semanticUiEmberComponentsUiEmbed) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiEmbed['default'];
    }
  });
});
define('dummy/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _semanticUiEmberComponentsUiModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiModal['default'];
    }
  });
});
define('dummy/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _semanticUiEmberComponentsUiNag) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiNag['default'];
    }
  });
});
define('dummy/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _semanticUiEmberComponentsUiPopup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiPopup['default'];
    }
  });
});
define('dummy/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _semanticUiEmberComponentsUiProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiProgress['default'];
    }
  });
});
define('dummy/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _semanticUiEmberComponentsUiRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiRadio['default'];
    }
  });
});
define('dummy/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _semanticUiEmberComponentsUiRating) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiRating['default'];
    }
  });
});
define('dummy/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _semanticUiEmberComponentsUiSearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiSearch['default'];
    }
  });
});
define('dummy/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _semanticUiEmberComponentsUiShape) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiShape['default'];
    }
  });
});
define('dummy/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _semanticUiEmberComponentsUiSidebar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiSidebar['default'];
    }
  });
});
define('dummy/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _semanticUiEmberComponentsUiSticky) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiSticky['default'];
    }
  });
});
define('dummy/components/ui-table', ['exports', 'ember-semantic-ui-table/components/ui-table'], function (exports, _emberSemanticUiTableComponentsUiTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSemanticUiTableComponentsUiTable['default'];
    }
  });
});
define('dummy/components/ui-tbody', ['exports', 'ember-semantic-ui-table/components/ui-tbody'], function (exports, _emberSemanticUiTableComponentsUiTbody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSemanticUiTableComponentsUiTbody['default'];
    }
  });
});
define('dummy/components/ui-tfoot', ['exports', 'ember-semantic-ui-table/components/ui-tfoot'], function (exports, _emberSemanticUiTableComponentsUiTfoot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSemanticUiTableComponentsUiTfoot['default'];
    }
  });
});
define('dummy/components/ui-thead', ['exports', 'ember-semantic-ui-table/components/ui-thead'], function (exports, _emberSemanticUiTableComponentsUiThead) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSemanticUiTableComponentsUiThead['default'];
    }
  });
});
define('dummy/components/ui-tr', ['exports', 'ember-semantic-ui-table/components/ui-tr'], function (exports, _emberSemanticUiTableComponentsUiTr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSemanticUiTableComponentsUiTr['default'];
    }
  });
});
define('dummy/controllers/custom-types', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    activeTab: 1
  });
});
define('dummy/controllers/editable', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    activeTab: 1
  });
});
define('dummy/controllers/ember-data-interactive', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    activeTab: 1
  });
});
define('dummy/controllers/ember-data', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    activeTab: 1
  });
});
define('dummy/controllers/expanded-row', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    activeTab: 1
  });
});
define('dummy/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    activeTab: 1
  });
});
define('dummy/controllers/translatable-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    activeTab: 1,
    intl: _ember['default'].inject.service(),

    actions: {
      changeLocale: function changeLocale(locale) {
        this.get('intl').setLocale(locale);
      }
    }
  });
});
define('dummy/ember-semantic-ui-table/tests/addon.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint | addon');

  QUnit.test('modules/ember-semantic-ui-table/classes/column.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/classes/column.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/classes/row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/classes/row.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/classes/table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/classes/table.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/components/table-cell/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/components/table-cell/default.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/components/table-header/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/components/table-header/default.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/components/table-header/translatable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/components/table-header/translatable.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/components/ui-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/components/ui-table.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/components/ui-tbody.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/components/ui-tbody.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/components/ui-tfoot.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/components/ui-tfoot.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/components/ui-thead.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/components/ui-thead.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/components/ui-tr.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/components/ui-tr.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/index.js should pass ESLint\n\n');
  });

  QUnit.test('modules/ember-semantic-ui-table/mixins/cell-alignment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-semantic-ui-table/mixins/cell-alignment.js should pass ESLint\n\n');
  });
});
define('dummy/formats', ['exports'], function (exports) {
  exports['default'] = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      EUR: {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      USD: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  };
});
define('dummy/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/app-version', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _dummyConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('dummy/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _emberIntlHelpersFormatDate) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatDate['default'];
    }
  });
});
define('dummy/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _emberIntlHelpersFormatHtmlMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatHtmlMessage['default'];
    }
  });
});
define('dummy/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _emberIntlHelpersFormatMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatMessage['default'];
    }
  });
});
define('dummy/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _emberIntlHelpersFormatNumber) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatNumber['default'];
    }
  });
});
define('dummy/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _emberIntlHelpersFormatRelative) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatRelative['default'];
    }
  });
});
define('dummy/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _emberIntlHelpersFormatTime) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatTime['default'];
    }
  });
});
define('dummy/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _emberIntlHelpersIntlGet) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersIntlGet['default'];
    }
  });
});
define('dummy/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('dummy/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _emberIntlHelpersL) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersL['default'];
    }
  });
});
define('dummy/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/map-value', ['exports', 'semantic-ui-ember/helpers/map-value'], function (exports, _semanticUiEmberHelpersMapValue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberHelpersMapValue['default'];
    }
  });
  Object.defineProperty(exports, 'mapValue', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberHelpersMapValue.mapValue;
    }
  });
});
define('dummy/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/helpers/t-html', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _emberIntlHelpersFormatHtmlMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatHtmlMessage['default'];
    }
  });
});
define('dummy/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _emberIntlHelpersT) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersT['default'];
    }
  });
});
define('dummy/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  var _config$APP = _dummyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'dummy/config/environment', 'dummy/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _dummyConfigEnvironment, _dummyMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_dummyConfigEnvironment['default'].environment, _dummyConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_dummyConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _dummyConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _dummyMirageConfig['default'], testConfig: _dummyMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/instance-initializers/ember-intl', ['exports', 'ember'], function (exports, _ember) {
  exports.instanceInitializer = instanceInitializer;

  function instanceInitializer(instance) {
    _ember['default'].deprecate('[ember-intl] instance initializer is deprecated, no longer necessary to call in testing.', false, {
      id: 'ember-intl-instance-initalizer'
    });
  }

  exports['default'] = {
    name: 'ember-intl',
    initialize: function initialize() {}
  };
});
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
define('dummy/mirage/config', ['exports', 'ember'], function (exports, _ember) {
  var emberArray = _ember['default'].A;

  exports['default'] = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */

    this.get('/people', function (schema, request) {
      var _request$queryParams = request.queryParams;
      var page = _request$queryParams.page;
      var limit = _request$queryParams.limit;
      var sort = _request$queryParams.sort;
      var dir = _request$queryParams.dir;
      var search = _request$queryParams.search;

      var people = schema.people.all().models;
      var meta = { total: people.length };

      page = Number(page || 1);
      limit = Number(limit || 20);
      dir = dir || 'asc';

      if (search) {
        people = emberArray(people).filterBy('firstName', search);
      }

      if (sort) {
        people = emberArray(people).sortBy(sort);
        if (dir !== 'asc') {
          people = people.reverse();
        }
      }

      var offset = (page - 1) * limit;
      people = people.slice(offset, offset + limit);

      return { people: people, meta: meta };
    });
  };
});
define('dummy/mirage/factories/person', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Factory.extend({
    firstName: function firstName() {
      return _emberCliMirage.faker.name.firstName();
    },
    lastName: function lastName() {
      return _emberCliMirage.faker.name.lastName();
    },
    email: function email() {
      return _emberCliMirage.faker.internet.email(this.firstName, this.lastName);
    },
    company: function company() {
      return _emberCliMirage.faker.company.companyName();
    },
    address: function address() {
      return _emberCliMirage.faker.address.streetAddress();
    },
    country: function country() {
      return _emberCliMirage.faker.address.country();
    },
    state: function state() {
      return _emberCliMirage.faker.address.state();
    }
  });
});
define('dummy/mirage/models/person', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({});
});
define('dummy/mirage/scenarios/default', ['exports'], function (exports) {
  exports['default'] = function (server) {
    server.createList('person', 100);
  };
});
define('dummy/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.RestSerializer.extend({});
});
define('dummy/mixins/base', ['exports', 'semantic-ui-ember/mixins/base'], function (exports, _semanticUiEmberMixinsBase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberMixinsBase['default'];
    }
  });
});
define('dummy/mixins/columns', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    columns: _ember['default'].computed(function () {
      return [{
        label: 'First Name',
        valuePath: 'firstName',
        hideable: false,
        verticalAlign: 'middle'
      }, {
        label: 'Last Name',
        valuePath: 'lastName',
        verticalAlign: 'middle'
      }, {
        label: 'Email',
        valuePath: 'email',
        align: 'right'
      }, {
        label: 'Company',
        valuePath: 'company'
      }, {
        label: 'Address',
        valuePath: 'address'
      }, {
        label: 'Country',
        valuePath: 'country',
        align: 'center',
        collapsing: true
      }, {
        label: 'State',
        valuePath: 'state',
        align: 'center',
        collapsing: true
      }];
    })
  });

  // END-SNIPPET mixins-columns
});
// BEGIN-SNIPPET mixins-columns
define('dummy/mixins/ember-data-table', ['exports', 'ember', 'ember-semantic-ui-table'], function (exports, _ember, _emberSemanticUiTable) {
  exports['default'] = _ember['default'].Mixin.create({
    store: _ember['default'].inject.service(),

    search: '',
    page: 1,
    limit: 10,
    total: null,

    pageCount: _ember['default'].computed('limit', 'total', function () {
      var _getProperties = this.getProperties('limit', 'total');

      var limit = _getProperties.limit;
      var total = _getProperties.total;

      if (total) {
        return Math.ceil(total / limit);
      }

      return 0;
    }),

    sort: _ember['default'].computed('table.sortedColumns.firstObject.valuePath', function () {
      var sortedColumn = this.get('table.sortedColumns.firstObject');
      if (sortedColumn && sortedColumn.get('sorted')) {
        return sortedColumn.get('valuePath');
      }
      return false;
    }),

    dir: _ember['default'].computed('table.sortedColumns.firstObject.direction', function () {
      var sortedColumn = this.get('table.sortedColumns.firstObject');
      if (sortedColumn && sortedColumn.get('sorted')) {
        return sortedColumn.get('direction') === 'ascending' ? 'asc' : 'desc';
      }
      return false;
    }),

    isLoading: false,

    table: _ember['default'].computed(function () {
      return new _emberSemanticUiTable.Table(this.get('columns'), []);
    }),

    fetchRecords: function fetchRecords() {
      var _this = this;

      var query = this.getProperties(['search', 'page', 'limit', 'sort', 'dir']);

      this.set('isLoading', true);
      this.get('store').query('person', query).then(function (records) {
        _this.set('table.rows', records);
        _this.set('total', records.get('meta.total'));
      })['finally'](function () {
        _this.set('isLoading', false);
      });
    },

    actions: {
      refresh: function refresh() {
        this.fetchRecords();
      },

      navigateToPage: function navigateToPage(pageNumber) {
        this.set('page', pageNumber);
        this.fetchRecords();
      }
    }
  });

  // END-SNIPPET mixins-ember-data-table
});
// BEGIN-SNIPPET mixins-ember-data-table
define('dummy/mixins/promise-resolver', ['exports', 'ember-promise-tools/mixins/promise-resolver'], function (exports, _emberPromiseToolsMixinsPromiseResolver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsMixinsPromiseResolver['default'];
    }
  });
});
define('dummy/models/person', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    firstName: _emberData['default'].attr(),
    lastName: _emberData['default'].attr(),
    email: _emberData['default'].attr(),
    company: _emberData['default'].attr(),
    address: _emberData['default'].attr(),
    country: _emberData['default'].attr(),
    state: _emberData['default'].attr()
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('ember-data');
    this.route('ember-data-interactive');
    this.route('custom-types');
    this.route('translatable-header');
    this.route('expanded-row');
    this.route('editable');
  });

  exports['default'] = Router;
});
define('dummy/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    intl: _ember['default'].inject.service(),

    beforeModel: function beforeModel() {
      return this.get('intl').setLocale('en-us');
    }
  });
});
define('dummy/routes/custom-types', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('person');
    }
  });

  // END-SNIPPET routes-custom-types
});
// BEGIN-SNIPPET routes-custom-types
define('dummy/routes/editable', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('person');
    }
  });

  // END-SNIPPET routes-editable
});
// BEGIN-SNIPPET routes-editable
define('dummy/routes/ember-data-interactive', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('dummy/routes/ember-data', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('person');
    }
  });

  // END-SNIPPET routes-ember-data
});
// BEGIN-SNIPPET routes-ember-data
define('dummy/routes/expanded-row', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('person');
    }
  });

  // END-SNIPPET routes-expanded-row
});
// BEGIN-SNIPPET routes-expanded-row
define('dummy/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('dummy/routes/translatable-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('person');
    }
  });

  // END-SNIPPET routes-translatable-header
});
// BEGIN-SNIPPET routes-translatable-header
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _emberIntlServicesIntl) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlServicesIntl['default'];
    }
  });
});
define("dummy/snippets", ["exports"], function (exports) {
  exports["default"] = {
    "components-basic-table.js": "import Ember from 'ember';\nimport Columns from '../mixins/columns';\nimport layout from '../templates/components/basic-table';\nimport { Table } from 'ember-semantic-ui-table';\n\nexport default Ember.Component.extend(Columns, {\n  layout,\n\n  rows: Ember.computed(function() {\n    return [\n      {\n        firstName: 'John',\n        lastName: 'Doe',\n        email: 'john.doe@company.com',\n        company: 'Foo Bar Company',\n        address: '3184 5th Avenue',\n        country: 'Brazil'\n      }\n    ];\n  }),\n\n  table: Ember.computed('columns', 'rows', function() {\n    return new Table(this.get('columns'), this.get('rows'));\n  })\n});",
    "components-custom-types.js": "import Ember from 'ember';\nimport Columns from '../mixins/columns';\nimport layout from '../templates/components/custom-types';\nimport { Table } from 'ember-semantic-ui-table';\n\nexport default Ember.Component.extend(Columns, {\n  layout,\n\n  columns: Ember.computed(function() {\n    return [\n      {\n        label: 'First Name',\n        valuePath: 'firstName',\n        headerType: 'custom',\n        verticalAlign: 'middle'\n      },\n      {\n        label: 'Last Name',\n        valuePath: 'lastName',\n        verticalAlign: 'middle'\n      },\n      {\n        label: 'Email',\n        valuePath: 'email',\n        cellType: 'email'\n      },\n      {\n        label: 'Company',\n        valuePath: 'company'\n      }\n    ];\n  }),\n\n  table: Ember.computed('columns', 'rows', function() {\n    return new Table(this.get('columns'), this.get('model'));\n  })\n});",
    "components-editable-example.js": "import Ember from 'ember';\nimport Columns from '../mixins/columns';\nimport layout from '../templates/components/editable-example';\nimport { Table } from 'ember-semantic-ui-table';\n\nexport default Ember.Component.extend(Columns, {\n  layout,\n\n  columns: Ember.computed(function() {\n    return [\n      {\n        label: 'First Name',\n        valuePath: 'firstName',\n        editable: true,\n        cellType: 'editable'\n      },\n      {\n        label: 'Last Name',\n        valuePath: 'lastName',\n        editable: true,\n        cellType: 'editable'\n      },\n      {\n        label: 'Email',\n        valuePath: 'email',\n        align: 'right'\n      },\n      {\n        label: 'Company',\n        valuePath: 'company'\n      },\n      {\n        label: 'Address',\n        valuePath: 'address'\n      },\n      {\n        label: 'Country',\n        valuePath: 'country',\n        align: 'center',\n        collapsing: true\n      },\n      {\n        label: 'State',\n        valuePath: 'state',\n        align: 'center',\n        collapsing: true\n      }\n    ];\n  }),\n\n  table: Ember.computed('columns', 'model', function() {\n    return new Table(this.get('columns'), this.get('model'));\n  }),\n\n  actions: {\n    toggleEditing(e, row) {\n      row.toggleProperty('editing');\n    }\n  }\n});",
    "components-ember-data.js": "import Ember from 'ember';\nimport Columns from '../mixins/columns';\nimport layout from '../templates/components/ember-data';\nimport { Table } from 'ember-semantic-ui-table';\n\nexport default Ember.Component.extend(Columns, {\n  layout,\n\n  table: Ember.computed('columns', 'model', function() {\n    return new Table(this.get('columns'), this.get('model'));\n  })\n});",
    "components-expanded-profile-row.js": "import Ember from 'ember';\nimport layout from '../templates/components/expanded-profile-row';\n\nexport default Ember.Component.extend({\n  layout\n});",
    "components-expanded-row-example.js": "import Ember from 'ember';\nimport Columns from '../mixins/columns';\nimport layout from '../templates/components/expanded-row-example';\nimport { Table } from 'ember-semantic-ui-table';\n\nexport default Ember.Component.extend(Columns, {\n  layout,\n\n  columns: Ember.computed(function() {\n    return [\n      {\n        cellType: 'expand-row'\n      },\n      {\n        label: 'First Name',\n        valuePath: 'firstName'\n      },\n      {\n        label: 'Last Name',\n        valuePath: 'lastName'\n      },\n      {\n        label: 'Email',\n        valuePath: 'email'\n      },\n      {\n        label: 'Company',\n        valuePath: 'company'\n      }\n    ];\n  }),\n\n  table: Ember.computed('columns', 'rows', function() {\n    return new Table(this.get('columns'), this.get('model'));\n  })\n});",
    "components-interactive-ember-data.js": "import Ember from 'ember';\nimport Columns from '../mixins/columns';\nimport EmberDataTable from '../mixins/ember-data-table';\nimport layout from '../templates/components/interactive-ember-data';\nimport { Table } from 'ember-semantic-ui-table';\n\nexport default Ember.Component.extend(Columns, EmberDataTable, {\n  layout,\n\n  init() {\n    this._super(...arguments);\n    this.fetchRecords();\n  },\n\n  table: Ember.computed(function() {\n    let columns = this.get('columns');\n    columns[0].sortable = true;\n    columns[1].sortable = true;\n    return new Table(columns, []);\n  }),\n\n  actions: {\n    sortColumn(e, column, table) {\n      if (!column.get('sortable')) {\n        return;\n      }\n\n      table.get('sortedColumns').setEach('sorted', false);\n\n      column.setProperties({\n        sorted: true,\n        direction: column.get('direction') === 'ascending' ? 'descending' : 'ascending'\n      });\n      this.fetchRecords();\n    },\n\n    selectRow(e, row/* , table */) {\n      row.toggleProperty('selected');\n    },\n\n    doubleClickCell(r, row, column/* , table */) {\n      let content = row.get(column.valuePath);\n      window.alert(`double click on ${content}`);\n    }\n  }\n});",
    "components-table-cell-editable.js": "import DefaultCell from 'ember-semantic-ui-table/components/table-cell/default';\nimport layout from '../../templates/components/table-cell/email';\n\nexport default DefaultCell.extend({\n  layout\n});",
    "components-table-cell-email.js": "import DefaultCell from 'ember-semantic-ui-table/components/table-cell/default';\nimport layout from '../../templates/components/table-cell/email';\n\nexport default DefaultCell.extend({\n  layout\n});",
    "components-table-cell-expand-row.js": "import DefaultCell from 'ember-semantic-ui-table/components/table-cell/default';\nimport layout from '../../templates/components/table-cell/expand-row';\n\nexport default DefaultCell.extend({\n  layout,\n\n  actions: {\n    toggleExpanded() {\n      this.toggleProperty('row.expanded');\n    }\n  }\n});",
    "components-table-header-custom.js": "import DefaultHeader from 'ember-semantic-ui-table/components/table-header/default';\nimport layout from '../../templates/components/table-header/custom';\n\nexport default DefaultHeader.extend({\n  layout\n});",
    "components-table-pagination.js": "import Ember from 'ember';\nimport layout from '../templates/components/table-pagination';\n\nexport default Ember.Component.extend({\n  layout,\n  classNames: ['ui', 'pagination', 'menu'],\n\n  currentPage: null,\n  totalPages: null,\n\n  firstPage: Ember.computed('totalPages', function() {\n    if (this.get('totalPages') === 0) {\n      return false;\n    }\n\n    return 1;\n  }),\n\n  previousPage: Ember.computed('currentPage', function() {\n    let current = Number(this.get('currentPage'));\n    let first = Number(this.get('firstPage'));\n\n    if (current === first) {\n      return false;\n    }\n\n    return current - 1;\n  }),\n\n  nextPage: Ember.computed('currentPage', 'totalPages', function() {\n    let current = Number(this.get('currentPage'));\n    let total = Number(this.get('totalPages'));\n\n    if (current === total) {\n      return false;\n    }\n\n    return current + 1;\n  }),\n\n  lastPage: Ember.computed.reads('totalPages'),\n\n  pageNumbers: Ember.computed('totalPages', function() {\n    let pages = [];\n    let count = this.get('totalPages');\n\n    for (let i = 1; i <= count; ++i) {\n      pages.push(i);\n    }\n\n    return pages;\n  }),\n\n  actions: {\n    pageSelected(pageNumber) {\n      let page = parseInt(pageNumber);\n\n      if (!isNaN(page)) {\n        this.sendAction('onPageChange', page);\n      }\n    }\n  }\n});",
    "components-translatable-header.js": "import Ember from 'ember';\nimport Columns from '../mixins/columns';\nimport layout from '../templates/components/translatable-header';\nimport { Table } from 'ember-semantic-ui-table';\n\nexport default Ember.Component.extend(Columns, {\n  layout,\n\n  columns: Ember.computed(function() {\n    return [\n      {\n        label: 'labels.first_name',\n        headerType: 'translatable',\n        valuePath: 'firstName',\n        verticalAlign: 'middle'\n      },\n      {\n        label: 'labels.last_name',\n        headerType: 'translatable',\n        valuePath: 'lastName',\n        verticalAlign: 'middle'\n      },\n      {\n        label: 'labels.email',\n        headerType: 'translatable',\n        valuePath: 'email',\n        cellType: 'email'\n      },\n      {\n        label: 'labels.company',\n        headerType: 'translatable',\n        valuePath: 'company'\n      }\n    ];\n  }),\n\n  table: Ember.computed('columns', 'rows', function() {\n    return new Table(this.get('columns'), this.get('model'));\n  })\n});",
    "mixins-columns.js": "import Ember from 'ember';\n\nexport default Ember.Mixin.create({\n  columns: Ember.computed(function() {\n    return [\n      {\n        label: 'First Name',\n        valuePath: 'firstName',\n        hideable: false,\n        verticalAlign: 'middle'\n      },\n      {\n        label: 'Last Name',\n        valuePath: 'lastName',\n        verticalAlign: 'middle'\n      },\n      {\n        label: 'Email',\n        valuePath: 'email',\n        align: 'right'\n      },\n      {\n        label: 'Company',\n        valuePath: 'company'\n      },\n      {\n        label: 'Address',\n        valuePath: 'address'\n      },\n      {\n        label: 'Country',\n        valuePath: 'country',\n        align: 'center',\n        collapsing: true\n      },\n      {\n        label: 'State',\n        valuePath: 'state',\n        align: 'center',\n        collapsing: true\n      }\n    ];\n  })\n});",
    "mixins-ember-data-table.js": "import Ember from 'ember';\nimport { Table } from 'ember-semantic-ui-table';\n\nexport default Ember.Mixin.create({\n  store: Ember.inject.service(),\n\n  search: '',\n  page: 1,\n  limit: 10,\n  total: null,\n\n  pageCount: Ember.computed('limit', 'total', function() {\n    let { limit, total } = this.getProperties('limit', 'total');\n    if (total) {\n      return Math.ceil(total / limit);\n    }\n\n    return 0;\n  }),\n\n  sort: Ember.computed('table.sortedColumns.firstObject.valuePath', function() {\n    let sortedColumn = this.get('table.sortedColumns.firstObject');\n    if (sortedColumn && sortedColumn.get('sorted')) {\n      return sortedColumn.get('valuePath');\n    }\n    return false;\n  }),\n\n  dir: Ember.computed('table.sortedColumns.firstObject.direction', function() {\n    let sortedColumn = this.get('table.sortedColumns.firstObject');\n    if (sortedColumn && sortedColumn.get('sorted')) {\n      return sortedColumn.get('direction') === 'ascending' ? 'asc' : 'desc';\n    }\n    return false;\n  }),\n\n  isLoading: false,\n\n  table: Ember.computed(function() {\n    return new Table(this.get('columns'), []);\n  }),\n\n  fetchRecords() {\n    let query = this.getProperties(['search', 'page', 'limit', 'sort', 'dir']);\n\n    this.set('isLoading', true);\n    this.get('store').query('person', query).then((records) => {\n      this.set('table.rows', records);\n      this.set('total', records.get('meta.total'));\n    }).finally(() => {\n      this.set('isLoading', false);\n    });\n  },\n\n  actions: {\n    refresh() {\n      this.fetchRecords();\n    },\n\n    navigateToPage(pageNumber) {\n      this.set('page', pageNumber);\n      this.fetchRecords();\n    }\n  }\n});",
    "routes-custom-types.js": "import Ember from 'ember';\n\nexport default Ember.Route.extend({\n  model() {\n    return this.get('store').findAll('person');\n  }\n});",
    "routes-editable.js": "import Ember from 'ember';\n\nexport default Ember.Route.extend({\n  model() {\n    return this.get('store').findAll('person');\n  }\n});",
    "routes-ember-data.js": "import Ember from 'ember';\n\nexport default Ember.Route.extend({\n  model() {\n    return this.get('store').findAll('person');\n  }\n});",
    "routes-expanded-row.js": "import Ember from 'ember';\n\nexport default Ember.Route.extend({\n  model() {\n    return this.get('store').findAll('person');\n  }\n});",
    "routes-translatable-header.js": "import Ember from 'ember';\n\nexport default Ember.Route.extend({\n  model() {\n    return this.get('store').findAll('person');\n  }\n});",
    "templates-basic-table.hbs": "{{ui-table table}}",
    "templates-custom-types.hbs": "{{ui-table table}}",
    "templates-editable-example.hbs": "{{ui-table table onRowDoubleClick=(action \"toggleEditing\")}}",
    "templates-ember-data.hbs": "{{ui-table table}}",
    "templates-expanded-profile-row.hbs": "<dl>\n  <dt>First name:</dt>\n  <dd>{{row.firstName}}</dd>\n  <dt>Last name:</dt>\n  <dd>{{row.lastName}}</dd>\n  <dt>Email:</dt>\n  <dd>{{row.email}}</dd>\n  <dt>Company:</dt>\n  <dd>{{row.company}}</dd>\n  <dt>Address:</dt>\n  <dd>{{row.address}}</dd>\n  <dt>Country:</dt>\n  <dd>{{row.country}}</dd>\n  <dt>State:</dt>\n  <dd>{{row.state}}</dd>\n</dl>",
    "templates-expanded-row-example.hbs": "{{ui-table table expandedRowComponent=(component \"expanded-profile-row\")}}",
    "templates-interactive-ember-data.hbs": "<div class=\"ui top attached menu\">\n  <div class=\"ui search item\">\n    <div class=\"ui transparent icon input\">\n      {{input placeholder=\"Search people...\" type=\"text\" value=search enter=(action \"refresh\")}}\n      <i class=\"search link icon\"></i>\n    </div>\n  </div>\n  <div class=\"right menu\">\n    {{#ui-dropdown class=\"icon item\" action=\"nothing\"}}\n      <i class=\"setting icon\"></i>\n      <div class=\"menu\">\n        <div class=\"header\">Visible columns</div>\n        {{#each table.hideableColumns as |column|}}\n          {{ui-checkbox label=column.label class=\"item\" checked=column.visible onChange=(action (mut column.visible))}}\n        {{/each}}\n      </div>\n    {{/ui-dropdown}}\n  </div>\n</div>\n{{#if isLoading}}\n  <div class=\"table loader\">\n    <div class=\"ui active centered inline text loader\">Loading</div>\n  </div>\n{{else}}\n  {{#ui-table table\n    class=\"bottom attached\"\n    rowSelection=true\n    onHeaderClick=(action \"sortColumn\")\n    onRowClick=(action \"selectRow\")\n    onCellDoubleClick=(action \"doubleClickCell\")\n    as |t|\n  }}\n    {{t.head}}\n    {{#t.body}}\n      No results found\n    {{/t.body}}\n    {{#t.foot}}\n      <tr>\n        <th colspan=\"{{table.visibleColumns.length}}\">\n          <span>\n            {{table.selectedRows.length}} rows selected\n          </span>\n          {{table-pagination class=\"right floated\" totalPages=pageCount currentPage=page onPageChange=(action \"navigateToPage\")}}\n        </th>\n      </tr>\n    {{/t.foot}}\n  {{/ui-table}}\n{{/if}}",
    "templates-table-cell-editable.hbs": "{{#if (and row.editing column.editable)}}\n  <div class=\"ui input\">\n    {{input value=(mut (get row column.valuePath))}}\n  </div>\n{{else}}\n  {{get row column.valuePath}}\n{{/if}}",
    "templates-table-cell-email.hbs": "<a href=\"mailto:{{get row column.valuePath}}\">Send message to {{get row column.valuePath}}</a>",
    "templates-table-cell-expand-row.hbs": "<i class=\"{{if row.expanded \"minus\" \"plus\"}} icon\" {{action \"toggleExpanded\"}}></i>",
    "templates-table-header-custom.hbs": "{{column.label}} from {{column.valuePath}} property",
    "templates-table-pagination.hbs": "<a class=\"icon item {{if (eq firstPage currentPage) 'disabled'}}\" href=\"#\" {{action 'pageSelected' firstPage}}>\n  <i class=\"angle double left icon\"></i>\n</a>\n<a class=\"icon item {{if (not previousPage) 'disabled'}}\" href=\"#\" {{action 'pageSelected' previousPage}}>\n  <i class=\"angle left icon\"></i>\n</a>\n{{#ui-dropdown class=\"item search\" selected=currentPage onChange=(action \"pageSelected\") as |execute mapper|}}\n  <div class=\"default text\">Types</div>\n  <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    {{#each pageNumbers as |pageNumber|}}\n      <div class=\"item\">\n        {{pageNumber}}\n      </div>\n    {{/each}}\n  </div>\n{{/ui-dropdown}}\n<a class=\"icon item {{if (not nextPage) 'disabled'}}\" href=\"#\" {{action 'pageSelected' nextPage}}>\n  <i class=\"angle right icon\"></i>\n</a>\n<a class=\"icon item {{if (eq lastPage currentPage) 'disabled'}}\" href=\"#\" {{action 'pageSelected' lastPage}}>\n  <i class=\"angle double right icon\"></i>\n</a>",
    "templates-translatable-header.hbs": "{{ui-table table}}"
  };
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PrqcY8eM", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui fixed red inverted huge menu\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"header item\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"ember-logo.svg\"],[\"static-attr\",\"class\",\"ui image\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    Semantic UI Table\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"item\"]],8],[\"text\",\"\\n\"],[\"block\",[\"ui-dropdown\"],null,[[\"class\"],[\"item\"]],7],[\"block\",[\"ui-dropdown\"],null,[[\"class\",\"action\"],[\"item\",\"nothing\"]],4],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"item\"],[\"static-attr\",\"href\",\"https://quantosobra.github.io/ember-semantic-ui-table/docs/\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"book icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" API Documentation\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"icon item\"],[\"static-attr\",\"href\",\"https://github.com/quantosobra/ember-semantic-ui-table/\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"github icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui main container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Editable\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Expanded row\"]],\"locals\":[]},{\"statements\":[[\"text\",\"User custom types\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Translatable header\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"Custom Types\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"dropdown icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"menu\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"translatable-header\"],[[\"class\"],[\"item\"]],3],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"custom-types\"],[[\"class\"],[\"item\"]],2],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"expanded-row\"],[[\"class\"],[\"item\"]],1],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"editable\"],[[\"class\"],[\"item\"]],0],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Interactive (pagination, sorting, hide/show columns)\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Basic Table\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"Ember Data\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"dropdown icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"menu\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"ember-data\"],[[\"class\"],[\"item\"]],6],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"ember-data-interactive\"],[[\"class\"],[\"item\"]],5],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Basic Table\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/components/basic-table", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "jyy3hg0D", "block": "{\"statements\":[[\"append\",[\"helper\",[\"ui-table\"],[[\"get\",[\"table\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/basic-table.hbs" } });
});
define("dummy/templates/components/code-snippet", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mJxgtHOS", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"source\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/code-snippet.hbs" } });
});
define("dummy/templates/components/custom-types", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "tO07Yieu", "block": "{\"statements\":[[\"append\",[\"helper\",[\"ui-table\"],[[\"get\",[\"table\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/custom-types.hbs" } });
});
define("dummy/templates/components/editable-example", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "90WsYtSq", "block": "{\"statements\":[[\"append\",[\"helper\",[\"ui-table\"],[[\"get\",[\"table\"]]],[[\"onRowDoubleClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleEditing\"],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/editable-example.hbs" } });
});
define("dummy/templates/components/ember-data", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "CQfI6M2N", "block": "{\"statements\":[[\"append\",[\"helper\",[\"ui-table\"],[[\"get\",[\"table\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ember-data.hbs" } });
});
define("dummy/templates/components/expanded-profile-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZIjsrwMQ", "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"First name:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"row\",\"firstName\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"Last name:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"row\",\"lastName\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"Email:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"row\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"Company:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"row\",\"company\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"Address:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"row\",\"address\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"Country:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"row\",\"country\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"State:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"row\",\"state\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/expanded-profile-row.hbs" } });
});
define("dummy/templates/components/expanded-row-example", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "L9hrTUTk", "block": "{\"statements\":[[\"append\",[\"helper\",[\"ui-table\"],[[\"get\",[\"table\"]]],[[\"expandedRowComponent\"],[[\"helper\",[\"component\"],[\"expanded-profile-row\"],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/expanded-row-example.hbs" } });
});
define("dummy/templates/components/interactive-ember-data", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vMdd8WXU", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui top attached menu\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui search item\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui transparent icon input\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"placeholder\",\"type\",\"value\",\"enter\"],[\"Search people...\",\"text\",[\"get\",[\"search\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"refresh\"],null]]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"search link icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"right menu\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"ui-dropdown\"],null,[[\"class\",\"action\"],[\"icon item\",\"nothing\"]],6],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isLoading\"]]],null,4,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"dynamic-attr\",\"colspan\",[\"concat\",[[\"unknown\",[\"table\",\"visibleColumns\",\"length\"]]]]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"unknown\",[\"table\",\"selectedRows\",\"length\"]],false],[\"text\",\" rows selected\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"table-pagination\"],null,[[\"class\",\"totalPages\",\"currentPage\",\"onPageChange\"],[\"right floated\",[\"get\",[\"pageCount\"]],[\"get\",[\"page\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"navigateToPage\"],null]]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      No results found\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"unknown\",[\"t\",\"head\"]],false],[\"text\",\"\\n\"],[\"block\",[\"t\",\"body\"],null,null,1],[\"block\",[\"t\",\"foot\"],null,null,0]],\"locals\":[\"t\"]},{\"statements\":[[\"block\",[\"ui-table\"],[[\"get\",[\"table\"]]],[[\"class\",\"rowSelection\",\"onHeaderClick\",\"onRowClick\",\"onCellDoubleClick\"],[\"bottom attached\",true,[\"helper\",[\"action\"],[[\"get\",[null]],\"sortColumn\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"selectRow\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"doubleClickCell\"],null]]],2]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"table loader\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui active centered inline text loader\"],[\"flush-element\"],[\"text\",\"Loading\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"append\",[\"helper\",[\"ui-checkbox\"],null,[[\"label\",\"class\",\"checked\",\"onChange\"],[[\"get\",[\"column\",\"label\"]],\"item\",[\"get\",[\"column\",\"visible\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"column\",\"visible\"]]],null]],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"column\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"setting icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"menu\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"header\"],[\"flush-element\"],[\"text\",\"Visible columns\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"table\",\"hideableColumns\"]]],null,5],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/interactive-ember-data.hbs" } });
});
define("dummy/templates/components/table-cell/editable", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qG48Ia11", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"and\"],[[\"get\",[\"row\",\"editing\"]],[\"get\",[\"column\",\"editable\"]]],null]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"get\"],[[\"get\",[\"row\"]],[\"get\",[\"column\",\"valuePath\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui input\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\"],[[\"helper\",[\"mut\"],[[\"helper\",[\"get\"],[[\"get\",[\"row\"]],[\"get\",[\"column\",\"valuePath\"]]],null]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/table-cell/editable.hbs" } });
});
define("dummy/templates/components/table-cell/email", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GAlg5Vwg", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"mailto:\",[\"helper\",[\"get\"],[[\"get\",[\"row\"]],[\"get\",[\"column\",\"valuePath\"]]],null]]]],[\"flush-element\"],[\"text\",\"Send message to \"],[\"append\",[\"helper\",[\"get\"],[[\"get\",[\"row\"]],[\"get\",[\"column\",\"valuePath\"]]],null],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/table-cell/email.hbs" } });
});
define("dummy/templates/components/table-cell/expand-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "r5fuIcjl", "block": "{\"statements\":[[\"open-element\",\"i\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"get\",[\"row\",\"expanded\"]],\"minus\",\"plus\"],null],\" icon\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleExpanded\"]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/table-cell/expand-row.hbs" } });
});
define("dummy/templates/components/table-header/custom", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cWiBlL7N", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"column\",\"label\"]],false],[\"text\",\" from \"],[\"append\",[\"unknown\",[\"column\",\"valuePath\"]],false],[\"text\",\" property\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/table-header/custom.hbs" } });
});
define("dummy/templates/components/table-pagination", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qhNun/9k", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"icon item \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"firstPage\"]],[\"get\",[\"currentPage\"]]],null],\"disabled\"],null]]]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"pageSelected\",[\"get\",[\"firstPage\"]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"angle double left icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"icon item \",[\"helper\",[\"if\"],[[\"helper\",[\"not\"],[[\"get\",[\"previousPage\"]]],null],\"disabled\"],null]]]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"pageSelected\",[\"get\",[\"previousPage\"]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"angle left icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"ui-dropdown\"],null,[[\"class\",\"selected\",\"onChange\"],[\"item search\",[\"get\",[\"currentPage\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"pageSelected\"],null]]],1],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"icon item \",[\"helper\",[\"if\"],[[\"helper\",[\"not\"],[[\"get\",[\"nextPage\"]]],null],\"disabled\"],null]]]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"pageSelected\",[\"get\",[\"nextPage\"]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"angle right icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"icon item \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"lastPage\"]],[\"get\",[\"currentPage\"]]],null],\"disabled\"],null]]]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"pageSelected\",[\"get\",[\"lastPage\"]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"angle double right icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"get\",[\"pageNumber\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"pageNumber\"]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"default text\"],[\"flush-element\"],[\"text\",\"Types\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"dropdown icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"menu\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"pageNumbers\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"execute\",\"mapper\"]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/table-pagination.hbs" } });
});
define("dummy/templates/components/translatable-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hyQqTmni", "block": "{\"statements\":[[\"append\",[\"helper\",[\"ui-table\"],[[\"get\",[\"table\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/translatable-header.hbs" } });
});
define("dummy/templates/components/ui-accordion", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/CYhsOpN", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-accordion.hbs" } });
});
define("dummy/templates/components/ui-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "B+PnvrXS", "block": "{\"statements\":[[\"open-element\",\"input\",[]],[\"dynamic-attr\",\"type\",[\"unknown\",[\"type\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"checked\",[\"helper\",[\"unbound\"],[[\"get\",[\"checked\"]]],null],null],[\"dynamic-attr\",\"disabled\",[\"helper\",[\"unbound\"],[[\"get\",[\"disabled\"]]],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-checkbox.hbs" } });
});
define("dummy/templates/components/ui-dimmer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JYlatTNa", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-dimmer.hbs" } });
});
define("dummy/templates/components/ui-dropdown", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mM68b5kz", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"mapping\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-dropdown.hbs" } });
});
define("dummy/templates/components/ui-embed", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ELk3Mrw7", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-embed.hbs" } });
});
define("dummy/templates/components/ui-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2OV4EZVn", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-modal.hbs" } });
});
define("dummy/templates/components/ui-nag", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JJmjZFjj", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-nag.hbs" } });
});
define("dummy/templates/components/ui-popup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "C/BctK1/", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-popup.hbs" } });
});
define("dummy/templates/components/ui-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YtwMnxXP", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-progress.hbs" } });
});
define("dummy/templates/components/ui-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "plrkOMxw", "block": "{\"statements\":[[\"open-element\",\"input\",[]],[\"dynamic-attr\",\"type\",[\"unknown\",[\"type\"]],null],[\"dynamic-attr\",\"name\",[\"unknown\",[\"name\"]],null],[\"dynamic-attr\",\"tabindex\",[\"unknown\",[\"tabindex\"]],null],[\"dynamic-attr\",\"checked\",[\"helper\",[\"unbound\"],[[\"get\",[\"checked\"]]],null],null],[\"dynamic-attr\",\"disabled\",[\"helper\",[\"unbound\"],[[\"get\",[\"disabled\"]]],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-radio.hbs" } });
});
define("dummy/templates/components/ui-rating", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FHMW4WWB", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-rating.hbs" } });
});
define("dummy/templates/components/ui-search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cLkurLIO", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-search.hbs" } });
});
define("dummy/templates/components/ui-shape", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "tXJaEFrv", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-shape.hbs" } });
});
define("dummy/templates/components/ui-sidebar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "bN1KX7Gm", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-sidebar.hbs" } });
});
define("dummy/templates/components/ui-sticky", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+jZPQJz5", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"execute\"],null]]]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/ui-sticky.hbs" } });
});
define("dummy/templates/custom-types", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "z9vuHTzZ", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segments\"],[\"static-attr\",\"id\",\"table-custom-types\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"ui header\"],[\"flush-element\"],[\"text\",\"Custom header & cell types\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"custom-types\"],null,[[\"model\"],[[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui top attached tabular menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],1]],[\"flush-element\"],[\"text\",\"templates/custom-types.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],2]],[\"flush-element\"],[\"text\",\"components/custom-types.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],3]],[\"flush-element\"],[\"text\",\"table-cell/email.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],4]],[\"flush-element\"],[\"text\",\"table-cell/email.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],5],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],5]],[\"flush-element\"],[\"text\",\"table-header/custom.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],6],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],6]],[\"flush-element\"],[\"text\",\"table-header/custom.hbs\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-custom-types.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-custom-types.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-table-cell-email.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-table-cell-email.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],5],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-table-header-custom.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],6],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-table-header-custom.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/custom-types.hbs" } });
});
define("dummy/templates/editable", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hD8Ioe62", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segments\"],[\"static-attr\",\"id\",\"table-custom-types\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"ui header\"],[\"flush-element\"],[\"text\",\"Editable cell\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"info circle icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      Double-click on a row to enable editing. Check dirty records with Ember Inspector.\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"editable-example\"],null,[[\"model\"],[[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui top attached tabular menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],1]],[\"flush-element\"],[\"text\",\"templates/editable-example.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],2]],[\"flush-element\"],[\"text\",\"components/editable-example.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],3]],[\"flush-element\"],[\"text\",\"table-cell/editable.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],4]],[\"flush-element\"],[\"text\",\"table-cell/editable.hbs\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-editable-example.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-editable-example.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-table-cell-editable.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-table-cell-editable.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/editable.hbs" } });
});
define("dummy/templates/ember-data-interactive", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "M3PYH62C", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segments\"],[\"static-attr\",\"id\",\"interactive-table-ember-data\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"ui header\"],[\"flush-element\"],[\"text\",\"Interactive Table with Ember Data\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"interactive-ember-data\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui top attached tabular menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],1]],[\"flush-element\"],[\"text\",\"interactive-ember-data.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],2]],[\"flush-element\"],[\"text\",\"interactive-ember-data.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],3]],[\"flush-element\"],[\"text\",\"columns.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],4]],[\"flush-element\"],[\"text\",\"ember-data-table.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],5],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],5]],[\"flush-element\"],[\"text\",\"table-pagination.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],6],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],6]],[\"flush-element\"],[\"text\",\"table-pagination.js\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-interactive-ember-data.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-interactive-ember-data.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"mixins-columns.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"mixins-ember-data-table.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],5],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-table-pagination.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],6],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-table-pagination.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/ember-data-interactive.hbs" } });
});
define("dummy/templates/ember-data", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "CN6jhqPV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segments\"],[\"static-attr\",\"id\",\"table-ember-data\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"ui header\"],[\"flush-element\"],[\"text\",\"Table with Ember Data\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"ember-data\"],null,[[\"model\"],[[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui top attached tabular menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],1]],[\"flush-element\"],[\"text\",\"templates/ember-data.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],2]],[\"flush-element\"],[\"text\",\"components/ember-data.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],3]],[\"flush-element\"],[\"text\",\"routes/ember-data.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],4]],[\"flush-element\"],[\"text\",\"mixins/columns.js\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-ember-data.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-ember-data.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"routes-ember-data.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"mixins-columns.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/ember-data.hbs" } });
});
define("dummy/templates/expanded-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rXUBD5n5", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segments\"],[\"static-attr\",\"id\",\"table-custom-types\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"ui header\"],[\"flush-element\"],[\"text\",\"Expanded Row\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"expanded-row-example\"],null,[[\"model\"],[[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui top attached tabular menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],1]],[\"flush-element\"],[\"text\",\"templates/expanded-row-example.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],2]],[\"flush-element\"],[\"text\",\"components/expanded-row-example.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],3]],[\"flush-element\"],[\"text\",\"table-cell/expand-row.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],4]],[\"flush-element\"],[\"text\",\"table-cell/expand-row.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],5],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],5]],[\"flush-element\"],[\"text\",\"templates/expanded-profiled-row.hbs\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-expanded-row-example.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-expanded-row-example.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-table-cell-expand-row.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],4],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-table-cell-expand-row.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],5],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-expanded-profile-row.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/expanded-row.hbs" } });
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4npd1ghi", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segments\"],[\"static-attr\",\"id\",\"example-basic-table\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"ui header\"],[\"flush-element\"],[\"text\",\"Basic Table\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"basic-table\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui top attached tabular menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],1]],[\"flush-element\"],[\"text\",\"templates/components/basic-table.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],2]],[\"flush-element\"],[\"text\",\"components/basic-table.js\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],3]],[\"flush-element\"],[\"text\",\"mixins/columns.js\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-basic-table.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-basic-table.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],3],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"mixins-columns.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/index.hbs" } });
});
define("dummy/templates/translatable-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "42B4+iG4", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segments\"],[\"static-attr\",\"id\",\"table-translatable-header\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"ui header\"],[\"flush-element\"],[\"text\",\"Translatable column header\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui segment\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      Set locale:\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"ui button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"changeLocale\",\"en-us\"]],[\"flush-element\"],[\"text\",\"EN-US\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"ui button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"changeLocale\",\"pt-br\"]],[\"flush-element\"],[\"text\",\"PT-BR\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"translatable-header\"],null,[[\"model\"],[[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ui top attached tabular menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],1]],[\"flush-element\"],[\"text\",\"templates/translatable-header.hbs\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" item\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"activeTab\"]]],null],2]],[\"flush-element\"],[\"text\",\"components/translatable-header.js\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],1],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"templates-translatable-header.hbs\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ui bottom attached \",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"activeTab\"]],2],null],\"active\"],null],\" tab segment\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"code-snippet\"],null,[[\"name\"],[\"components-translatable-header.js\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/translatable-header.hbs" } });
});
define('dummy/tests/mirage/mirage.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/factories/person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/person.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/person.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
define("dummy/translations/en-us", ["exports"], function (exports) {
  exports["default"] = { "labels": { "company": "Company", "email": "Email", "first_name": "First Name", "last_name": "Last Name" } };
});
define("dummy/translations/pt-br", ["exports"], function (exports) {
  exports["default"] = { "labels": { "company": "Empresa", "email": "E-mail", "first_name": "Nome", "last_name": "Sobrenome" } };
});
define('dummy/utils/get-promise-content', ['exports', 'ember-promise-tools/utils/get-promise-content'], function (exports, _emberPromiseToolsUtilsGetPromiseContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsUtilsGetPromiseContent['default'];
    }
  });
});
define('dummy/utils/intl/missing-message', ['exports', 'ember', 'ember-intl/utils/links'], function (exports, _ember, _emberIntlUtilsLinks) {
  exports['default'] = missingMessage;
  var warn = _ember['default'].warn;

  function missingMessage(key, locales) {
    if (!locales) {
      warn('[ember-intl] no locale has been set. Documentation: ' + _emberIntlUtilsLinks['default'].unsetLocale, false, {
        id: 'ember-intl-no-locale-set'
      });
    } else {
      warn('[ember-intl] translation: \'' + key + '\' on locale: \'' + locales.join(', ') + '\' was not found.', false, {
        id: 'ember-intl-missing-translation'
      });
    }

    return 'Missing translation: ' + key;
  }
});
define('dummy/utils/is-fulfilled', ['exports', 'ember-promise-tools/utils/is-fulfilled'], function (exports, _emberPromiseToolsUtilsIsFulfilled) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsUtilsIsFulfilled['default'];
    }
  });
});
define('dummy/utils/is-promise', ['exports', 'ember-promise-tools/utils/is-promise'], function (exports, _emberPromiseToolsUtilsIsPromise) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsUtilsIsPromise['default'];
    }
  });
});
define('dummy/utils/smart-resolve', ['exports', 'ember-promise-tools/utils/smart-resolve'], function (exports, _emberPromiseToolsUtilsSmartResolve) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPromiseToolsUtilsSmartResolve['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-semantic-ui-table","version":"0.4.0+35447332"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
