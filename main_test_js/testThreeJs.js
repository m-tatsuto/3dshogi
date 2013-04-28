/**
 * テスト用マップ描画
 */
function testMapDisplay(){
  var selectObj = null;
  var count = 0;

  document.getElementById("setcoma").innerHTML = "空盤</br>";

  var tableHtmlSource = "";

  for(var i = 0; i < 9; i++){
    tableHtmlSource = "";
    tableHtmlSource += "<table border='1' cellspacing='0' cellpadding='5' >\n";
    tableHtmlSource += "<tr><th colspan='9'>" + (8 - i) +"層 </th></tr>";

    for(var j = 0; j < 9; j++){
      tableHtmlSource += "<tr>\n";

      for(var h = 0; h < 9; h++){
        var positionX = h;
        //var positionY = turncamp ? j : (8 - j);
        var positionY = 8 - j;
        var positionZ = 8 - i;
        selectObj = mainGameField.map.cell3d[positionX][positionY][positionZ];

        var selectDomComaObjectParam = positionX + ',' + positionY + ',' + positionZ;
        var clickfunctionString = "selectDomComaObject(" + selectDomComaObjectParam + ")";
        var moveableColor = "";
        if (touchComaObject && !selectStockFlag) {
          var moveNum = searchComaMoveNum(positionX, positionY, positionZ);

          if (moveNum !== false) {
            moveableColor = "bgcolor='#ffff00'";
            clickfunctionString = "moveDomComaObject(" + selectDomComaObjectParam + ")";
          }

          if ((nowSelectPosition[0] == positionX) && (nowSelectPosition[1] == positionY) && (nowSelectPosition[2] == positionZ)) {
            moveableColor = "bgcolor='#999900'";
          }
        }


        if(selectObj !== null){
	  if (selectObj.camp == 0) {	
          tableHtmlSource += " <td width='30' height='30' " + moveableColor + " onclick='" + clickfunctionString + "' class='sentecoma'>" + selectObj.name.substring(0,1) + selectObj.camp + "</td>\n";
	  } else if (selectObj.camp == 1) {
          tableHtmlSource += " <td width='30' height='30' " + moveableColor + " onclick='" + clickfunctionString + "' class='gotecoma'>" + selectObj.name.substring(0,1) + selectObj.camp + "</td>\n";
	  }
          selectObj = null;
        } else {
          if(selectStockFlag) {
            moveableColor = "bgcolor='#00ff00'";
            clickfunctionString = "setDomStockComaObject(" + selectDomComaObjectParam + ")";
          }

          tableHtmlSource += " <td  width='30' height='30' " + moveableColor + " onclick='" + clickfunctionString + "'></td>\n";
        }
      }
      tableHtmlSource += "</tr>\n";
    }
    tableHtmlSource += "</table>\n";
    document.getElementById("setcoma").innerHTML += tableHtmlSource + "</br>";
  }

  var zone0 = mainGameField.zone0;
  var zone1 = mainGameField.zone1;

  document.getElementById("zone0Coma").innerHTML = "先手持駒 </br>";

  var zone0Len = zone0.stock.length;
  for (var i = 0; i < zone0Len; i++){
    var functionString = "selectStockTest(0," + i + ")";
    document.getElementById("zone0Coma").innerHTML += "<button onclick='" + functionString + "'>" + zone0.stock[i].name + "</button></br>";
  }

  document.getElementById("zone1Coma").innerHTML = "後手持駒 </br>";

  var zone1Len = zone1.stock.length;
  for (var i = 0; i < zone1Len; i++){
    var functionString = "selectStockTest(1," + i + ")";
    document.getElementById("zone1Coma").innerHTML += "<button onclick='" + functionString + "'>" + zone1.stock[i].name + "</button></br>";
  }

  var turnString = "";
  if (turncamp == 0) {
    turnString = "先手";
  } else if (turncamp == 1) {
    turnString = "後手";
  }

  document.getElementById("turnDiplay").innerHTML = turnString;
  return true;
}

function selectDomComaObject(x, y, z) {
  addObjectSelectPosition( x, y, z );	
  document.getElementById("positionValue").innerHTML = x + "" + y + "" + z;
  selectPosition( x, y, z );
  addObjectMoveablePosition();
  setThreeJs3dMapObject();
}

/**
 * 選択した駒を動かす
 */
function moveDomComaObject(x, y, z) {
  if (confirm(x + "" + y + "" + z + "に移動しますか？")) {
    movePosition( x, y, z );
  }
  resetObjectSelect();	
  resetObjectMoveablePosition();
  setThreeJs3dMapObject();
}

/**
 * 選択した駒をMapにセットする
 */
function setDomStockComaObject(x, y, z) {
  if (confirm(x + "" + y + "" + z + "に置きますか？")) {
    setStockTest(x, y, z);
  }
}

window.addEventListener("DOMContentLoaded", gameStartTest, false);
