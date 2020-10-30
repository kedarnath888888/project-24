
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var box1,box2,box3;
var ball;



function setup() {
	createCanvas(1200, 400);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(600,350,1200,20);

	box1=new Box(1000,330,200,20);
	box2=new Box(900,290,20,100);
	box3=new Box(1100,290,20,100);
	ball=new Ball(400,300,50);
	
	
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  keyDown();
  drawSprites();
 
}
function keyDown(){
	if(keyCode === UP_ARROW){

	Matter.Bodies.circle(100,300,50,{isStatic:false},5);
	Matter.Body.applyForce(ball.body, ball.position, {x:85,y:85});

	}


}



