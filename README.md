# ember-semantic-ui-table

[![Build Status](https://travis-ci.org/quantosobra/ember-semantic-ui-table.svg)](https://travis-ci.org/quantosobra/ember-semantic-ui-table)
[![npm version](https://badge.fury.io/js/ember-semantic-ui-table.svg)](http://badge.fury.io/js/ember-semantic-ui-table)
[![Ember Observer Score](http://emberobserver.com/badges/ember-semantic-ui-table.svg)](http://emberobserver.com/addons/ember-semantic-ui-table)
[![Code Climate](https://codeclimate.com/github/quantosobra/ember-semantic-ui-table/badges/gpa.svg)](https://codeclimate.com/github/quantosobra/ember-semantic-ui-table)
[![Embroider Safe](http://badges.herokuapp.com/travis/quantosobra/ember-semantic-ui-table?branch=master&env=EMBER_TRY_SCENARIO=embroider&label=Embroider+Safe)](https://travis-ci.org/quantosobra/ember-semantic-ui-table)

## Features

[Semantic UI](http://semantic-ui.com/) styled tables for Ember.

## Installation

```
ember install ember-semantic-ui-table
```

## Compatibility

- Ember.js v2.18 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Helpful Links

- ### [Live Demo](http://quantosobra.github.io/ember-semantic-ui-table)

- ### [Changelog](CHANGELOG.md)

## Looking for help?

If it is a bug [please open an issue on GitHub](https://github.com/quantosobra/ember-semantic-ui-table/issues).

## Usage

In your controller or component, create a table object and configure it's columns:

```js
import Ember from 'ember';
import { Table } from 'ember-semantic-ui-table'

export default Ember.Component.extend({
  table: Ember.computed(function() {
    // Data can be from any source
    let rows = this.get('model');

    return Table.create([
      {
        label: 'Name',
        valuePath: 'name'
      },
      {
        label: 'Age',
        valuePath: 'age'
      }
    ], rows);
  })
});
```

Then, in your template, use the `ui-table` component and pass the table object for it:

```hbs
{{ui-table table}}
```

You can see more advanced examples in the [demo page](http://quantosobra.github.io/ember-semantic-ui-table).

## Development

To release and publish a new version, use the commands:

```
ember release (--major|--minor|--patch)
yarn publish
```

## License

This project is developed at [QuantoSobra](https://www.quantosobra.com.br) and licensed under the MIT license.
See the [LICENSE.md](LICENSE.md) file for the full license text.

QuantoSobra &copy; 2017-2020
