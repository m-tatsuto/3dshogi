var xcontrollerRight = false;
var xcontrollerLeft = false;
var cameraForward = false;
var cameraBackward = false;

function swichXviewRight(){
	xcontrollerLeft = false;
	xcontrollerRight ? xcontrollerRight = false : xcontrollerRight = true;
}
function swichXviewLeft(){
	xcontrollerRight = false;
	xcontrollerLeft ? xcontrollerLeft = false : xcontrollerLeft = true;
}

function doCameraForward(){
	cameraForward ? cameraForward = false : cameraForward = true;
	cameraBackward = false;
}

function doCameraBackward(){
	cameraBackward ? cameraBackward = false : cameraBackward = true;
	cameraForward = false;
}

function doStop(){
	xcontrollerRight = false;
	xcontrollerLeft = false;
	cameraForward = false;
	cameraBackward = false;
}
