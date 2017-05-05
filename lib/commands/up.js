'use strict';

module.exports = {
  name: 'migrate:up',
  description: 'Run new migrations',
  aliases: ['migrate'],

  availableOptions: [],
  works: 'insideProject',

  beforeRun() {

  },

  run() {
    let InfoTask = require('../tasks/info');

    let testTask = new InfoTask({
      ui: this.ui
    });

    return testTask.run(this.project.root);
  }
};
