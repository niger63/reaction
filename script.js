'use strict'


let canvas;
let ctx;
let color = "blue";
let t;
let n = 0;
let text_elem = document.getElementById("text-out");
function setText(text){
	text_elem.textContent = text;
}
function endTimer(i){
	if(i == n){
		color = "#00ff00"
		setText("relase")
	}
	
}
function onTouchStart(){
	color = "gray"
	
	setText("hold")
	
	n++;
	let tos = 2000+1000*Math.random()
	t = Date.now() + tos;
	setTimeout(endTimer, tos,n)
}
function onTouchEnd(){
	
	color = "gray"
	
	n++;
	let dt = Date.now() - t
	if(dt < 0){
		color = "red"
		setText("missed")
		
	}else{
		setText(""+dt.toFixed(0)+"ms")
	}
	
	console.log(dt);
}
function resize(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
function draw(){
	ctx.fillStyle = color
	//console.log("frame")
	ctx.fillRect(0, 0, canvas.width, canvas.height)
}
function frm(){
	requestAnimationFrame(frm)
	resize()
	
	draw()
}

function main(){
	
	canvas = document.getElementById("cvs")
	
	ctx = canvas.getContext("2d")
	
	
	canvas.addEventListener('touchstart',onTouchStart )
	canvas.addEventListener('mousedown',onTouchStart)
	canvas.addEventListener('touchend',onTouchEnd)
	canvas.addEventListener('mouseup',onTouchEnd)
	requestAnimationFrame(frm)
	
}
main()