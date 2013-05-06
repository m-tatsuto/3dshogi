var threeJs3DshougiFrameLineX = [];
var threeJs3DshougiFrameLineY = [];
var threeJs3DshougiFrameLineZ = [];

var AroundlineColor = 0x0000ff;
var InnerlineColor = 0x00ffff;

function make3DshougiFrameObject() {
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
	material = new THREE.LineBasicMaterial( { color: AroundlineColor ,  transparent: true, opacity: 0.5} );
	mesh = new THREE.Line( geometry, material );
	scene.add( mesh );

	/*
	for ( var lxi = 0; lxi < 8; lxi++ ) {
		var threeJs3DshougiFrameLineXGeometry = null;
		var threeJs3DshougiFrameLineXMaterial = null;
		threeJs3DshougiFrameLineXGeometry = new THREE.Geometry();
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )),  450, -450 ) );
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )), -450, -450 ) );
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )), -450,  450 ) );
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )),  450,  450 ) );
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )),  450, -450 ) );
		threeJs3DshougiFrameLineXMaterial = new THREE.LineBasicMaterial( { color: InnerlineColor ,  transparent: true, opacity: 0.2} );
		threeJs3DshougiFrameLineX[ lxi ] = new THREE.Line( threeJs3DshougiFrameLineXGeometry, threeJs3DshougiFrameLineXMaterial );
		scene.add( threeJs3DshougiFrameLineX[ lxi ] );
	}

	for ( var lyi = 0; lyi < 8; lyi++ ) {
		var threeJs3DshougiFrameLineYGeometry = null;
		var threeJs3DshougiFrameLineYMaterial = null;
		threeJs3DshougiFrameLineYGeometry = new THREE.Geometry();
		threeJs3DshougiFrameLineYGeometry.vertices.push( new THREE.Vector3(   450, (-350 + ( 100 * lyi )), -450 ) );
		threeJs3DshougiFrameLineYGeometry.vertices.push( new THREE.Vector3(  -450, (-350 + ( 100 * lyi )), -450 ) );
		threeJs3DshougiFrameLineYGeometry.vertices.push( new THREE.Vector3(  -450, (-350 + ( 100 * lyi )),  450 ) );
		threeJs3DshougiFrameLineYGeometry.vertices.push( new THREE.Vector3(   450, (-350 + ( 100 * lyi )),  450 ) );
		threeJs3DshougiFrameLineYGeometry.vertices.push( new THREE.Vector3(   450, (-350 + ( 100 * lyi )), -450 ) );
		threeJs3DshougiFrameLineYMaterial = new THREE.LineBasicMaterial( { color: InnerlineColor ,  transparent: true, opacity: 0.2} );
		threeJs3DshougiFrameLineY[ lyi ] = new THREE.Line( threeJs3DshougiFrameLineYGeometry, threeJs3DshougiFrameLineYMaterial );
		scene.add( threeJs3DshougiFrameLineY[ lyi ] );
	}

	for ( var lzi = 0; lzi < 8; lzi++ ) {
		var threeJs3DshougiFrameLineZGeometry = null;
		var threeJs3DshougiFrameLineZMaterial = null;
		threeJs3DshougiFrameLineZGeometry = new THREE.Geometry();
		threeJs3DshougiFrameLineZGeometry.vertices.push( new THREE.Vector3( -450,  450, (-350 + ( 100 * lzi )) ) );
		threeJs3DshougiFrameLineZGeometry.vertices.push( new THREE.Vector3( -450, -450, (-350 + ( 100 * lzi )) ) );
		threeJs3DshougiFrameLineZGeometry.vertices.push( new THREE.Vector3(  450, -450, (-350 + ( 100 * lzi )) ) );
		threeJs3DshougiFrameLineZGeometry.vertices.push( new THREE.Vector3(  450,  450, (-350 + ( 100 * lzi )) ) );
		threeJs3DshougiFrameLineZGeometry.vertices.push( new THREE.Vector3( -450,  450, (-350 + ( 100 * lzi )) ) );
		threeJs3DshougiFrameLineZMaterial = new THREE.LineBasicMaterial( { color: InnerlineColor ,  transparent: true, opacity: 0.2} );
		threeJs3DshougiFrameLineZ[ lzi ] = new THREE.Line( threeJs3DshougiFrameLineZGeometry, threeJs3DshougiFrameLineZMaterial );
		scene.add( threeJs3DshougiFrameLineZ[ lzi ] );
	}
	*/
}

var selectLineObject = [];

function makeSelectLineObject( x, y, z ) {

	var distanceX = x * 100;
	var distanceY = y * 100;
	var distanceZ = z * 100;

	var threeJsSelectLineGeometry = new THREE.CubeGeometry( 100, 100, 900 );
	var threeJsSelectLineMaterial = new THREE.MeshBasicMaterial( { color: InnerlineColor, wireframe: true } );

	selectLineObject[0] = new THREE.Mesh( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
	selectLineObject[0].position = { x : (-400 + distanceX), y : (-400 + distanceY), z : 0 };
	scene.add( selectLineObject[0] );

	threeJsSelectLineGeometry = new THREE.CubeGeometry( 100, 900, 100 );
	threeJsSelectLineMaterial = new THREE.MeshBasicMaterial( { color: InnerlineColor, wireframe: true } );
	selectLineObject[1] = new THREE.Mesh( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
	selectLineObject[1].position = { x : (-400 + distanceX), y : 0, z : (-400 + distanceZ) };
	scene.add( selectLineObject[1] );

	threeJsSelectLineGeometry = new THREE.CubeGeometry( 900, 100, 100 );
	threeJsSelectLineMaterial = new THREE.MeshBasicMaterial( { color: InnerlineColor, wireframe: true } );
	selectLineObject[2] = new THREE.Mesh( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
	selectLineObject[2].position = { x : 0, y : (-400 + distanceY), z : (-400 + distanceZ) };
	scene.add( selectLineObject[2] );
}

function deleteSelectLine() {
	scene.remove( selectLineObject[0] );
	scene.remove( selectLineObject[1] );
	scene.remove( selectLineObject[2] );
}
