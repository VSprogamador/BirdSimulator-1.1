var bg, bgImg;
var bird, birdImg;
var gameOver, gameOverImg
var keyboard, keyboardImg;
var restartButton, restartButtonImg;
var menuPressSpace, meunuPressSpaceImg
var restartButton, restarButtonImg;
var solo;

function preload() {
  bgImg = loadImage('assets/bg.png');
  birdImg = loadImage('assets/bird.webp');
  menuPressSpaceImg = loadImage('assets/menuPressSpace.png');
  keyboardImg = loadImage('assets/keyboard.png');
  restartButtonImg = loadImage('assets/restartButton.png');
  gameOverImg = loadImage('assets/gameOver.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bird = createSprite(200,200,0,0);
  bird.addImage(birdImg);
  bird.scale = 0.25;
  bird.visible = false;
  
  bg = createSprite(5600,400,400,400);
  bg.addImage(bgImg);
  bg.scale = 2.25;
  bg.visible = false;

  menuPressSpace = createSprite(750,200,0,0);
  menuPressSpace.addImage(menuPressSpaceImg);
  menuPressSpace.scale = 8.0;
  menuPressSpace.visible = true;

  keyboard = createSprite(700,500,0,0);
  keyboard.addImage(keyboardImg);
  keyboard.scale = 2.0;
  keyboard.visible = true;

  restartButton = createSprite(200,200,0,0);
  restartButton.addImage(restartButtonImg);
  restartButton.scale = 0.25;
  restartButton.visible = false;

  gameOver = createSprite(200,200,0,0);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.25;
  gameOver.visible = false;

  solo = createSprite(width/2 - 5,height,width,2);
  solo.x = width/2
  solo.visible = false;
}

function draw() {
  background(0,0,200);

  bird.collide(solo);

  if((touches.length > 0 || keyDown("SPACE")) && bird.y  >= height-700) {
    bird.velocityY = -12;
    touches = [];
  }
  bird.velocityY = bird.velocityY + 0.8

  if(keyDown("space")) {
    destroy();
    show();
  }
drawSprites();
}

function destroy() {
  menuPressSpace.destroy();
  keyboard.destroy();
}

function show() {
  bird.visible = true;
}