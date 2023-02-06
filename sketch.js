
var trex ,trex_running;
var treximage;
var ground;
var groundimage;
function preload(){
  treximage=loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage=loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  trex=createSprite(50,170,10,70);
  trex.addAnimation("gdhsg",treximage);
  trex.scale=0.5;
  
  ground=createSprite(51,195,600,10);
  ground.addImage("dfhf",groundimage);
 
}

function draw(){
  background("yellow")
  drawSprites();

  if(keyDown("space")){
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+1;
  trex.collide(ground);
}
