
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ball;

function setup() {
	createCanvas(800, 700);
var ball_opsitions={
	isStatic:false,
	restitution:0.3,
	fritction:0,
	density:1.2

}
var ball;
var btn1,btn2;

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  btn1=createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hforce);

  btn2=createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vforce);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundObj=new ground(width/2,670,width,20);
leftSide = new ground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
  function hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  
  }
  function vforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  
  }

 
}
function keyPressed(){

		  }
	

