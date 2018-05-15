// setup canvas
const BALL_NUM=20;
var canvas = document.querySelector('canvas');//library
var ctx = canvas.getContext('2d');
var EVIL_VX=20;
var EVIL_VY=20;
// var score=0;

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;





// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min; 
  return num;

}

function Shape(x,y,vx,vy,exist){
	this.x=x;
	this.y=y;
	this.vx=vx;
	this.vy=vy;
	this.exist=exist;

}

function Ball(x,y,vx,vy,exist,color,r){
	Shape.call(this,x,y,vx,vy,exist);
	
	this.color=color;
	this.r=r;
}


Ball.prototype.draw = function(){
	if(this.exist){
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
	ctx.fill();
	}

} 


Ball.prototype.move=function(){
	if(this.exist){
	this.x+=this.vx;
	this.y+=this.vy;
	}
}

Ball.prototype.checkCollision=function(){
	if (this.x<=0||this.x>=window.width)this.vx*=-1;
	else if(this.y<=0||this.y>=window.height)this.vy*=-1;
	
}



function EvilBall(x,y,vx,vy,exist,color,r){
	Shape.call(this,x,y,vx,vy,exist);
	
	this.color=color;
	this.r=r;


}

EvilBall.prototype.move=function(){
var _this = this;
window.onkeydown = function(e) {
    if (e.key ==="ArrowLeft") {
      _this.x -= _this.vx;
    } else if (e.key ==="ArrowRight") {
      _this.x += _this.vx;
    } else if (e.key === "ArrowUp") {
      _this.y -= _this.vy;
    } else if (e.key ==="ArrowDown" ) {
      _this.y += _this.vy;
    }
  }


}

EvilBall.prototype.draw=function(){
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.lineWidth=5;
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
	ctx.fill();

}

EvilBall.prototype.checkCollision=function(){
	if (this.x<=0||this.x>=window.width)this.vx*=-1;
	else if(this.y<=0||this.y>=window.height)this.vy*=-1;
}

EvilBall.prototype.checkEat=function(){
	
	var count=0;

	for(let i=0;i<BALL_NUM;i++){
	var dx = this.x - balls[i].x;
	var dy = this.y - balls[i].y;
	var distance = Math.sqrt(dx * dx + dy * dy);
	if(distance<evilball.r+balls[i].r){
		balls[i].exist=false;
	}
	}	


	

}

function checkScore(){
	var count=0;
	var score=document.getElementById('score');
	for(let i=0;i<BALL_NUM;i++){
		if(balls[i].exist===false){
		count++;
		}
	}

	score.innerHTML='Score : '+count;

	
}




///create ball
var balls=[];


for (let i=0;i<BALL_NUM;i++){

balls[i]=new Ball(random(0,width),random(0,height),random(-10,10),random(-10,10),true,
		"rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")",random(20,50))
}

var evilball=new EvilBall(random(0,width),random(0,height),EVIL_VX,EVIL_VY,true,
		"rgb("+255+","+0+","+0+")",30);

evilball.move();

//////////


function loop(){

ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
ctx.fillRect(0, 0, width, height);

	
evilball.draw();

evilball.checkEat();
checkScore();



for (let i=0;i<BALL_NUM;i++){
	
	balls[i].draw();
	balls[i].move();
	balls[i].checkCollision();
		
}

// checkScore();


requestAnimationFrame(loop);

}



loop();






