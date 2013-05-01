function selectStockTest(camp, number) {
  resetObjectSelect();
  resetObjectMoveablePosition();
  if (turncamp != camp) {
    alert("敵駒を選択してます");
    return false;
  }
  selectStockComaObj(number);
  testMapDisplay();
  setThreeJs3dMapObject();
  return true;
}

function setStockTest(x, y, z) {
  var successFlag = setComaObjectInMap(x, y, z);
  resetObjectSelect();
  resetObjectMoveablePosition();
  testMapDisplay();
  setThreeJs3dMapObject();
  return true;
}
