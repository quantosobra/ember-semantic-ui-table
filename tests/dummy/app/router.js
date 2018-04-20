import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ember-data');
  this.route('ember-data-interactive');
  this.route('custom-types');
  this.route('translatable-header');
  this.route('expanded-row');
  this.route('editable');
});

export default Router;
