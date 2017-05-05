import Ember from 'ember';

export default Ember.CoreObject.extend({
  store: Ember.inject.service('store')
});
