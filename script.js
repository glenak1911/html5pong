var canvas;
var canvasContext;
var ball;

window.onload = function game(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	setInterval(drawElements,10);
}

function drawElements(){
	ball+=5;
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(255,210,200,200);
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(ballx,100,10,10);
}
