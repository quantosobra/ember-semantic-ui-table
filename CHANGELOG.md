# Changelog

## 4.0.1 (2019-08-14)

* Replace usage of merge with assign to remove deprecation warning

## 4.0.0 (2019-07-31)

* [[#124](https://github.com/quantosobra/ember-semantic-ui-table/pull/124)] [BREAKING] Convert native class Table to extend from EmberObject

To upgrade you need to change all usages of `new Table` with `Table.create`. All arguments remain the same, e.g. `new Table(columns, rows)` should be replaced with `Table.create(columns, rows)`.

## 3.0.0 (2019-05-22)

* Update to ember-cli-babel 7.x
* Drop support for NodeJS 6.x

## 2.0.0 (2018-12-04)

* [[#7](https://github.com/quantosobra/ember-semantic-ui-table/pull/7)] Update Ember CLI

## 1.0.0 (2018-04-20)

* [[#6](https://github.com/quantosobra/ember-semantic-ui-table/pull/6)] Update Semantic UI

## 0.5.0 (2017-05-23)

* [[#3](https://github.com/quantosobra/ember-semantic-ui-table/pull/3)] Expanded row support
* [[#2](https://github.com/quantosobra/ember-semantic-ui-table/pull/2)] Add basic support and examples for creating editable cells

## 0.4.0 (2017-04-26)

* Show ui-tbody block content when table is empty

## 0.3.0 (2017-04-25)

* Allow to configure sorting for individual columns

## 0.2.0 (2017-02-02)

* Add support for custom headers and cells
* Add a translatable custom header

## 0.1.0 (2017-02-01)

* Initial release
