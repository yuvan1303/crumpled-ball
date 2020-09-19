
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper1;
var dustbin1;
var dustbin2;
var dustbin3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,690,800,20)

	paper1 = new Paper(300,350,40)

	dustbin1 = new Dustbin(500,680,300,20)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  dustbin1.display();
  
  drawSprites();
 
}



