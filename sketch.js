const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var dustbin,dustBinIMG;

function preLoad(){
  
	

}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;



 ground1 = new ground(400,380,800,10);
 ground2 = new ground(0,380,800,10);
  side = new stick(710,300,15,90);
  side1 = new stick(600,300,15,90);
  side2 = new stick(610,380,100,10);
  
  dust = new photo(664,325,10,10);

  paper1 = new paper(200,200,10);
  chain1 = new SlingShot(paper1.body,{x : 200 , y : 200});  


}

function draw() {
  background("white");  
  Engine.update(engine);
  ground1.display();  
  ground2.display();
  paper1.display();
  side.display();   
  side1.display();
  side2.display();
  
  chain1.display();
  
  dust.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(paper1.body,{x : mouseX , y : mouseY});

}


function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
if(keyCode === 32){
  chain1.attach(paper1.body);
   Matter.Body.setPosition(paper1.body,{x:100, y:200});
}
}


