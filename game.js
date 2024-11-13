let state = "start";
//let gameTimer = 0;
let speed = 0;
let x = 1000;
let y = -300;

function setup() {
  createCanvas(1000, 720);
}

function startScreen() {
  strokeWeight(0);
  fill(170, 170, 170);
  textSize(75);
  textStyle(BOLD);
  text("First Man on Mars", 500 - 300, 200);
  rect(500 - 100, 250, 200, 70, 20);
  textSize(30);
  fill(255, 255, 255);
  text("Play", 500 - 30, 293);
}

function gameScreen() {
  //
}

function winScreen() {
  strokeWeight(0);
  fill(170, 170, 170);
  textSize(75);
  textStyle(BOLD);
  text("You win!", 500 - 163, 200);
}

function dieScreen() {
  strokeWeight(0);
  fill(170, 170, 170);
  textSize(75);
  textStyle(BOLD);
  text("You died!", 500 - 180, 200);
}

function marsAndSpace() {
  strokeWeight(0);
  fill(217, 56, 20);
  ellipse(500, 800, 2000, 400);
  fill(192, 60, 36);
  ellipse(0, 700, 70, 70);
  ellipse(100, 690, 70, 70);
  ellipse(200, 690, 70, 70);
  ellipse(300, 650, 70, 70);
  ellipse(400, 680, 70, 70);
  ellipse(500, 730, 70, 70);
  ellipse(600, 700, 70, 70);
  ellipse(700, 640, 70, 70);
  ellipse(800, 740, 70, 70);
  ellipse(900, 680, 70, 70);
  ellipse(1000, 700, 70, 70);

  stroke(255, 255, 255);
  strokeWeight(10);
  point(50, 120);
  point(200, 340);
  point(150, 510);
  point(300, 70);
  point(450, 540);
  point(500, 329);
  point(700, 520);
  point(800, 240);
  point(100, 300);
  point(200, 20);
  point(750, 120);
  point(300, 120);
  point(900, 100);
  point(650, 220);
  point(550, 400);
  point(250, 520);
  point(450, 380);
  point(980, 360);
  point(100, 150);
  point(350, 260);
  point(820, 170);
  point(600, 440);
  point(700, 50);
  point(400, 200);
  point(520, 240);
  point(680, 100);
  point(950, 540);
  point(300, 420);
  point(120, 570);
  point(800, 350);
  point(700, 480);
  point(180, 270);
  point(560, 50);
  point(1000, 300);
  point(430, 110);
  point(640, 120);
  point(40, 500);
  point(810, 220);
  point(150, 430);
  point(370, 60);
  point(510, 200);
  point(470, 470);
  point(270, 180);
  point(730, 440);
  point(620, 330);
  point(920, 120);
  point(360, 370);
  point(840, 270);
  point(250, 400);
  point(980, 230);
}

function rocketShip(x, y) {
  scale(0.5);

  //Top wing
  strokeWeight(0);
  fill(130, 130, 130);
  triangle(x + 20, y - 30, x + 60, y + 40, x + 40, y + 40); //right wing top
  triangle(x - 20, y - 30, x - 60, y + 40, x - 40, y + 40); //left wing top
  rect(x - 60, y + 40, 120, 20); // wing bottom

  //Bottom wing
  push();
  translate(0, 220);
  triangle(x + 40, y - 30, x + 70, y + 30, x + 40, y + 30); //right wing top
  triangle(x - 40, y - 30, x - 70, y + 30, x - 40, y + 30); //left wing top
  rect(x - 70, y + 30, 140, 20); //wing bottom
  pop();

  //rocket booster
  fill(50, 50, 50);
  bezier(x - 30, y + 273, x + 0, y + 260, x + 0, y + 260, x + 30, y + 273);

  //landing legs
  strokeWeight(4);
  strokeCap(PROJECT);
  stroke(25, 25, 25);
  line(x + 55, y + 299, x + 30, y + 260); // right inner leg
  line(x - 55, y + 299, x - 30, y + 260); // left inner leg
  line(x + 75, y + 299, x + 38, y + 260); //right outer leg
  line(x - 75, y + 299, x - 38, y + 260); //left outer leg
  line(x + 40, y + 300, x + 85, y + 300); //right bottom leg
  line(x - 40, y + 300, x - 85, y + 300); //left bottom leg

  //body of ship
  strokeWeight(0);
  fill(100, 100, 100);
  rect(x - 40, y + 0, 80, 270);
  push();
  translate(x, y - 50);
  rotate(QUARTER_PI);
  rect(0, 0, 68, 68, 20);
  pop();

  //top window
  fill(50, 50, 50);
  bezier(x - 20, y - 20, x + 0, y - 50, x + 20, y - 20, x + 20, y - 20);
}

function draw() {
  background(0);
  marsAndSpace();

  //tells game what state to go
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    gameTimer = gameTimer + 1; //needs to be changed from time to be connected to when the rocket lands
    if (gameTimer >= 200) {
      gameTimer = 0;
      state = "result";
    }
  } else if (state === "result") {
    winScreen(); //changes depening on win or loss
  }

  rocketShip(x, y);
  y = y + speed;

  if (keyIsDown(32)) {
    speed = -3;
  } else {
    speed = 3;
  }
}

//gets you from start to game, then result back to game
function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "result") {
    state = "game";
  }
}
