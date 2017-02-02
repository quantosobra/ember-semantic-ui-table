import Ember from 'ember';

export default Ember.Controller.extend({
  activeTab: 1,
  intl: Ember.inject.service(),

  actions: {
    changeLocale(locale) {
      this.get('intl').setLocale(locale);
    }
  }
});
