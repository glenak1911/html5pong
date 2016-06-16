var canvas;
var canvasContext;
var ballx;

window.onload = function game(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	setInterval(drawElements,10);
}

function drawElements(){
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(100, 100, 25, 20);
}
