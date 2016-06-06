var canvas;
var canvasContext;
var ball;

window.onload = function game(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	drawElements();
}

function drawElements(){
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
}