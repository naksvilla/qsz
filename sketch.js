
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob1= new bob(250,500,20)
	bob2= new bob(280,500,20)
	bob3= new bob(350,500,20)
	bob4= new bob(380,500,20)
	bob5= new bob(410,500,20)

	roof1= new roof(300,340,300,20)

	rope1= new Rope(bob1.body,{x:200,y:350})
	rope2= new Rope(bob2.body,{x:250,y:350})
	rope3= new Rope(bob3.body,{x:300,y:350})
	rope4= new Rope(bob4.body,{x:350,y:350})
	rope5= new Rope(bob5.body,{x:400,y:350})

}


function draw() {
  rectMode(CENTER);
  background("white");
 
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	roof1.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
 
  
 
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:200})
  }
}

