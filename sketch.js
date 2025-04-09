var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,100,100);
  box.shapeColor=color("cyan");

}

function draw() 
{
   background("pink");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box.shapeColor=color(3,2,2);
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box.shapeColor=color("green");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    box.shapeColor=color("black");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    box.shapeColor=color("yellow");
  }

  drawSprites();
}

