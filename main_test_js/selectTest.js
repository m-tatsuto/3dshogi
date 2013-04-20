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
  alert("x="+positionX+",y="+positionY+",z="+positionZ);
  var selobj = selectComaObject(positionX,positionY,positionZ);
  var selectlen = selobj.moveablePoint.length;
  document.getElementById("selectComa").innerHTML = "selectComaField</br>";
  document.getElementById("selectComa").innerHTML += " number of moveable points = "+selectlen + "<br>";
  for(var i=0;i<selectlen;i++){
    document.getElementById("selectComa").innerHTML += selobj.moveablePoint[i] + "<br>";
  }
}
