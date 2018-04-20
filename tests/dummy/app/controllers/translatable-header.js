import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  activeTab: 1,
  intl: service(),

  actions: {
    changeLocale(locale) {
      this.get('intl').setLocale(locale);
    }
  }
});
