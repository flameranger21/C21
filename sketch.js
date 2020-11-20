var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
fixedRect = createSprite(400, 200, 100, 50);
fixedRect.shapeColor = "red";
fixedRect.debug = true;

movingRect = createSprite(400, 200, 100, 50);
movingRect.shapeColor = "blue";
movingRect.debug = true;

gameObject1 = createSprite(200,200,80,20);
gameObject1.shapeColor = "purple"

gameObject2 = createSprite(600,200,80,20);
gameObject2.shapeColor = "magenta"

}

function draw() {
  background(100);  

  movingRect.x = mouseX
  movingRect.y = mouseY

  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2);
  
  drawSprites();
  
  if (isTouching(movingRect, gameObject2)) {
      movingRect.shapeColor = "cyan"
      gameObject2.shapeColor = "blue"
  } else {
      movingRect.shapeColor = "grey"
      gameObject2.shapeColor = "black"
  }
}

