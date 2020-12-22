var fr,mr;


function setup() {
  createCanvas(1200,800);

  fr = createSprite(600, 400, 50, 80);
  mr = createSprite(400,200,80,30);
  fr.shapeColor = "green";
  mr.shapeColor = "green";

  fr.debug = true;
  mr.debug = true;
}

function draw() {
  background(0);  
  mr.y = World.mouseY;
  mr.x = World.mouseX;

  if(mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < mr.width/2 + fr.width/2 
     && mr.y - fr.y < mr.height/2 + fr.height/2 && fr.y - mr.y < mr.height/2 + fr.height/2){
    fr.shapeColor = "red";
    mr.shapeColor = "red";
  }
  else{
    fr.shapeColor = "green";
    mr.shapeColor = "green";
  }

  drawSprites();
}