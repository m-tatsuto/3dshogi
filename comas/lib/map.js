var map3D = function() {
  this.cell3d = new Array(9);
    
  for (var i = 0; i < 9; i++) {
    this.cell3d[i] = new Array(9);
      
    for(var j = 0; j < 9; j++) {
      this.cell3d[i][j] = new Array(9);
      
      for(var h = 0; h < 9; h++) {
        this.cell3d[i][j][h] = null;
      }
    }
  }    
};

var stockZone0 = function() {
  this.stock = new Array();
  this.camp = 0;
};

var stockZone1 = function() {
  this.stock = new Array();
  this.camp = 1;
};

//gameをおこなうMapの変数を定義
var mainGameField = null;
var gameField = function(map, zone0, zone1) {
  this.map = map;
  this.zone0 = zone0;
  this.zone1 = zone1;
  this.turn = -1;
  this.count = 1;
  this.timestamp = new Date();
}
