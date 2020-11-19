
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint


var engine, world;
var player;
var enemy;
code();
function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    rectMode(CENTER);
	createCanvas(1700,835);
	
	player=createSprite(850,417.5,40,40);
    camera.position.x=player.x;
		 camera.position=player.y
		 



}


function draw() {
 background("black");
banana();
  drawSprites();
  camera.position.x = displayWidth/2;
  camera.position.y = displayHeight/2;
  drawSprites();

}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  player.x=player.x-20;    
	 
  
	}else


	if (keyCode === RIGHT_ARROW) {
  
	  player.x=player.x+20;    
	 
  
	}else

	if (keyCode === UP_ARROW) {
  
	  player.y=player.y-20;    
	 
  
	}else

	if (keyCode === DOWN_ARROW) {
  
	  player.y=player.y+20;    
	 
  
	     }
	}

	  
function banana (){

   
	if(frameCount%20==0){
	var banana = createSprite(850,0, 300, 20);
	banana.velocityY=10;
	banana.x=round(random(1700,0)) 
  
	}
  } 
     








	
	
