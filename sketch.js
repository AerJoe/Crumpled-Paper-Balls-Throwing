
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var radius=40;
var ground_wall, right, left

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}
	ball=Bodies.circle(250,100,radius,ball_options);
	World.add(world,ball);
	ground_wall=new Ground(width/2,650,width,20);
	left= new Ground(600,630,20,100);
	right= new Ground(750,630,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  ground_wall.show();
  left.show();
  right.show();
}
function keyPressed(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-300});
	}
}



