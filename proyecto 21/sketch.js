
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var piso;
var leftSide;
var rigthSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	var piso_options={
		isStatic:true,
	}
	var leftSide_options={
		isStatic: true,
	}

		ball = Bodies.rectangle(250,100,10,10,ball_options);
		World.add(world, ball);

		piso = Bodies.rectangle(400,700,50,30,piso_options);
		World.add(world, ball);
		
		leftSide = Bodies.rectangle(450,670,10,80, leftSide_options);

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  rect(ball.position.x, ball.position.y,50,50)
  rect(piso.position.x, piso.position.y,800,50)
  rect(leftSide.position.x, leftSide.position.y,10,30)
}
function keyPressed() {
	if (keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball, ball.position,{x:85,y:-85});
	}
}


