function setTestInitMapObject(){
  var testmap = new map3D();
  var testZone1 = new stockZone0();
  var testZone2 = new stockZone1();
  var selobj;

  mainGameField = new gameField(testmap,testZone1,testZone2);
  console.log(mainGameField);
}

function setTest1(){
  for(i=0;i<9;i++){
    for(j=0;j<9;j++){
      mainGameField.map.cell3d[i][6][j] = new fu(1);
    }
  }

  mainGameField.map.cell3d[1][7][1] = new hisha(1);
  mainGameField.map.cell3d[1][7][7] = new kaku(1);
  mainGameField.map.cell3d[7][7][7] = new hisha(1);
  mainGameField.map.cell3d[7][7][1] = new kaku(1);

  for(i=0;i<9;i++){
    for(j=0;j<9;j++){
      var checkx = (i==0 || i==8);
      var checkz = (j==0 || j==8);
      if(checkx || checkz){
        mainGameField.map.cell3d[i][0][j] = new kousha(0);
      }
    }
  }

  for(i=1;i<8;i++){
    for(j=1;j<8;j++){
      var checkx = (i==1 || i==7);
      var checkz = (j==1 || j==7);
      if(checkx || checkz){
        mainGameField.map.cell3d[i][0][j] = new keima(0);
      }
    }
  }

  mainGameField.map.cell3d[1][1][1] = new hisha(0);
  mainGameField.map.cell3d[1][1][7] = new kaku(0);
  mainGameField.map.cell3d[7][1][7] = new hisha(0);
  mainGameField.map.cell3d[7][1][1] = new kaku(0);
  testMapDisplay();
}

function testMapDisplay(){
  var selectObj = null;
  var count = 0;
  document.getElementById("setcoma").innerHTML = "setfield</br>";
  var tableHtmlSource = "";
  for(i=0;i<9;i++){
    tableHtmlSource += "z = " + i +" </br>";
    tableHtmlSource += "<table border='1' cellspacing='0' cellpadding='5' >\n";
    for(j=0;j<9;j++){
      tableHtmlSource += "<tr>\n";
      for(h=0;h<9;h++){
        selectObj = mainGameField.map.cell3d[h][8-j][i];
        if(selectObj !== null){
	  tableHtmlSource += " <td width='30' height='30'>" + selectObj.name.substring(0,1) + selectObj.camp + "</td>\n";
          /*
          document.getElementById("setcoma").innerHTML += "["+i+","+j+","+h+"]" + selectObj.name + selectObj.camp + " ";
	  var number = (i * 81) + (j * 9) + h;
	  if ((count % 3) == 2) {
	    document.getElementById("setcoma").innerHTML += "</br>";
	  }
	  */
          selectObj = null;
	  count++;
        } else {
	  tableHtmlSource += " <td  width='30' height='30'></td>\n";
	}
      }
      tableHtmlSource += "</tr>\n";
    }
    tableHtmlSource += "</table>\n";
  }
  document.getElementById("setcoma").innerHTML += tableHtmlSource;
  var zone0 = mainGameField.zone0;
  var zone1 = mainGameField.zone1;

  document.getElementById("zone1Coma").innerHTML = "zone0</br>";
  var zone0Len = zone0.stock.length;
  for (i = 0; i < zone0Len; i++){
    document.getElementById("zone0Coma").innerHTML += zone0.stock[i].name + zone0.stock[i].camp + "</br>";
  }

  document.getElementById("zone1Coma").innerHTML = "zone1</br>";
  var zone1Len = zone1.stock.length;
  for (i = 0; i < zone1Len; i++){
    document.getElementById("zone1Coma").innerHTML += zone1.stock[i].name + zone1.stock[i].camp + "</br>";
  }

  document.getElementById("turnDiaplay").innerHTML = "turn=" + turncamp;
}

function selAndMoveCheckTest1(){
  selobj = selectComaObject(2,2,2);
  return selobj;
}

function checkMoveAble(selobj){
  var len = selobj.moveablePoint.length;
  for(i=0 ;i < len;i++){
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

