/* eslint-env node */
module.exports = {
  description: 'Generate config for ember-cli migrations',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    this.ui.write('Remember to run "ember install ember-cli-migrate-emberfire" to use this.');
  }
};
