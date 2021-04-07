var box1,box2




function setup() {
  createCanvas(1200,800);
  box1 = createSprite(600, 400, 50, 80);
  box2 = createSprite(400,200,80,30);
  box1.shapeColor="green"
  box2.shapeColor="red"
}

function draw() {
  background("black");  
  box1.x=World.mouseX
  box1.y=World.mouseY

  if(box1.x - box2.x < box2.width/2 + box1.width/2 && 
   box2.x-box1.x <box2.width/2 +box1.width/2 &&
     box1.y-box2.y <box2.height/2 + box1.height/2 &&
     box2.y-box1.y <box1.height/2+ box2.height/2)
  {
    box1.shapeColor="lightgreen"
    box2.shapeColor="pink"
  }
  else
  {
    box1.shapeColor="green"
    box2.shapeColor="red"
  }
  drawSprites();
}