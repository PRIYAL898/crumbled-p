
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,world,body,ground,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,200,4);
	
	ground=new Ground(200,380,400,10);
	
	dustbin1=new Dustbin(310,375,50,5);

	dustbin2=new Dustbin(360,375,50,5);

	dustbin3=new Dustbin(310,380,5,50);

	Engine.run(engine);
  
}


function draw() {
 
  background("white");
  
  Engine.update(engine);

  paper.display();

  ground.display();

  dustbin1.display();

  dustbin2.display();

  dustbin3.display();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


