function movePosition(){
  var positionValue = document.getElementById("movePointValue").value;
  var positionValueLength = positionValue.length;
  var positionX = parseInt(positionValue.substring(0,1));
  var positionY = parseInt(positionValue.substring(1,2));
  var positionZ = parseInt(positionValue.substring(2,3));
  document.getElementById("movePointValue").value = "";
  document.getElementById("positionValue").value = "";
  if (isNaN(positionX)){
    return alert("xの値が半角数字じゃないです");
  }else if(isNaN(positionY)){
    return alert("yの値が半角数字じゃないです");
  }else if(isNaN(positionZ)){
    return alert("zの値が半角数字じゃないです");
  }
  alert("x="+positionX+",y="+positionY+",z="+positionZ);
  var selobj = moveComaObject(positionX,positionY,positionZ);
  testMapDisplay();

}
