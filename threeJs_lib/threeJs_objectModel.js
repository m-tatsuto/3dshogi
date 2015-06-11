var threeJs3DshougiFrameLineX = [];
var threeJs3DshougiFrameLineY = [];
var threeJs3DshougiFrameLineZ = [];

var AroundlineColor = 0x0000ff;
var InnerlineColor = 0x009999;

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
  mesh     = new THREE.Line( geometry, material );

  scene.add( mesh );
}

var selectLineObject = [];

function makeSelectLineObject( x, y, z ) {

  var distanceX = x * 100;
  var distanceY = y * 100;
  var distanceZ = z * 100;

  var threeJsSelectLineGeometry = new THREE.Geometry();
  var threeJsSelectLineMaterial = new THREE.LineBasicMaterial( { color: InnerlineColor ,  transparent: true, opacity: 1} );

  threeJsSelectLineGeometry = new THREE.Geometry();
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( (-400 + distanceX), (-400 + distanceY), -450 ) );
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( (-400 + distanceX), (-400 + distanceY),  450 ) );
  selectLineObject[0] = new THREE.Line( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
  scene.add( selectLineObject[0] );

  threeJsSelectLineGeometry = new THREE.Geometry();
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( (-400 + distanceX), -450, (-400 + distanceZ) ) );
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( (-400 + distanceX),  450, (-400 + distanceZ) ) );
  selectLineObject[1] = new THREE.Line( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
  scene.add( selectLineObject[1] );

  threeJsSelectLineGeometry = new THREE.Geometry();
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3( -450, (-400 + distanceY), (-400 + distanceZ) ) );
  threeJsSelectLineGeometry.vertices.push( new THREE.Vector3(  450, (-400 + distanceY), (-400 + distanceZ) ) );
  selectLineObject[2] = new THREE.Line( threeJsSelectLineGeometry, threeJsSelectLineMaterial );
  scene.add( selectLineObject[2] );

}

function deleteSelectLine() {
  scene.remove( selectLineObject[0] );
  scene.remove( selectLineObject[1] );
  scene.remove( selectLineObject[2] );
}
