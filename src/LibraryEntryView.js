var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },
  // should be a spy here to queue clicked songs

  render: function(){
    return this.$el.html(this.template(this.model.attributes)+'<td>'+this.model.attributes.playcount+'</td>');
  }

});
