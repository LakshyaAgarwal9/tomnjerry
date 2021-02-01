var background,bgImg;
var mouse, mouseImg,teasing,last;
var cat,catImg,moving,final;


function preload() {
    bgImg=loadImage("garden.png");
    mouseImg=loadAnimation("mouse1.png");
    teasing=loadAnimation("mouse2.png","mouse3.png");
    last=loadAnimation("mouse4.png");

    catImg=loadAnimation("cat1.png");
    moving=loadAnimation("cat2.png","cat3.png");
    final=loadAnimation("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    background=createSprite(500,400);
    background.addImage(bgImg);
    
    mouse=createSprite(200,700);
    mouse.addAnimation("x",mouseImg);
    mouse.scale=0.1;

    cat=createSprite(900,700);
    cat.addAnimation("y",catImg);
    cat.scale=0.1;
}

function draw() {
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.addAnimation("a",final);
        mouse.addAnimation("b",last);
        cat.changeAnimation("a");
        mouse.changeAnimation("b");
        cat.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode=== LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("running",moving);
        cat.changeAnimation("running");
        mouse.addAnimation("teasing",teasing);
        mouse.changeAnimation("teasing");
    }
   

}
