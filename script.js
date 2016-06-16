var canvas;
var canvasContext;
var ballx;

window.onload = function game(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	ballx=100;
	setInterval(play,10);
}

function play(){
	drawElements();
	movingParts();
}

function drawElements(){
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(ballx, 100, 25, 20);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(0, 210, 10, 100);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(canvas.width-10, 210, 10, 100);
}

function movingParts(){
	ballx+=5;
}
