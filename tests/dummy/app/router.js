import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ember-data');
  this.route('ember-data-interactive');
  this.route('custom-types');
});

export default Router;
