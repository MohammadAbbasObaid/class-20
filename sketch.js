var FR,MR;


function setup() {
  createCanvas(800,400);
  FR=createSprite(200,100,30,80)
  MR=createSprite(300,300,80,30)
  FR.shapeColor="green"
  MR.shapeColor="green"
}

function draw() {
  background(255,255,255);
  MR.x=mouseX;
  MR.y=mouseY;
if(MR.x-FR.x<MR.width/2+FR.width/2 && FR.x-MR.x<MR.width/2+FR.width/2 && MR.y-FR.y<MR.height/2+FR.height/2 && FR.y-MR.y<MR.height/2+FR.height/2 ){
  FR.shapeColor="red"
  MR.shapeColor="red"
}
else{
  FR.shapeColor="green"
  MR.shapeColor="green"
}
  
  drawSprites();
}