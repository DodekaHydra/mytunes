var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(){
      this.ended();
    }, this);
    this.on('dequeue', function(song){
      this.remove(song);
    }, this);
  },
  playFirst: function(){
    this.at(0).play();
  },
  ended: function() {
    this.shift();
    if (this.length >= 1){
      this.playFirst();
    }
  }
});