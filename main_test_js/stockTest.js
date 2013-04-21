function selectStockTest(camp, number) {
  if (turncamp != camp) {
    alert("敵駒を選択してます");
    return false;
  }
  selectStockComaObj(number);
  testMapDisplay();
  return true;
}

function setStockTest(x, y, z) {
  setComaObjectInMap(x, y, z);
  testMapDisplay();
  return true;
}
