/**
 * メインゲームのマップを設定をする
 */
function setInitMapObject(){
  var mainMap = new map3D();
  var mainZone1 = new stockZone0();
  var mainZone2 = new stockZone1();

  mainGameField = new gameField(mainMap,mainZone1,mainZone2);
  console.log(mainGameField);

  setComaInitObjectInMainMap();
}

/**
 * メインゲームの駒をマップに設定する
 */
function setComaInitObjectInMainMap(){

  //両軍の歩を設置
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      mainGameField.map.cell3d[i][2][j] = new fu(0);
      mainGameField.map.cell3d[i][6][j] = new fu(1);
    }
  }

  //両軍の飛車、角を設置
  mainGameField.map.cell3d[1][1][1] = new hisha(0);
  mainGameField.map.cell3d[1][1][7] = new kaku(0);
  mainGameField.map.cell3d[7][1][7] = new hisha(0);
  mainGameField.map.cell3d[7][1][1] = new kaku(0);
  mainGameField.map.cell3d[1][7][1] = new hisha(1);
  mainGameField.map.cell3d[1][7][7] = new kaku(1);
  mainGameField.map.cell3d[7][7][7] = new hisha(1);
  mainGameField.map.cell3d[7][7][1] = new kaku(1);

  //両軍の香車を設置
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      var checkx = (i==0 || i==8);
      var checkz = (j==0 || j==8);
      if(checkx || checkz){
        mainGameField.map.cell3d[i][0][j] = new kousha(0);
        mainGameField.map.cell3d[i][8][j] = new kousha(1);
      }
    }
  }

  //両軍の桂馬を設置
  for(var i = 1; i < 8; i++){
    for(var j = 1; j < 8; j++){
      var checkx = (i==1 || i==7);
      var checkz = (j==1 || j==7);
      if(checkx || checkz){
        mainGameField.map.cell3d[i][0][j] = new keima(0);
        mainGameField.map.cell3d[i][8][j] = new keima(1);
      }
    }
  }

  //両軍の銀を設置
  for(var i = 2; i < 7; i++){
    for(var j = 2; j < 7; j++){
      var checkx = (i==2 || i==6);
      var checkz = (j==2 || j==6);
      if(checkx || checkz){
        mainGameField.map.cell3d[i][0][j] = new gin(0);
        mainGameField.map.cell3d[i][8][j] = new gin(1);
      }
    }
  }

  //両軍の金を設置
  for(var i = 3; i < 6; i++){
    for(var j = 3; j < 6; j++){
      var checkx = (i==3 || i==5);
      var checkz = (j==3 || j==5);
      if(checkx || checkz){
        mainGameField.map.cell3d[i][0][j] = new kin(0);
        mainGameField.map.cell3d[i][8][j] = new kin(1);
      }
    }
  }

  //玉・王を設置
  mainGameField.map.cell3d[4][0][4] = new gyoku();
  mainGameField.map.cell3d[4][8][4] = new ou();
}

