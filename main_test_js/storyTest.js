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

