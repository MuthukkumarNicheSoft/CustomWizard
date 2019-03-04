export default Ember.Component.extend({
  actions: {
    add() {
      if (!this.get('inputs')) {
        this.set('inputs', Ember.A());
      }
      this.get('inputs').pushObject(Ember.Object.create());
    },

    remove(input) {
      this.get('inputs').removeObject(input);
    }
  }
});
