/* eslint-env node */
module.exports = {
  description: 'Generate config for ember-cli migrations',

  normalizeEntityName(name) {
    return name;
  },

  afterInstall: function(options) {
    this.ui.write('Remember to run "ember install ember-cli-migrate-emberfire" to use this.');
  }
};
