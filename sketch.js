
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paperball;
var dustbinLine1, dustbinLine2, dustbinLine3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paperball= new Paperball(200,200,10)
   
   dustbinLine1 = new dustbin(650,350,100,20)
   dustbinLine2 = new dustbin(610,300,20,90)
   dustbinLine3 = new dustbin(690,300,20,90)

   ground = new Ground(400,370,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperball.display();
  dustbinLine1.display();
  dustbinLine2.display();
  dustbinLine3.display();
  ground.display();

  
  drawSprites();
 
}


function keyPressed () {
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
}
}
