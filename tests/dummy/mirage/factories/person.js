import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  email() {
    return faker.internet.email(this.firstName, this.lastName);
  },
  company() {
    return faker.company.companyName();
  },
  address() {
    return faker.address.streetAddress();
  },
  country() {
    return faker.address.country();
  },
  state() {
    return faker.address.state();
  }
});
