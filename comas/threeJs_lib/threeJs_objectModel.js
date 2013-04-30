var threeJs3DshougiFrameLineX = [];
var threeJs3DshougiFrameLineY = [];
var threeJs3DshougiFrameLineZ = [];

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
	material = new THREE.LineBasicMaterial( { color: AroundlineColor , opacity: 0.5} );
	mesh = new THREE.Line( geometry, material );
	scene.add( mesh );


	for ( var lxi = 0; lxi < 8; lxi++ ) {
		var threeJs3DshougiFrameLineXGeometry = null;
		var threeJs3DshougiFrameLineXMaterial = null;
		threeJs3DshougiFrameLineXGeometry = new THREE.Geometry();
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )),  450, -450 ) );
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )), -450, -450 ) );
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )), -450,  450 ) );
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )),  450,  450 ) );
		threeJs3DshougiFrameLineXGeometry.vertices.push( new THREE.Vector3( (-350 + ( 100 * lxi )),  450, -450 ) );
		threeJs3DshougiFrameLineXMaterial = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
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
		threeJs3DshougiFrameLineYMaterial = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
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
		threeJs3DshougiFrameLineZMaterial = new THREE.LineBasicMaterial( { color: InnerlineColor , opacity: 0.5} );
		threeJs3DshougiFrameLineZ[ lzi ] = new THREE.Line( threeJs3DshougiFrameLineZGeometry, threeJs3DshougiFrameLineZMaterial );
		scene.add( threeJs3DshougiFrameLineZ[ lzi ] );
	}
}
