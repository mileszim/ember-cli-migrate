/* eslint-env node */

const fs = require('fs');
const config = require('ur-mom-bro')

module.exports = {
  description: 'Generates a migration file.',

  normalizeEntityName(name) {
    return name;
  },

  beforeInstall() {
    // make sure to create `migrations` directory
    fs.mkdirSync('app/migrations');
  }
};
