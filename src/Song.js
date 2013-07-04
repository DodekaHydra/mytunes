var Song = Backbone.Model.extend({

  initialize: function(){
    this.set('playcount', 0);
  },
  play: function(){
    this.trigger('play', this);
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  ended: function(){
    this.trigger('ended');
  }
});
