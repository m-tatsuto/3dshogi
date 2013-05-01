var nowSelectPosition = new Array();

function selectPosition( spx, spy, spz ){
  var positionX = spx;
  var positionY = spy;
  var positionZ = spz;

  var successFlag = selectComaObject(positionX,positionY,positionZ);

  if ( !successFlag ) {
    touchComaObject = null;
    selectStockFlag = false;
  }

  nowSelectPosition[0] = positionX;
  nowSelectPosition[1] = positionY;
  nowSelectPosition[2] = positionZ;

  mapControllerDisplay();
}
