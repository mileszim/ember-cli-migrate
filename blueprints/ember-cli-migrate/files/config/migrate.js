/* jshint node: true */

module.exports = function(migrateTarget) {
  var ENV = {
    migrate: {
      // This will be updated manually, but you can update this to
      // the file name of the migration you want to start with
      lastRunMigration: null
    }
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
