/* jshint node: true */

module.exports = function(migrateTarget) {
  var ENV = {
    migrate: {}
    // include other plugin configuration that applies to all migrate targets here
  };

  if (migrateTarget === 'development') {
    ENV.migrate.environment = 'development';
    // configure other plugins for development migrate target here
  }

  if (migrateTarget === 'staging') {
    ENV.migrate.environment = 'production';
    // configure other plugins for staging migrate target here
  }

  if (migrateTarget === 'production') {
    ENV.migrate.environment = 'production';
    // configure other plugins for production migrate target here
  }

  return ENV;
};
