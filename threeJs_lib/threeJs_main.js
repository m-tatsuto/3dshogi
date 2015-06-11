var comaObjectOpacity = 1.0;
var camera, scene, renderer;
var geometry, material, mesh;
var animate_is_update = true;
var focusViewFlag = 0;

var select3DObject = null;
var moveablePosition3DObject = [];
var mapComa3DObject = [];


var cameraWidth = 630;
var cameraHeight = 630;
var radius = 2300;
var theta = 330;
var thetaRotationValue = 3.5;
var radiusMoveSpeed = 10;
var canUseWebgl = null;

init();

function init() {
  camera = new THREE.PerspectiveCamera( 40, cameraWidth / cameraHeight, 1, 10000 );
  camera.position.x = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.z = 0;
  camera.lookAt({x:0,y:0,z:0});
  camera.rotation.z = 0;

  scene = new THREE.Scene();

  // lights

  light = new THREE.DirectionalLight( 0x444444 );
  light.position.set( -450, 450, 450 );
  light.target.lookAt({x:0,y:0,z:0});
  scene.add( light );

  light = new THREE.DirectionalLight( 0x444444 );
  light.position.set( 450, -450, 450 );
  light.target.lookAt({x:0,y:0,z:0});
  scene.add( light );

  light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( -450, -450, 450 );
  light.target.lookAt({x:0,y:0,z:0});
  scene.add( light );

  light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 450, 450, 450 );
  light.target.lookAt({x:0,y:0,z:0});
  scene.add( light );

  try {
    canUseWebgl = true;
    thetaRotationValue = 1.6;
    renderer = new THREE.WebGLRenderer({antialias:0});
    renderer.setClearColor( new THREE.Color(0xeeeeee) );
  } catch (e) {
    canUseWebgl = false;
    radiusMoveSpeed = 20;
    renderer = new THREE.CanvasRenderer();
    renderer.setClearColor( new THREE.Color(0x999999) );
  }
  renderer.setSize( cameraWidth, cameraHeight );

  document.getElementById("space3d").appendChild( renderer.domElement );

  make3DshougiFrameObject();
}

var selectLineObject = [];

function addObjectSelectPosition( x, y, z ) {

  resetObjectSelect();

  var geometry   = new THREE.BoxGeometry( 100, 100, 100 );
  select3DObject = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x999900,  transparent: true, opacity: 0.4 } ) );
  select3DObject.position.x = -400 + ( x * 100 );
  select3DObject.position.y = -400 + ( y * 100 );
  select3DObject.position.z = -400 + ( z * 100 );
  scene.add( select3DObject );

  makeSelectLineObject( x, y, z );

  animate_is_update = true;
}

function resetObjectSelect() {
  if ( select3DObject ) {
    scene.remove( select3DObject );
    select3DObject = null;
  }

  if ( selectLineObject ) {
    deleteSelectLine();
    selectLineObject = [];
  }

  animate_is_update = true;
}

function addObjectMoveablePosition() {

  resetObjectMoveablePosition();
  var moveablePointArray = null;

  try {
    moveablePointArray = touchComaObject[ "moveablePoint" ];
  } catch (e) {
    return false;
  }

  var pointsArylen = moveablePointArray.length;

  //moveablePointArrayを全て確認
  for ( var mpi = 0; mpi < pointsArylen; mpi++ ) {
    var geometry = new THREE.BoxGeometry( 100, 100, 100 );
    moveablePosition3DObject[ mpi ] = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xffff00,  transparent: true, opacity: 0.6 } ) );

    var point = moveablePointArray[ mpi ];
    moveablePosition3DObject[ mpi ].position.x = -400 + ( point[0] * 100 );
    moveablePosition3DObject[ mpi ].position.y = -400 + ( point[1] * 100 );
    moveablePosition3DObject[ mpi ].position.z = -400 + ( point[2] * 100 );
    scene.add( moveablePosition3DObject[ mpi ] );
  }

  animate_is_update = true;

  return true;
}

function resetObjectMoveablePosition(){
  var loopLength = moveablePosition3DObject.length;

  for ( var mpoi = 0; mpoi < loopLength; mpoi++ ) {
    scene.remove( moveablePosition3DObject[ mpoi ] );
  }

  moveablePosition3DObject = [];
  animate_is_update = true;
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
            objectColor = 0xF596AA;
          } else if ( mapObject.camp == 1 ) {
            objectColor = 0x58B2DC;
          }

          var coma3dObject = choiceGeometry( mapObject, objectColor );
          var geometry = coma3dObject[ "geometry" ];
          var material = coma3dObject[ "material" ];

          mapComa3DObject[ numberOfMapObject ] = new THREE.Mesh( geometry, material );
          mapComa3DObject[ numberOfMapObject ].position.x = -400 + ( c3xi * 100 );
          mapComa3DObject[ numberOfMapObject ].position.y = -400 + ( c3yj * 100 );
          mapComa3DObject[ numberOfMapObject ].position.z = -400 + ( c3zk * 100 );
          scene.add( mapComa3DObject[ numberOfMapObject ] );

        } else if ( !mapObject && selectStockFlag ) {
          var geometry = new THREE.BoxGeometry( 100, 100, 100 );
          mapComa3DObject[ numberOfMapObject ] = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x00ff00,  transparent: true, opacity: 0.1 } ) );
          mapComa3DObject[ numberOfMapObject ].position.x = -400 + ( c3xi * 100 );
          mapComa3DObject[ numberOfMapObject ].position.y = -400 + ( c3yj * 100 );
          mapComa3DObject[ numberOfMapObject ].position.z = -400 + ( c3zk * 100 );
          scene.add( mapComa3DObject[ numberOfMapObject ] );
        }
      }
    }
  }

  animate_is_update = true;

}

function choiceGeometry( comaObj, objectColor ) {
  var comaGeometry = null;
  var comaMaterial = null;

  switch( comaObj.name ) {
    case "歩" :
      if ( canUseWebgl ) {
      comaGeometry = new THREE.SphereGeometry( 15, 12, 12 );
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaGeometry = new THREE.SphereGeometry( 15 );
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }
    break;

    case "桂馬" :
      if ( comaObj.camp == 0 ) {
      comaGeometry = new THREE.CylinderGeometry( 10, 20, 30, 8, 1 );
    } else if ( comaObj.camp == 1 ) {
      comaGeometry = new THREE.CylinderGeometry( 20, 10, 30, 8, 1 );
    }

    if ( canUseWebgl ) {
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }

    break;

    case "香車" :
      if ( comaObj.camp == 0 ) {
      comaGeometry = new THREE.CylinderGeometry( 0, 20, 40, 3, 1 );
    } else if ( comaObj.camp == 1 ) {
      comaGeometry = new THREE.CylinderGeometry( 20, 0, 40, 3, 1 );
    }

    if ( canUseWebgl ) {
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }

    break;

    case "銀" :
      if ( canUseWebgl ) {
      comaGeometry = new THREE.SphereGeometry( 25, 15, 13);
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaGeometry = new THREE.SphereGeometry( 40, 8, 6);
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }
    break;

    case "金" :
      if ( canUseWebgl ) {
      comaGeometry = new THREE.SphereGeometry( 35, 15, 15 );
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaGeometry = new THREE.SphereGeometry( 35, 8, 6 );
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }
    break;

    case "成金" :
      if ( canUseWebgl ) {
      comaGeometry = new THREE.SphereGeometry( 35, 15, 15 );
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaGeometry = new THREE.SphereGeometry( 35, 8, 6 );
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }
    break;

    case "飛車" :
      if ( comaObj.camp == 0 ) {
      comaGeometry = new THREE.CylinderGeometry( 0, 40, 90, 3, 1 );
    } else if ( comaObj.camp == 1 ) {
      comaGeometry = new THREE.CylinderGeometry( 40, 0, 90, 3, 1 );
    }

    if ( canUseWebgl ) {
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }
    break;

    case "竜" :
      if ( comaObj.camp == 0 ) {
      comaGeometry = new THREE.CylinderGeometry( 0, 40, 90, 5, 1 );
    } else if ( comaObj.camp == 1 ) {
      comaGeometry = new THREE.CylinderGeometry( 40, 0, 90, 5, 1 );
    }

    if ( canUseWebgl ) {
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }

    break;

    case "角" :
      if ( comaObj.camp == 0 ) {
      comaGeometry = new THREE.CylinderGeometry( 15, 30, 70, 4, 1 );
    } else if ( comaObj.camp == 1 ) {
      comaGeometry = new THREE.CylinderGeometry( 30, 15, 70, 4, 1 );
    }

    if ( canUseWebgl ) {
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }
    break;

    case "馬" :
      if ( comaObj.camp == 0 ) {
      comaGeometry = new THREE.CylinderGeometry( 15, 30, 70, 6, 1 );
    } else if ( comaObj.camp == 1 ) {
      comaGeometry = new THREE.CylinderGeometry( 30, 15, 70, 6, 1 );
    }

    if ( canUseWebgl ) {
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }

    break;

    case "玉" :
      comaGeometry = new THREE.TorusGeometry( 40, 20, 15, 30 );

    if ( canUseWebgl ) {
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }

    break;

    case "王" :
      comaGeometry = new THREE.TorusGeometry( 40, 20, 15, 30 );

    if ( canUseWebgl ) {
      comaMaterial = new THREE.MeshLambertMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity, shading: THREE.FlatShading } );
    } else {
      comaMaterial = new THREE.MeshBasicMaterial( { color: objectColor,  transparent: true, opacity: comaObjectOpacity } );
    }

    break;
  }

  var result3dComaObject = {
    "geometry" : comaGeometry,
    "material" : comaMaterial
  };

  return result3dComaObject;
}

animate();

function animate() {
  // note: three.js includes requestAnimationFrame shim
  requestAnimationFrame( animate );

  if(xcontrollerRight){
    theta += thetaRotationValue;
    cameraRotation();
    animate_is_update = true;
  }

  if(xcontrollerLeft){
    theta -= thetaRotationValue;
    if (theta <= 180 ) { theta = 543; }
    cameraRotation();
    animate_is_update = true;
  }

  if (cameraForward){
    radius -= radiusMoveSpeed;
    if ( radius < 0 ) { radius = 1; }
    cameraRotation();
    animate_is_update = true;
  }

  if (cameraBackward){
    radius += radiusMoveSpeed;
    cameraRotation();
    animate_is_update = true;
  }

  //なんか更新処理。更新した場合animate_is_update=true;
  if (animate_is_update)  {
    render();
  }

  animate_is_update = false;

}

function render() {
  renderer.render( scene, camera );
}

function cameraRotation() {
  camera.position.x = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );

  camera.lookAt({x:0,y:0,z:0});

  var rotationFlag = THREE.Math.degToRad( theta - 270 ) % ( 2 * Math.PI );

  if (camera.position.y <= 0 ) {
    camera.rotation.z = 0;
  } else {
    camera.rotation.z = Math.PI;
  }

  animate_is_update = true;
}

function focusCameraZone0() {
  theta = 270;
  cameraRotation();
  focusViewFlag = 0;
  mapControllerDisplay()
}

function focusCameraZone1() {
  theta = 450;
  cameraRotation();
  focusViewFlag = 1;
  mapControllerDisplay();
}
