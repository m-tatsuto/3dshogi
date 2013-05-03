var moveAnimationTimer = null;
var animationSeparateTime = 20;

function threeJsMoveAnimation( x, y, z ) {
	var comaObjectPointX = touchComaObject.nowPoint[0];
	var comaObjectPointY = touchComaObject.nowPoint[1];
	var comaObjectPointZ = touchComaObject.nowPoint[2];

	var comaMoveDistanceX = x - comaObjectPointX;
	var comaMoveDistanceY = y - comaObjectPointY;
	var comaMoveDistanceZ = z - comaObjectPointZ;

	var numberOfMapObject = (comaObjectPointX * 81) + (comaObjectPointY * 9) + comaObjectPointZ;
	var intervaltime = 1000 / animationSeparateTime;

	moveAnimationTimer = setInterval( moveAnimation , intervaltime );

	var animationCount = 0;

	function moveAnimation() {
		animationCount++;

		mapComa3DObject[ numberOfMapObject ].position.x += ( comaMoveDistanceX / animationSeparateTime ) * 100;
		mapComa3DObject[ numberOfMapObject ].position.y += ( comaMoveDistanceY / animationSeparateTime ) * 100;
		mapComa3DObject[ numberOfMapObject ].position.z += ( comaMoveDistanceZ / animationSeparateTime ) * 100;

		animate_is_update = true;

		if ( animationCount == animationSeparateTime ) {
			clearTimeout( moveAnimationTimer );
			setThreeJs3dMapObject();
		}
	}

}
