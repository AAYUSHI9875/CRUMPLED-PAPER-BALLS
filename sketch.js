
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// creating the variable ' ball ' 
var ball;
// ground 
var groundObj= new ground(width/2,670,width,20);
// left side 
var leftSide = new ground(1000,600,20,120);
// right side 
var rightSide = new ground(1290,600,20,120);
function preload()
{
	
}

function setup() {
	createCanvas(1350,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// ball_options 
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
// ball object is the moving object!
ball = Bodies.circle(200,100,20,ball_options);

World.add(world,ball);
	

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);

  // call the function show in draw function : 
  groundObj.show();
  leftSide.show();
  rightSide.show();
  Engine.run(engine);
  ellipse(ball.position.x,ball.position.y,20);
  ball.velocityX = - 2 ;
  ball.velocityY = 3; 
  drawSprites();
 keyPressed();
}
// force on ball 
function HForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});
  }
// function key pressed 
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});
      
	}
}
