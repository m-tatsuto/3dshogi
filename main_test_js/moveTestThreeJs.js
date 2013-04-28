function movePosition( mpx, mpy, mpz ){
  var positionX = mpx;
  var positionY = mpy;
  var positionZ = mpz;
  document.getElementById("positionValue").innerHTML = "";
  var selobj = moveComaObject( mpx, mpy, mpz );
  testMapDisplay();
}
