var Blockhead, BlockheadImg;

function preload(){
    BlockheadImg = loadImage("Blockhead.png");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
    drawSprites();
}
