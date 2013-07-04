var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(){
      this.ended();
      //this.playcount();
    }, this);
    this.on('dequeue', function(song){
      this.ended();
    }, this);
  },
  playFirst: function(){
    var plays = this.at(0).get('playcount') + 1;
    this.at(0).set('playcount', plays);
    //this.trigger('playcount');
    this.at(0).play();
  },
  ended: function() {
    this.shift();
    if (this.length >= 1){
      this.playFirst();
    }
  }
});