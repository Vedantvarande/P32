
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14,mango15;
var world,boy;
var launchingForce=100;
var table1;


function preload()
{
	boy=loadImage("boy.png");
}

function setup() 
{
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  stoneObj=new stone(235,420,30); 
  
  table1=createSprite(1054,440,330,310);
  table1.visible=false;

	mango1=new mango(1100,540,30);
  mango2=new Pepsi(1160,540,30);
	mango3=new Pepsi(1040,540,30);
	mango4=new mango(980,540,30);
	mango5=new Pepsi(920,540,30);
	mango6=new Pepsi(950,440,30);
	mango7=new mango(1010,440,40);
	mango8=new Pepsi(1070,440,40);
	mango9=new mango(1130,440,40);
	mango10=new Pepsi(1100,340,40);
	mango11=new mango(1040,340,40);
  mango12=new Pepsi(980,340,40);
  mango13=new mango(1010,239,40);
  mango14=new Pepsi(1070,239,40);
  mango15=new mango(1040,138,40);
  

	//treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  var render = Render.create(
    {
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 
}

function draw() {

  background("white");
 
  textSize(25);
  fill(0);
  stroke(0);
  text("Press Space to get a second Chance to Play!!",50 ,240);
  image(boy ,200,340,200,300);
  
  fill(0);
  stroke(0);
  text("Rock throwing practice Game",50,100);
  

  
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  stoneObj.display();
  table1.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
   
}

function keyPressed() 
{
  if (keyCode === 32) 
  {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango)
  {
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }