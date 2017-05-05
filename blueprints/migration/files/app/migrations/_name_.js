import Migration from 'ember-cli-migrate/lib/migration';

export default Migration.extend({
  up() {
    // this.get('store').findRecord('my-model', 1).then((myModel) => {
    //   myModel.set('name', 'bob');
    // });
  },

  down() {
    // not yet implemented
  }
});
