var nowSelectPosition = new Array();

function selectPosition(){
  var positionValue = document.getElementById("positionValue").value;
  var positionValueLength = positionValue.length;
  var positionX = parseInt(positionValue.substring(0,1));
  var positionY = parseInt(positionValue.substring(1,2));
  var positionZ = parseInt(positionValue.substring(2,3));

  if (isNaN(positionX)){
    return alert("xの値が半角数字じゃないです");
  }else if(isNaN(positionY)){
    return alert("yの値が半角数字じゃないです");
  }else if(isNaN(positionZ)){
    return alert("zの値が半角数字じゃないです");
  }

  var successFlag = selectComaObject(positionX,positionY,positionZ);

  if ( !successFlag ) {
    touchComaObject = null;
    selectStockFlag = false;
  }

  nowSelectPosition[0] = positionX;
  nowSelectPosition[1] = positionY;
  nowSelectPosition[2] = positionZ;

  testMapDisplay();
}
