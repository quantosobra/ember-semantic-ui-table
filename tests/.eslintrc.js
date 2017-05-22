module.exports = {
  env: {
    embertest: true
  },
  globals: {
    server: true
  },
  rules: {
    'ember-suave/no-direct-property-access': 'off',
    'ember-suave/require-const-for-ember-properties': 'off'
  }
};
