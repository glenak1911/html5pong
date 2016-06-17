var canvas;
var canvasContext;
var ballx;
var bally;
var ballSpeedX;

window.onload = function game(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	ballx=100;
	bally=100;
	ballSpeedX = 5;
	ballSpeedY = 5;
	setInterval(play,10);
}

function play(){
	drawElements();
	movingPartsX();
}

function drawElements(){
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	canvasContext.beginPath();
	canvasContext.arc(ballx, bally, 10, 0, 2*Math.PI);
	canvasContext.strokeStyle='red';
	canvasContext.stroke();
//	canvasContext.fillStyle = 'red';
//	canvasContext.fillRect(ballx, bally, 25, 20);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(0, 210, 10, 100);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(canvas.width-10, 210, 10, 100);
}

function movingPartsX(){
	ballx=ballx+ballSpeedX;
	if(ballx>canvas.width){
		ballSpeedX=-ballSpeedX;
	}else if(ballx<0){
		ballSpeedX=-ballSpeedX;
	}
}
