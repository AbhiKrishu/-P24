
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane,hammer,sand1,sand2,sand3,sand4,sand5,sand6;
var rubber,iron,stone;


function preload(){

	
}

function setup() {
	createCanvas(1200,1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(100,50)
	stone=new Stone(100,50,50,50)
	plane=new Plane(600,600,1200,100)
	rubber=new Rubber(500,400,70)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  stone.display();
  plane.display();
  rubber.display();
  
  drawSprites();
 
}



