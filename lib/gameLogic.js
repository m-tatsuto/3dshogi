var turncamp = 0;
//選択した駒を保存する変数
var touchComaObject = null;

/**
 * mapObj上のx,y,zの位置の情報を取得
 */
function selectComaObject(x, y, z) {
  var nowPointAry = [x, y, z];
  var comaObject = mainGameField.map.cell3d[x][y][z];

  //自駒または駒が存在するか確認
  if (comaObject.camp != turncamp) {
    if (comaObject) {
      alert("敵駒です");
    } else {
      alert("駒が存在しません");
    }

    return false;
  }

  //駒の移動方向を定義
  var comaDirection = 0;
  comaObject.camp ? comaDirection = -1 : comaDirection = 1;

  var pointlen = comaObject.relativePoint.length;
  var moveablePointAry = new Array();
  var extMoveablePointAry = new Array();

  for (i = 0; i < pointlen; i++) {
    var mx = x + comaObject.relativePoint[i][0];
    var my = y + comaObject.relativePoint[i][1] * comaDirection;
    var mz = z + comaObject.relativePoint[i][2];
    var mary = [mx, my, mz];
    moveablePointAry.push(mary);
  }

  if (comaObject.extRelativePoint !== undefined) {
    var extPointlen = comaObject.extRelativePoint.length;

    for (i = 0; i < extPointlen; i++) {
      var mx = x + comaObject.extRelativePoint[i][0];
      var my = y + comaObject.extRelativePoint[i][1] * comaDirection;
      var mz = z + comaObject.extRelativePoint[i][2];
      var mary = [mx, my, mz];
      extMoveablePointAry.push(mary);
    }
  }

  var resultObject =  {
    'coma' : comaObject,
    'moveablePoint' : moveablePointAry,
    'extMoveablePoint' : extMoveablePointAry,
    'nowPoint' : nowPointAry,
    'map' : mainGameField.map,
  };

  resultObject.moveablePoint = moveableCheck(resultObject);

  //選択した駒を保存
  touchComaObject = resultObject;
  return resultObject;
}

/**
 * 選択した駒をx,y,zの位置に動かす 
 */
function moveComaObject(x, y, z) {

  var selComa = touchComaObject;
  if (!selComa) { alert("選択している駒がないよ！"); return false; }

  //選択した駒の位置(x,y,z)を取得
  var nx = selComa.nowPoint[0];
  var ny = selComa.nowPoint[1];
  var nz = selComa.nowPoint[2];

  moveNum = searchComaMoveNum(x,y,z);
  if (moveNum === false) {
    alert("そこには移動できないです");
    return false;
  }

  //選択した駒を移動させる位置(x,y,z)を取得
  var mx = selComa["moveablePoint"][moveNum][0];
  var my = selComa["moveablePoint"][moveNum][1];
  var mz = selComa["moveablePoint"][moveNum][2];

  //マップのインスタンスを取得
  var mapobj = selComa["map"].cell3d;
  
  //自駒にする。
  var tmpComaObject = mapobj[mx][my][mz];
  if (tmpComaObject) {
    alert("敵駒がありました");
    insertComaObjectInZone(tmpComaObject);
  }

  //成りの確認
  if (selComa.coma.camp == 0 && y >= 6) {
    alert("敵陣地に入りました camp = 0");
    selComa.coma = changeComaObject(selComa.coma);
  }

  if ((selComa.coma.camp == 1) && (y <= 2)) {
    alert("敵陣地に入りました camp = 1");
    selComa.coma = changeComaObject(selComa.coma);
  }

  console.debug(selComa.coma);

  //駒を移動させる
  mapobj[mx][my][mz] = selComa["coma"];
  console.debug(selComa);
  mapobj[nx][ny][nz] = null;

  //ターンを入れえる
  turnchange();
}

/**
 * ゲームのターンを入れ替える
 */
function turnchange() {
  turncamp ? turncamp = 0 : turncamp = 1;
  touchComaObject = null;
}

/**
 * 取った駒を手駒配列に挿入
 */
function insertComaObjectInZone(comaObj) {
  console.log("insertComaObjectInZone");

  var oncamp = comaObj.camp ? 0 : 1;
  
  //玉か王だった場合
  if (comaObj.name == "王" || comaObj.name == "玉") {
    mainGameFinish(oncamp);
  }

  //成っていた場合、元の駒に戻す
  if (comaObj.preComa) {
    comaObj = comaObj.preComa;
  }
  console.log(comaObj);

  if (oncamp == 0) {
    comaObj.camp = oncamp;
    mainGameField.zone0.stock.push(comaObj);
  }

  if (oncamp == 1) {
    comaObj.camp = oncamp;
    mainGameField.zone1.stock.push(comaObj);
  }

  console.log(mainGameField);
}

/**
 * 手駒を選択する
 */
function selectStockComaObj(num) {
  
  if (turncamp == 0) {
    touchComaObject = mainGameField.zone0.stock[num];
  }

  if (turncamp == 1) {
    touchComaObject = mainGameField.zone1.stock[num];
  }
  console.log("selectStockComaObj");
  console.log(touchComaObject);
}

/**
 * 選択した手駒をマップに設置
 */
function setComaObjectInMap(x, y, z) {
  var comaObj = touchComaObject;

  if (turncamp != comaObj.camp) {
    alert("エラー：自駒が選択されていません");
    return false;
  }

  if (mainGameField.map.cell3d[x][y][z] == null) {
    mainGameField.map.cell3d[x][y][z] = comaObj;
    alert(deleteComaObjectInStock(comaObj));
    turnchange();
    return true;
  } else {
    alert("敵駒が存在するかMap外です");
    return false;
  }
}

/**
 * 手駒を使用した時に手駒配列から削除する
 */
function deleteComaObjectInStock(comaObj) {

  console.debug(comaObj);
  if (comaObj.camp == 0) {
    zone0len = mainGameField.zone0.stock.length;
    for (i = 0; i < zone0len; i++) {
      if (mainGameField.zone0.stock[i].name == comaObj.name) {
        mainGameField.zone0.stock.splice(i, 1);
        return true;
      }
    }
  }

  if (comaObj.camp == 1) {
    zone1len = mainGameField.zone1.stock.length;
    for (i = 0; i < zone1len; i++) {
      if (mainGameField.zone1.stock[i].name == comaObj.name) {
        mainGameField.zone1.stock.splice(i, 1);
        return true;
      }
    }
  }

  return false;
}

/**
 * x,y,zを入力し駒の"moveablePoint"の配列番号を出力する
 */
function searchComaMoveNum(x,y,z) {
  //aryに駒の"moveablePoint"の値が格納されている
  //ary.lengthを変数に格納
  var ary = touchComaObject["moveablePoint"];
  var pointsArylen = ary.length;
  //aryを全て確認
  for (i = 0; i < pointsArylen; i++) {
    var point = ary[i];
    console.debug(ary[i] + " " + i);
    //x,y,zが一致したら配列の番号を返す
    if (point[0] == x && point[1] == y && point[2] == z) {
      return i;
    }
  }
  return false;
}

/**
 * 成りの判定をし、駒オブジェクトの内容を変える
 */
function changeComaObject(coma) {
  var changeComa = false;
  switch(coma.name) {
    case "歩" :
      alert("成金");
      changeComa = new narikin();
      break;

    case "桂馬" :
      alert("成金");
      changeComa = new narikin();
      break;

    case "香車" :
      alert("成金");
      changeComa = new narikin();
      break;

    case "銀" :
      alert("成金");
      changeComa = new narikin();
      break;

    case "飛車" :
      alert("竜");
      changeComa = new nari_hisha();
      break;

    case "角" :
      alert("馬");
      changeComa = new nari_kaku();
      break;
  }

  if (changeComa) {
    changeComa.camp = coma.camp;
    changeComa.preComa = coma;
    if (confirm("なりますか？")) {
      coma = changeComa;
    }
  }

  return coma;
}

/**
 * 移動できる範囲を取得する
 */
function moveableCheck(selComa) {
  //移動可能範囲配列
  var moveablePoint = new Array();
  //移動可能範囲配列のカウント変数定義
  var count = 0;
  
  //駒の移動方向定義
  var comaDirection = 0;
  selComa.coma.camp ? comaDirection = -1 : comaDirection = 1;

  //移動可能範囲判定
  if (selComa.coma.checkMoveable === undefined) {
    extCheck();
    return normal();
  } else {
    extCheck();
    return existCheck();
  }

  /**
   * 遠距離移動範囲の移動可能判定(飛車や角等)
   */
  function existCheck() {
    var checklen = selComa.coma.checkMoveable.length;

    //checkMoveableに存在する値の方向を移動可能判定
    for (i = 0; i < checklen; i++) {
      //移動方向パラメータ取得
      var relativeMovePoint = selComa.coma.checkMoveable[i];
      //判定を行う位置を確認する
      var checkPoint = new Array();
      //最初に現在地をcheckPointに入力
      checkPoint[0] = selComa.nowPoint[0];
      checkPoint[1] = selComa.nowPoint[1];
      checkPoint[2] = selComa.nowPoint[2];
      
      //移動可能判定を行う。マップ外,自駒,敵駒が見つかるまで繰り返す
      while(1) {
        //挿入用の一時的な配列を定義
        var insertArray = new Array();

        //相対値をcheckPointに加える(yの値はcamp[陣営]の値によってインクリメント・デクリメントを入れ替わる)
        checkPoint[0] += relativeMovePoint[0];
        checkPoint[1] += relativeMovePoint[1] * comaDirection;
        checkPoint[2] += relativeMovePoint[2];

        //判定位置に存在するオブジェクトを格納する変数を定義・初期化
        var movepointObj = null;

        try {
          //判定位置のオブジェクトを取得
          movepointObj = selComa.map.cell3d[checkPoint[0]][checkPoint[1]][checkPoint[2]];
          //敵・自駒判定変数を定義（初期値true）
          var campcheck = true;
          
          //駒がいる場合、敵・自駒判定。自駒の場合false
          if (movepointObj) {
            campcheck = (selComa.coma.camp != movepointObj.camp);
          }
          console.debug(movepointObj);

          //マップ外でなく自駒が存在しなかった場合、挿入用の配列に位置を入力
          if (movepointObj !== undefined && campcheck) {
            insertArray[0] = checkPoint[0];
            insertArray[1] = checkPoint[1];
            insertArray[2] = checkPoint[2];
            console.debug(insertArray);
            moveablePoint[count] = insertArray;
            insertArray = null;
            count++;
          }

          if (movepointObj !== null) {
            break;
          }

        }catch(e) {
          //alert("遠距離移動範囲判定のところでエラーがでました。");
          break;
        }

      }
    }
    return moveablePoint;
  }

  /**
   * 通常移動範囲の移動判定
   */
  function normal() {
    var pointlen = selComa.moveablePoint.length;
    var movepointObj = null;
    console.debug(selComa.moveablePoint);

    for (i = 0; i < pointlen; i++) {
      var insertArray = new Array();
      movepointObj = undefined;
      try {
        movepointObj = selComa.map.cell3d[selComa.moveablePoint[i][0]][selComa.moveablePoint[i][1]][selComa.moveablePoint[i][2]];
      }catch(e) {
        console.debug("通常移動範囲判定のところでundefinedがでました。");
      }
      console.debug(movepointObj);
      var campcheck = true;
      if (movepointObj) {
        campcheck = (selComa.coma.camp != movepointObj.camp);
      }

      if (movepointObj !== undefined && campcheck) {
        insertArray[0] = selComa.moveablePoint[i][0];
        insertArray[1] = selComa.moveablePoint[i][1];
        insertArray[2] = selComa.moveablePoint[i][2];
        console.debug(insertArray);
        moveablePoint[count] = insertArray;
        count++;
      }
    }
    return moveablePoint;
  }

  /**
   * 拡張移動範囲の移動判定
   */
  function extCheck() {
    var movepointObj = null;
    console.debug(selComa);
    if (selComa.extMoveablePoint === undefined) {
      return false;
    }

    console.debug(this);
    var extPointlen = selComa.extMoveablePoint.length;
    for (i = 0; i < extPointlen; i++) {
      var insertArray = new Array();
      movepointObj = undefined;
      try {
        movepointObj = selComa.map.cell3d[selComa.extMoveablePoint[i][0]][selComa.extMoveablePoint[i][1]][selComa.extMoveablePoint[i][2]];
      }catch(e) {
        console.debug("拡張移動範囲判定のところでエラーがでました");
      }
      console.debug(movepointObj);
      var campcheck = true;
      if (movepointObj) {
        campcheck = (selComa.coma.camp != movepointObj.camp);
      }

      if (movepointObj !== undefined && campcheck) {
        insertArray[0] = selComa.extMoveablePoint[i][0];
        insertArray[1] = selComa.extMoveablePoint[i][1];
        insertArray[2] = selComa.extMoveablePoint[i][2];
        console.debug(insertArray);
        moveablePoint[count] = insertArray;
        count++;
      } else {
        console.debug("not set "+ selComa.extMoveablePoint[i]);
      }
    }

    return true;
  }
}

function mainGameFinish(camp) {
  if (camp != 0 && camp != 1) { return false; }
  camp ? alert("後手の勝ちです") : alert("先手の勝ちです");
  turncamp = 0;
  mainGameField = null;

  var error     = new Error();
  error.name    = "FinishError";          // エラーの名前（任意）
  error.message = "Game Finish.ゲームが終わったので処理を終えます"; // エラーメッセージ
  throw error;

  return true;
}
