var map3D = function(tstump){
  this.cell3d = new Array(9);
  for(i=0;i<9;i++){
    this.cell3d[i] = new Array(9);
    for(j=0;j<9;j++){
      this.cell3d[i][j] = new Array(9);
      for(h=0;h<9;h++){
        this.cell3d[i][j][h] = null;
      }
    }
  }

  //timestumpを導入しようと思って追加（予定）
  if(tstump !== undefined){
    this.timestump = n;
  }
};

var stockZone0 = function(){
  this.stock = new Array();
  this.camp = 0;
};
var stockZone1 = function(){
  this.stock = new Array();
  this.camp = 1;
};

//gameをおこなうMapの変数を定義
var mainGameField = null;
var gameField = function(map,zone0,zone1){
  this.map = map;
  this.zone0 = zone0;
  this.zone1 = zone1;
}
