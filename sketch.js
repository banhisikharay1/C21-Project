var canvas;
var music;
var yellowS,blueS,purpleS,redS;
var square;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    yellowS = createSprite(100,580,180,20);
    yellowS.shapeColor = "yellow";


    blueS = createSprite(300,580,180,20);
    blueS.shapeColor = "skyBlue";

    redS = createSprite(500,580,180,20);
    redS.shapeColor = "red";

    purpleS = createSprite(700,580,180,20);
    purpleS.shapeColor = "violet";
    //create box sprite and give velocity
    square = createSprite(random(20,750),300,40,40);
    square.shapeColor = "white";
    square.velocityX = 4;
    square.velocityY = -3;
}

function draw() {
    background("black");

edges = createEdgeSprites();

square.bounceOff(edges[1]);
square.bounceOff(edges[0]);
square.bounceOff(edges[2]);

if(yellowS.isTouching(square)&&square.bounceOff(yellowS)){
    square.shapeColor = "yellow";
    
}
if(redS.isTouching(square)&&square.bounceOff(redS)){
    square.shapeColor = "red";
    music.stop();
    square.velocityX = 0;
    square.velocityY = 0;
}
if(blueS.isTouching(square)&&square.bounceOff(blueS)){
    square.shapeColor = "skyBlue";
    music.play();
}
if(purpleS.isTouching(square)&&square.bounceOff(purpleS)){
    square.shapeColor = "violet";
}    
drawSprites();
}