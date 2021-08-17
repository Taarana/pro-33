var Engine = Matter.Engine;
var World= Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;

var engine, world;
var snow1Img,snow2Img,backgroundImg;
var boy,boyImg;

function preload(){
  backgroundImg=loadImage("snow1.jpg");
  boyImg=loadImage("boy.png");
  snow1Img=loadImage("snow4.webp");
  snow2Img=loadImage("snow5.webp");
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  boy=createSprite(400, 200, 50, 50);
  boy.addImage("boyImg",boyImg);
  boy.scale=0.9;
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

    if(frameCount % 30 == 0){
      createSnow();
    }
   
  drawSprites();
}

function createSnow(){
  snow=createSprite(random(2000,100),40,10,10);
  snow.addImage('snow2Img',snow2Img);
  snow.scale = 051;
  snow.velocityY = 2;
  snow.lifetime = 500;
}