var xcontroller = false;
var xcontrollerRight = false;
var xcontrollerLeft = false;
var cameraForward = false;
var cameraBackward = false;

function swichXview(){
	xcontroller ? xcontroller = false : xcontroller = true;
}

function swichXviewRight(){
	xcontrollerLeft = false;
	xcontrollerRight ? xcontrollerRight = false : xcontrollerRight = true;
}
function swichXviewLeft(){
	xcontrollerRight = false;
	xcontrollerLeft ? xcontrollerLeft = false : xcontrollerLeft = true;
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
