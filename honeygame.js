//Lab 6
//Evan Soucy
let spriteX = 00;
let spriteY = 00;
let spriteSpeed = 20;
let hiveX, hiveY;
let isColided = false;
function setup() {
  createCanvas(400, 400);
  spawnHive();
  hiveX = 0;
  hiveY = 0;
}

function draw() {
  background(220);
  drawHive(hiveX, hiveY, 1);
  drawBee(spriteX, spriteY, 0.5);
  d = dist(hiveX, hiveY, spriteX, spriteY);
  if (d < 50) {
    isColided = true;
    // honeyBee (spriteX, spriteY, 1)
  }
  console.log("The distance is" + d);
}

function drawBee(x, y, size) {
  push();
  scale(size);
  translate(x, y);
  if (isColided == false) {
    fill("yellow"); //body
    ellipse(60, 30, 125, 75);
    fill("black"); //stripes
    ellipse(30, 30, 20, 65);
    ellipse(60, 30, 20, 75);
    ellipse(90, 30, 20, 65);
    ellipse(120, 10, 30, 30); //eye
    fill("lightblue"); //wings
    ellipse(40, -30, 20, 50);
    ellipse(70, -30, 20, 50);
  } else {
    fill("yellow"); //body
    ellipse(60, 30, 125, 75);
    ellipse(120, 10, 30, 30); //eye
    fill("black"); //stripes
    ellipse(30, 30, 20, 65);
    ellipse(60, 30, 20, 75);
    ellipse(90, 30, 20, 65);
    fill("lightblue"); //wings
    ellipse(40, -30, 20, 50);
    ellipse(70, -30, 20, 50);
  }
  pop();
}

function drawHive(x, y, size) {
  push();
  scale(size);
  translate(x, y);
  fill("tan");
  ellipse(30, 10, 60, 20);
  ellipse(30, 20, 70, 20);
  ellipse(30, 30, 80, 20);
  ellipse(30, 40, 100, 20);
  ellipse(30, 50, 100, 20);
  ellipse(30, 60, 80, 20);
  ellipse(30, 70, 70, 20);
  ellipse(30, 80, 60, 20);

  pop();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    spriteX -= spriteSpeed;
  }
  if (keyCode == RIGHT_ARROW) {
    spriteX += spriteSpeed;
  }
  if (keyCode == UP_ARROW) {
    spriteY -= spriteSpeed;
  }
  if (keyCode == DOWN_ARROW) {
    spriteY += spriteSpeed;
  }
}
function spawnHive() {
  // Randomly generate the sprite's position
  hiveX = random(width - 50);
  hiveY = random(height - 50);
}
function mouseClicked() {
  // Spawn a new sprite at the mouse position when clicked
  spawnHive();
}
