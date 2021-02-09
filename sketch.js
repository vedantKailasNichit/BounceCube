var box
var music;
var block1,block2,block3,block4;
var upBlock, rightBlock, leftBlock;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    createCanvas(800,600);
    upBlock = createSprite(300, -10, 1000, 20);
    upBlock.shapeColor = "red";

    rightBlock = createSprite(810, 300, 20, 1000);
    rightBlock.shapeColor = "green";

    leftBlock = createSprite(-10, 390, 20, 1000);
    leftBlock.shapeColor = "blue";

    block1 = createSprite(100, 590, 190, 20);
    block1.shapeColor = "red";

    block2 = createSprite(300, 590, 190, 20);
    block2.shapeColor = "green";

    block3 = createSprite(500, 590, 190, 20);
    block3.shapeColor = "blue";

    block4 = createSprite(700, 590, 190, 20);
    block4.shapeColor = "yellow";

    box = createSprite(0, 0, 20, 20);
    box.shapeColor = "white";
    box.velocityY = 6;
    box.velocityX = 3;

    music.play()
}

function draw() {
    background(0,0,0);

    box.bounceOff(block1);
    box.bounceOff(block2);
    box.bounceOff(block3);
    box.bounceOff(block4);
    box.bounceOff(rightBlock);
    box.bounceOff(leftBlock);
    box.bounceOff(upBlock);

    if(box.x > 0 && box.x < 214 && box.y > 555){
        box.shapeColor = "red";
    }
    if(box.x > 214 && box.x < 414 && box.y > 555){
        box.shapeColor = "green";
    }
    if(box.x > 414 && box.x < 614 && box.y > 555){
        box.shapeColor = "blue";
        box.velocityY = 0;
        box.velocityX = 0;
        music.stop()
    }
    if(box.x > 614 && box.x < 800 && box.y > 555){
        box.shapeColor = "yellow";
    }
    //add condition to check if box touching surface and make it box
    drawSprites()
}
