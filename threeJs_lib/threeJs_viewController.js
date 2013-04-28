var xcontroller = false;
var ycontroller = false;
var zcontroller = false;
var cameraForward = false;
var cameraBackward = false;

function swichXview(){
	xcontroller ? xcontroller = false : xcontroller = true;
}

function doCameraForward(){
	cameraForward = true;
	cameraBackward = false;
}

function doCameraBackward(){
	cameraBackward = true;
	cameraForward = false;
}

function doStop(){
	cameraBackward = false;
	cameraForward = false
}
