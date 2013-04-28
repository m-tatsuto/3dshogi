var AroundlineColor = 0x0000ff;
var InnerlineColor = 0x00ffff;
var camera, scene, renderer;
var geometry, material, mesh;

var select3DObject = null;
var moveablePosition3DObject = [];
var mapComa3DObject = [];

init();

function init() {
  camera = new THREE.PerspectiveCamera( 90, 535 / 535, 1, 10000 );
  camera.position.x = 0;
  camera.position.y = -1000;
  camera.position.z = 0;
  camera.lookAt({x:0,y:0,z:0});
  camera.rotation.z = 0;

  scene = new THREE.Scene();

  renderer = new THREE.CanvasRenderer();
  renderer.setSize( 535, 535 );

  document.getElementById("space3d").appendChild( renderer.domElement );

  make3DshougiFrameObject();
}

function addObjectSelectPosition( x, y, z ) {

  resetObjectSelect();

  var geometry = new THREE.CubeGeometry( 100, 100, 100 );
  select3DObject = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x999900, opacity: 0.7 } ) );
  select3DObject.position.x = -400 + ( x * 100 );
  select3DObject.position.y = -400 + ( y * 100 );
  select3DObject.position.z = -400 + ( z * 100 );
  scene.add( select3DObject );
}

function resetObjectSelect() {
  if ( select3DObject ) {
    scene.remove( select3DObject );
    select3DObject = null;
  }
}

function addObjectMoveablePosition() {

  resetObjectMoveablePosition();

  var moveablePointArray = touchComaObject[ "moveablePoint" ];
  var pointsArylen = moveablePointArray.length;

  //moveablePointArrayを全て確認
  for ( var mpi = 0; mpi < pointsArylen; mpi++ ) {
    var geometry = new THREE.CubeGeometry( 100, 100, 100 );
    moveablePosition3DObject[ mpi ] = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0.7 } ) );

    var point = moveablePointArray[ mpi ];
    moveablePosition3DObject[ mpi ].position.x = -400 + ( point[0] * 100 );
    moveablePosition3DObject[ mpi ].position.y = -400 + ( point[1] * 100 );
    moveablePosition3DObject[ mpi ].position.z = -400 + ( point[2] * 100 );
    scene.add( moveablePosition3DObject[ mpi ] );
  }
}

function resetObjectMoveablePosition(){
  var loopLength = moveablePosition3DObject.length;

  for ( var mpoi = 0; mpoi < loopLength; mpoi++ ) {
    scene.remove( moveablePosition3DObject[ mpoi ] );
  }

  moveablePosition3DObject = [];
}

function setThreeJs3dMapObject() {

  for ( var c3xi = 0; c3xi < 9; c3xi++ ) {
    for ( var c3yj = 0; c3yj < 9; c3yj++ ) {
      for ( var c3zk = 0; c3zk < 9; c3zk++ ) {
        var numberOfMapObject = (c3xi * 81) + (c3yj * 9) + c3zk;

        if ( mapComa3DObject[ numberOfMapObject ] ) {
          scene.remove( mapComa3DObject[ numberOfMapObject ] );
        }

        var mapObject = mainGameField.map.cell3d[ c3xi ][ c3yj ][ c3zk ];

        if ( mapObject ) {

          var objectColor = null;

          if ( mapObject.camp == 0 ) {
            objectColor = 0xff0000;
          } else if ( mapObject.camp == 1 ) {
            objectColor = 0x0000ff;
          }

          var geometry = choiceGeometry( mapObject );
          //var geometry = new THREE.SphereGeometry( 30 );
          mapComa3DObject[ numberOfMapObject ] = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: objectColor, opacity: 0.7 } ) );
          mapComa3DObject[ numberOfMapObject ].position.x = -400 + ( c3xi * 100 );
          mapComa3DObject[ numberOfMapObject ].position.y = -400 + ( c3yj * 100 );
          mapComa3DObject[ numberOfMapObject ].position.z = -400 + ( c3zk * 100 );
          scene.add( mapComa3DObject[ numberOfMapObject ] );

        } else if ( !mapObject && selectStockFlag ) {
          var geometry = new THREE.CubeGeometry( 100, 100, 100 );
          mapComa3DObject[ numberOfMapObject ] = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x00ff00, opacity: 0.1 } ) );
          mapComa3DObject[ numberOfMapObject ].position.x = -400 + ( c3xi * 100 );
          mapComa3DObject[ numberOfMapObject ].position.y = -400 + ( c3yj * 100 );
          mapComa3DObject[ numberOfMapObject ].position.z = -400 + ( c3zk * 100 );
          scene.add( mapComa3DObject[ numberOfMapObject ] );
        }
      }
    }
  }

}

function choiceGeometry( comaObj ) {
  var comaGeomety = null;

  switch( comaObj.name ) {
    case "歩" :
      comaGeomety = new THREE.CubeGeometry( 30, 30, 30 );
      break;

    case "桂馬" :
      comaGeomety = new THREE.CubeGeometry( 50, 50, 50 );
      break;

    case "香車" :
      comaGeomety = new THREE.CubeGeometry( 40, 40, 40 );
      break;

    case "銀" :
      comaGeomety = new THREE.SphereGeometry( 30 );
      break;

    case "金" :
      comaGeomety = new THREE.SphereGeometry( 35 );
      break;

    case "成金" :
      comaGeomety = new THREE.SphereGeometry( 40 );
      break;

    case "飛車" :
      comaGeomety = new THREE.CubeGeometry( 70, 70, 70 );
      break;

    case "竜" :
      comaGeomety = new THREE.CubeGeometry( 70, 70, 70 );
      break;

    case "角" :
      comaGeomety = new THREE.CubeGeometry( 70, 70, 70 );
      break;

    case "馬" :
      comaGeomety = new THREE.CubeGeometry( 70, 70, 70 );
      break;

    case "玉" :
      comaGeomety = new THREE.SphereGeometry( 50 );
      break;

    case "王" :
      comaGeomety = new THREE.SphereGeometry( 50 );
      break;
  }
  return comaGeomety;
}

animate();

var radius = 1000;
var theta = 270;

function animate() {
  // note: three.js includes requestAnimationFrame shim
  requestAnimationFrame( animate );
  if(xcontroller){
    theta += 1;
    cameraRotation();
  }

  if(xcontrollerRight){
    theta += 1;
    cameraRotation();
  }

  if(xcontrollerLeft){
    theta -= 1;
    if (theta <= 180 ) { theta = 540; }
    cameraRotation();
  }

  if (cameraForward){
    radius -= 3;
    if ( radius < 0 ) { radius = 1; }
    cameraRotation();
  }
  if (cameraBackward){
    radius += 3;
    cameraRotation();
  }

  renderer.render( scene, camera );
}

function cameraRotation() {
  camera.position.x = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.lookAt({x:0,y:0,z:0});

  var rotationFlag = THREE.Math.degToRad( theta - 270 ) % ( 2 * Math.PI );

  //console.debug( camera.position.y );

  if (camera.position.y <= 0 ) {
    camera.rotation.z = 0;
  } else {
    camera.rotation.z = Math.PI;
  }
}

function focusCameraZone0() {
  theta = 270;
  cameraRotation();
}

function focusCameraZone1() {
  theta = 450;
  cameraRotation();
}
