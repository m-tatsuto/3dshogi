/**
 * テスト用マップ描画
 */
function testMapDisplay(){
  var selectObj = null;
  var count = 0;
  document.getElementById("setcoma").innerHTML = "setfield</br>";
  var tableHtmlSource = "";
  for(var i = 0; i < 9; i++){
    tableHtmlSource += "z = " + i +" </br>";
    tableHtmlSource += "<table border='1' cellspacing='0' cellpadding='5' >\n";
    for(var j = 0; j < 9; j++){
      tableHtmlSource += "<tr>\n";
      for(var h = 0; h < 9; h++){
        var positionX = h;
        var positionY = 8-j;
        var positionZ = i;
        selectObj = mainGameField.map.cell3d[positionX][positionY][positionZ];

        var selectDomComaObjectParam = positionX + ',' + positionY + ',' + positionZ;
        var clickfunctionString = "selectDomComaObject(" + selectDomComaObjectParam + ")";
        var moveableColor = "";
        if (touchComaObject && !selectStockFlag) {
          //console.debug(positionX,positionY,positionZ);
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
          tableHtmlSource += " <td width='30' height='30' " + moveableColor + " onclick='" + clickfunctionString + "'>" + selectObj.name.substring(0,1) + selectObj.camp + "</td>\n";
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
  }

  document.getElementById("setcoma").innerHTML += tableHtmlSource;

  var zone0 = mainGameField.zone0;
  var zone1 = mainGameField.zone1;

  document.getElementById("zone0Coma").innerHTML = "zone0 </br>";
  var zone0Len = zone0.stock.length;
  for (var i = 0; i < zone0Len; i++){
    var functionString = "selectStockTest(0," + i + ")";
    document.getElementById("zone0Coma").innerHTML += "<button onclick='" + functionString + "'>" + zone0.stock[i].name + zone0.stock[i].camp + "</button></br>";
  }

  document.getElementById("zone1Coma").innerHTML = "zone1 </br>";
  var zone1Len = zone1.stock.length;
  for (var i = 0; i < zone1Len; i++){
    var functionString = "selectStockTest(1," + i + ")";
    document.getElementById("zone1Coma").innerHTML += "<button onclick='" + functionString + "'>" + zone1.stock[i].name + zone1.stock[i].camp + "</button></br>";
  }

  document.getElementById("turnDiaplay").innerHTML = "turn=" + turncamp;
}

function selectDomComaObject(x, y, z) {
  //alert("select " + x + "" + y + "" + z);
  document.getElementById("positionValue").value = x + "" + y + "" + z;
  selectPosition();
}

function moveDomComaObject(x, y, z) {
  document.getElementById("movePointValue").value = x + "" + y + "" + z;
  if (confirm(x + "" + y + "" + z + "に移動しますか？")) {
    movePosition();
  }
}

function setDomStockComaObject(x, y, z) {
  if (confirm(x + "" + y + "" + z + "に置きますか？")) {
	  setStockTest(x, y, z);
  }
}

function selAndMoveCheckTest1(){
  selobj = selectComaObject(2,2,2);
  return selobj;
}

function checkMoveAble(selobj){
  var len = selobj.moveablePoint.length;
  for(var i=0 ;i < len;i++){
    alert(selobj.moveablePoint[i][0]);
    alert(selobj.moveablePoint[i][1]);
    alert(selobj.moveablePoint[i][2]);
  }
}


function storytest1(){
  selectComaObject(1,1,1);
  moveComaObject(1,6,1);
  selectComaObject(1,6,2);
  moveComaObject(1,6,1);
  selectStockComaObj(0);
  setComaObjectInMap(1,5,1);
  selectStockComaObj(0);
  setComaObjectInMap(1,4,1);

  testMapDisplay();
  console.debug(mainGameField);
}


function startTestMapDisplay(){
  setTimeout(function(){
    console.debug("startTestMapDisplay");
    if (mainGameField) {
      testMapDisplay();
    }
  },1000);
}

function storytest2(){
  selectComaObject(1,2,1);
  moveComaObject(1,3,1);
  selectComaObject(4,6,4);
  moveComaObject(4,5,4);
  selectComaObject(1,3,1);
  moveComaObject(1,3,2);
  selectComaObject(4,5,4);
  moveComaObject(4,5,3);
  selectComaObject(1,1,1);
  moveComaObject(1,6,1);

  testMapDisplay();
  console.debug(mainGameField);
}

function storytest3(){
  selectComaObject(1,2,1);
  moveComaObject(1,3,1);
  selectComaObject(4,6,4);
  moveComaObject(4,5,4);
  selectComaObject(1,3,1);
  moveComaObject(1,3,2);
  selectComaObject(4,5,4);
  moveComaObject(4,5,3);
  selectComaObject(1,1,1);
  moveComaObject(1,4,1);
  turncamp = 0;
  selectComaObject(1,4,1);
  moveComaObject(4,4,1);
  turncamp = 0;
  selectComaObject(4,4,1);
  moveComaObject(4,4,4);
  turncamp = 0;
  selectComaObject(4,4,4);
  moveComaObject(4,8,4);

  testMapDisplay();
  console.debug(mainGameField);
}

