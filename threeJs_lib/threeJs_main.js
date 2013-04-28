var AroundlineColor = 0x0000ff;
var InnerlineColor = 0x00ffff;
var camera, scene, renderer;
var geometry, material, mesh;
var lineZGeometry;
var lineZMaterial;
var lineZ;
var lineZ1Geometry, lineZ1Material, lineZ1;
var lineZ2Geometry, lineZ2Material, lineZ2;
var lineZ3Geometry, lineZ3Material, lineZ3;
var lineZ4Geometry, lineZ4Material, lineZ4;
var lineZ5Geometry, lineZ5Material, lineZ5;
var lineZ6Geometry, lineZ6Material, lineZ6;
var lineZ7Geometry, lineZ7Material, lineZ7;
var lineZ8Geometry, lineZ8Material, lineZ8;

var lineX1Geometry, lineX1Material, lineX1;
var lineX2Geometry, lineX2Material, lineX2;
var lineX3Geometry, lineX3Material, lineX3;
var lineX4Geometry, lineX4Material, lineX4;
var lineX5Geometry, lineX5Material, lineX5;
var lineX6Geometry, lineX6Material, lineX6;
var lineX7Geometry, lineX7Material, lineX7;
var lineX8Geometry, lineX8Material, lineX8;

var lineY1Geometry, lineY1Material, lineY1;
var lineY2Geometry, lineY2Material, lineY2;
var lineY3Geometry, lineY3Material, lineY3;
var lineY4Geometry, lineY4Material, lineY4;
var lineY5Geometry, lineY5Material, lineY5;
var lineY6Geometry, lineY6Material, lineY6;
var lineY7Geometry, lineY7Material, lineY7;
var lineY8Geometry, lineY8Material, lineY8;

var select3DObject = null;
var moveablePosition3DObject = [];
var mapComa3DObject = [];

init();

function init() {

	camera = new THREE.PerspectiveCamera( 100, 535 / 535, 1, 10000 );
	camera.position.x = 0;
	camera.position.y = -1000;
	camera.position.z = 0;
	camera.lookAt({x:0,y:0,z:0});
	camera.rotation.z = 0;

	scene = new THREE.Scene();

	renderer = new THREE.CanvasRenderer();
	renderer.setSize( 535, 535 );

	document.getElementById("space3d").appendChild( renderer.domElement );

	geometry = new THREE.Geometry();
	geometry.vertices.push( new THREE.Vector3( -450,  450, -450) );
	geometry.vertices.push( new THREE.Vector3( -450, -450, -450) );
	geometry.vertices.push( new THREE.Vector3(  450, -450, -450) );
	geometry.vertices.push( new THREE.Vector3(  450,  450, -450) );
	geometry.vertices.push( new THREE.Vector3( -450,  450, -450) );
	geometry.vertices.push( new THREE.Vector3( -450,  450,  450) );
	geometry.vertices.push( new THREE.Vector3( -450, -450,  450) );
	geometry.vertices.push( new THREE.Vector3(  450, -450,  450) );
	geometry.vertices.push( new THREE.Vector3(  450,  450,  450) );
	geometry.vertices.push( new THREE.Vector3( -450,  450,  450) );
	geometry.vertices.push( new THREE.Vector3( -450, -450,  450) );
	geometry.vertices.push( new THREE.Vector3( -450, -450, -450) );
	geometry.vertices.push( new THREE.Vector3(  450, -450, -450) );
	geometry.vertices.push( new THREE.Vector3(  450, -450,  450) );
	geometry.vertices.push( new THREE.Vector3(  450,  450,  450) );
	geometry.vertices.push( new THREE.Vector3(  450,  450,  -450) );
	material = new THREE.LineBasicMaterial( { color: AroundlineColor , opacity: 0.5} );
	mesh = new THREE.Line( geometry, material );
	scene.add( mesh );

	lineZ1Geometry = new THREE.Geometry();
	lineZ1Geometry.vertices.push( new THREE.Vector3( -450,  450, -350) );
	lineZ1Geometry.vertices.push( new THREE.Vector3( -450, -450, -350) );
	lineZ1Geometry.vertices.push( new THREE.Vector3(  450, -450, -350) );
	lineZ1Geometry.vertices.push( new THREE.Vector3(  450,  450, -350) );
	lineZ1Geometry.vertices.push( new THREE.Vector3( -450,  450, -350) );
	lineZ1Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineZ1 = new THREE.Line( lineZ1Geometry, lineZ1Material );
	scene.add( lineZ1 );

	lineZ2Geometry = new THREE.Geometry();
	lineZ2Geometry.vertices.push( new THREE.Vector3( -450,  450, -250) );
	lineZ2Geometry.vertices.push( new THREE.Vector3( -450, -450, -250) );
	lineZ2Geometry.vertices.push( new THREE.Vector3(  450, -450, -250) );
	lineZ2Geometry.vertices.push( new THREE.Vector3(  450,  450, -250) );
	lineZ2Geometry.vertices.push( new THREE.Vector3( -450,  450, -250) );
	lineZ2Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineZ2 = new THREE.Line( lineZ2Geometry, lineZ2Material );
	scene.add( lineZ2 );

	lineZ3Geometry = new THREE.Geometry();
	lineZ3Geometry.vertices.push( new THREE.Vector3( -450,  450, -150) );
	lineZ3Geometry.vertices.push( new THREE.Vector3( -450, -450, -150) );
	lineZ3Geometry.vertices.push( new THREE.Vector3(  450, -450, -150) );
	lineZ3Geometry.vertices.push( new THREE.Vector3(  450,  450, -150) );
	lineZ3Geometry.vertices.push( new THREE.Vector3( -450,  450, -150) );
	lineZ3Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineZ3 = new THREE.Line( lineZ3Geometry, lineZ3Material );
	scene.add( lineZ3 );

	lineZ4Geometry = new THREE.Geometry();
	lineZ4Geometry.vertices.push( new THREE.Vector3( -450,  450, -50) );
	lineZ4Geometry.vertices.push( new THREE.Vector3( -450, -450, -50) );
	lineZ4Geometry.vertices.push( new THREE.Vector3(  450, -450, -50) );
	lineZ4Geometry.vertices.push( new THREE.Vector3(  450,  450, -50) );
	lineZ4Geometry.vertices.push( new THREE.Vector3( -450,  450, -50) );
	lineZ4Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineZ4 = new THREE.Line( lineZ4Geometry, lineZ4Material );
	scene.add( lineZ4 );

	lineZ5Geometry = new THREE.Geometry();
	lineZ5Geometry.vertices.push( new THREE.Vector3( -450,  450, 50) );
	lineZ5Geometry.vertices.push( new THREE.Vector3( -450, -450, 50) );
	lineZ5Geometry.vertices.push( new THREE.Vector3(  450, -450, 50) );
	lineZ5Geometry.vertices.push( new THREE.Vector3(  450,  450, 50) );
	lineZ5Geometry.vertices.push( new THREE.Vector3( -450,  450, 50) );
	lineZ5Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineZ5 = new THREE.Line( lineZ5Geometry, lineZ5Material );
	scene.add( lineZ5 );

	lineZ6Geometry = new THREE.Geometry();
	lineZ6Geometry.vertices.push( new THREE.Vector3( -450,  450, 150) );
	lineZ6Geometry.vertices.push( new THREE.Vector3( -450, -450, 150) );
	lineZ6Geometry.vertices.push( new THREE.Vector3(  450, -450, 150) );
	lineZ6Geometry.vertices.push( new THREE.Vector3(  450,  450, 150) );
	lineZ6Geometry.vertices.push( new THREE.Vector3( -450,  450, 150) );
	lineZ6Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineZ6 = new THREE.Line( lineZ6Geometry, lineZ6Material );
	scene.add( lineZ6 );

	lineZ7Geometry = new THREE.Geometry();
	lineZ7Geometry.vertices.push( new THREE.Vector3( -450,  450, 250) );
	lineZ7Geometry.vertices.push( new THREE.Vector3( -450, -450, 250) );
	lineZ7Geometry.vertices.push( new THREE.Vector3(  450, -450, 250) );
	lineZ7Geometry.vertices.push( new THREE.Vector3(  450,  450, 250) );
	lineZ7Geometry.vertices.push( new THREE.Vector3( -450,  450, 250) );
	lineZ7Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineZ7 = new THREE.Line( lineZ7Geometry, lineZ7Material );
	scene.add( lineZ7 );

	lineZ8Geometry = new THREE.Geometry();
	lineZ8Geometry.vertices.push( new THREE.Vector3( -450,  450, 350) );
	lineZ8Geometry.vertices.push( new THREE.Vector3( -450, -450, 350) );
	lineZ8Geometry.vertices.push( new THREE.Vector3(  450, -450, 350) );
	lineZ8Geometry.vertices.push( new THREE.Vector3(  450,  450, 350) );
	lineZ8Geometry.vertices.push( new THREE.Vector3( -450,  450, 350) );
	lineZ8Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineZ8 = new THREE.Line( lineZ8Geometry, lineZ8Material );
	scene.add( lineZ8 );

	lineX1Geometry = new THREE.Geometry();
	lineX1Geometry.vertices.push( new THREE.Vector3( -350,  450, -450) );
	lineX1Geometry.vertices.push( new THREE.Vector3( -350, -450, -450) );
	lineX1Geometry.vertices.push( new THREE.Vector3( -350, -450,  450) );
	lineX1Geometry.vertices.push( new THREE.Vector3( -350,  450,  450) );
	lineX1Geometry.vertices.push( new THREE.Vector3( -350,  450, -450) );
	lineX1Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineX1 = new THREE.Line( lineX1Geometry, lineX1Material );
	scene.add( lineX1 );

	lineX2Geometry = new THREE.Geometry();
	lineX2Geometry.vertices.push( new THREE.Vector3( -250,  450, -450) );
	lineX2Geometry.vertices.push( new THREE.Vector3( -250, -450, -450) );
	lineX2Geometry.vertices.push( new THREE.Vector3( -250, -450,  450) );
	lineX2Geometry.vertices.push( new THREE.Vector3( -250,  450,  450) );
	lineX2Geometry.vertices.push( new THREE.Vector3( -250,  450, -450) );
	lineX2Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineX2 = new THREE.Line( lineX2Geometry, lineX2Material );
	scene.add( lineX2 );

	lineX3Geometry = new THREE.Geometry();
	lineX3Geometry.vertices.push( new THREE.Vector3( -150,  450, -450) );
	lineX3Geometry.vertices.push( new THREE.Vector3( -150, -450, -450) );
	lineX3Geometry.vertices.push( new THREE.Vector3( -150, -450,  450) );
	lineX3Geometry.vertices.push( new THREE.Vector3( -150,  450,  450) );
	lineX3Geometry.vertices.push( new THREE.Vector3( -150,  450, -450) );
	lineX3Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineX3 = new THREE.Line( lineX3Geometry, lineX3Material );
	scene.add( lineX3 );

	lineX4Geometry = new THREE.Geometry();
	lineX4Geometry.vertices.push( new THREE.Vector3( -50,  450, -450) );
	lineX4Geometry.vertices.push( new THREE.Vector3( -50, -450, -450) );
	lineX4Geometry.vertices.push( new THREE.Vector3( -50, -450,  450) );
	lineX4Geometry.vertices.push( new THREE.Vector3( -50,  450,  450) );
	lineX4Geometry.vertices.push( new THREE.Vector3( -50,  450, -450) );
	lineX4Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineX4 = new THREE.Line( lineX4Geometry, lineX4Material );
	scene.add( lineX4 );

	lineX5Geometry = new THREE.Geometry();
	lineX5Geometry.vertices.push( new THREE.Vector3( 50,  450, -450) );
	lineX5Geometry.vertices.push( new THREE.Vector3( 50, -450, -450) );
	lineX5Geometry.vertices.push( new THREE.Vector3( 50, -450,  450) );
	lineX5Geometry.vertices.push( new THREE.Vector3( 50,  450,  450) );
	lineX5Geometry.vertices.push( new THREE.Vector3( 50,  450, -450) );
	lineX5Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineX5 = new THREE.Line( lineX5Geometry, lineX5Material );
	scene.add( lineX5 );

	lineX6Geometry = new THREE.Geometry();
	lineX6Geometry.vertices.push( new THREE.Vector3( 150,  450, -450) );
	lineX6Geometry.vertices.push( new THREE.Vector3( 150, -450, -450) );
	lineX6Geometry.vertices.push( new THREE.Vector3( 150, -450,  450) );
	lineX6Geometry.vertices.push( new THREE.Vector3( 150,  450,  450) );
	lineX6Geometry.vertices.push( new THREE.Vector3( 150,  450, -450) );
	lineX6Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineX6 = new THREE.Line( lineX6Geometry, lineX6Material );
	scene.add( lineX6 );

	lineX7Geometry = new THREE.Geometry();
	lineX7Geometry.vertices.push( new THREE.Vector3( 250,  450, -450) );
	lineX7Geometry.vertices.push( new THREE.Vector3( 250, -450, -450) );
	lineX7Geometry.vertices.push( new THREE.Vector3( 250, -450,  450) );
	lineX7Geometry.vertices.push( new THREE.Vector3( 250,  450,  450) );
	lineX7Geometry.vertices.push( new THREE.Vector3( 250,  450, -450) );
	lineX7Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineX7 = new THREE.Line( lineX7Geometry, lineX7Material );
	scene.add( lineX7 );

	lineX8Geometry = new THREE.Geometry();
	lineX8Geometry.vertices.push( new THREE.Vector3( 350,  450, -450) );
	lineX8Geometry.vertices.push( new THREE.Vector3( 350, -450, -450) );
	lineX8Geometry.vertices.push( new THREE.Vector3( 350, -450,  450) );
	lineX8Geometry.vertices.push( new THREE.Vector3( 350,  450,  450) );
	lineX8Geometry.vertices.push( new THREE.Vector3( 350,  450, -450) );
	lineX8Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineX8 = new THREE.Line( lineX8Geometry, lineX8Material );
	scene.add( lineX8 );

		lineY1Geometry = new THREE.Geometry();
	lineY1Geometry.vertices.push( new THREE.Vector3(  450, -350, -450) );
	lineY1Geometry.vertices.push( new THREE.Vector3( -450, -350, -450) );
	lineY1Geometry.vertices.push( new THREE.Vector3( -450, -350,  450) );
	lineY1Geometry.vertices.push( new THREE.Vector3(  450, -350,  450) );
	lineY1Geometry.vertices.push( new THREE.Vector3(  450, -350, -450) );
	lineY1Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineY1 = new THREE.Line( lineY1Geometry, lineY1Material );
	scene.add( lineY1 );

	lineY2Geometry = new THREE.Geometry();
	lineY2Geometry.vertices.push( new THREE.Vector3(  450, -250, -450) );
	lineY2Geometry.vertices.push( new THREE.Vector3( -450, -250, -450) );
	lineY2Geometry.vertices.push( new THREE.Vector3( -450, -250,  450) );
	lineY2Geometry.vertices.push( new THREE.Vector3(  450, -250,  450) );
	lineY2Geometry.vertices.push( new THREE.Vector3(  450, -250, -450) );
	lineY2Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineY2 = new THREE.Line( lineY2Geometry, lineY2Material );
	scene.add( lineY2 );

	lineY3Geometry = new THREE.Geometry();
	lineY3Geometry.vertices.push( new THREE.Vector3(  450, -150, -450) );
	lineY3Geometry.vertices.push( new THREE.Vector3( -450, -150, -450) );
	lineY3Geometry.vertices.push( new THREE.Vector3( -450, -150,  450) );
	lineY3Geometry.vertices.push( new THREE.Vector3(  450, -150,  450) );
	lineY3Geometry.vertices.push( new THREE.Vector3(  450, -150, -450) );
	lineY3Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineY3 = new THREE.Line( lineY3Geometry, lineY3Material );
	scene.add( lineY3 );

	lineY4Geometry = new THREE.Geometry();
	lineY4Geometry.vertices.push( new THREE.Vector3(  450, -50, -450) );
	lineY4Geometry.vertices.push( new THREE.Vector3( -450, -50, -450) );
	lineY4Geometry.vertices.push( new THREE.Vector3( -450, -50,  450) );
	lineY4Geometry.vertices.push( new THREE.Vector3(  450, -50,  450) );
	lineY4Geometry.vertices.push( new THREE.Vector3(  450, -50, -450) );
	lineY4Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineY4 = new THREE.Line( lineY4Geometry, lineY4Material );
	scene.add( lineY4 );

	lineY5Geometry = new THREE.Geometry();
	lineY5Geometry.vertices.push( new THREE.Vector3(  450, 50, -450) );
	lineY5Geometry.vertices.push( new THREE.Vector3( -450, 50, -450) );
	lineY5Geometry.vertices.push( new THREE.Vector3( -450, 50,  450) );
	lineY5Geometry.vertices.push( new THREE.Vector3(  450, 50,  450) );
	lineY5Geometry.vertices.push( new THREE.Vector3(  450, 50, -450) );
	lineY5Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineY5 = new THREE.Line( lineY5Geometry, lineY5Material );
	scene.add( lineY5 );

	lineY6Geometry = new THREE.Geometry();
	lineY6Geometry.vertices.push( new THREE.Vector3(  450, 150, -450) );
	lineY6Geometry.vertices.push( new THREE.Vector3( -450, 150, -450) );
	lineY6Geometry.vertices.push( new THREE.Vector3( -450, 150,  450) );
	lineY6Geometry.vertices.push( new THREE.Vector3(  450, 150,  450) );
	lineY6Geometry.vertices.push( new THREE.Vector3(  450, 150, -450) );
	lineY6Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineY6 = new THREE.Line( lineY6Geometry, lineY6Material );
	scene.add( lineY6 );

	lineY7Geometry = new THREE.Geometry();
	lineY7Geometry.vertices.push( new THREE.Vector3(  450, 250, -450) );
	lineY7Geometry.vertices.push( new THREE.Vector3( -450, 250, -450) );
	lineY7Geometry.vertices.push( new THREE.Vector3( -450, 250,  450) );
	lineY7Geometry.vertices.push( new THREE.Vector3(  450, 250,  450) );
	lineY7Geometry.vertices.push( new THREE.Vector3(  450, 250, -450) );
	lineY7Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineY7 = new THREE.Line( lineY7Geometry, lineY7Material );
	scene.add( lineY7 );

	lineY8Geometry = new THREE.Geometry();
	lineY8Geometry.vertices.push( new THREE.Vector3(  450, 350, -450) );
	lineY8Geometry.vertices.push( new THREE.Vector3( -450, 350, -450) );
	lineY8Geometry.vertices.push( new THREE.Vector3( -450, 350,  450) );
	lineY8Geometry.vertices.push( new THREE.Vector3(  450, 350,  450) );
	lineY8Geometry.vertices.push( new THREE.Vector3(  450, 350, -450) );
	lineY8Material = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
	lineY8 = new THREE.Line( lineY8Geometry, lineY8Material );
	scene.add( lineY8 );

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
			comaGeomety = new THREE.CubeGeometry( 50, 50, 50 );
			break;

		case "銀" :
			comaGeomety = new THREE.CubeGeometry( 50, 50, 50 );
			break;

		case "金" :
			comaGeomety = new THREE.CubeGeometry( 50, 50, 50 );
			break;

		case "成金" :
			comaGeomety = new THREE.CubeGeometry( 50, 50, 50 );
			break;

		case "飛車" :
			comaGeomety = new THREE.CubeGeometry( 50, 50, 50 );
			break;

		case "竜" :
			comaGeomety = new THREE.CubeGeometry( 50, 50, 50 );
			break;

		case "角" :
			comaGeomety = new THREE.CubeGeometry( 50, 50, 50 );
			break;

		case "馬" :
			comaGeomety = new THREE.CubeGeometry( 50, 50, 50 );
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
		console.debug(theta);
		if (theta <= 180 ) { theta = 540; }
		cameraRotation();
	}

	if (cameraForward){
		radius -= 3;
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

	if (rotationFlag < ( Math.PI / 2 ) ) {
		camera.rotation.z = 0;
	} else if ( ( rotationFlag >= ( Math.PI / 2 ) ) && ( rotationFlag < ( Math.PI * 1.5 ) ) ){
		camera.rotation.z = Math.PI;
	} else {
		camera.rotation.z = 0;
	}
	console.debug(rotationFlag);
}

function focusCameraZone0() {
	theta = 270;
	cameraRotation();
}

function focusCameraZone1() {
	theta = 450;
	cameraRotation();
}
