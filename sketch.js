var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    
music = loadSound("music.mp3") ;

}
function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,195,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,195,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500 ,580 , 195 , 30)
    block3.shapeColor = "green" ;

    block4 = createSprite(700 , 580 , 195 , 30)
    block4.shapeColor = "red"
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 5 ;
    ball.velocityY = 6 ;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        console.log("playmusic")
         
    }



    if(ball.isTouching(block2) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
        console.log("playmusic")
        
 }

    if(ball.isTouching(block3) && ball.bounceOff(block3)) {
        ball.shapeColor = "green" ;
        music.play();
        console.log("playmusic")
        
    }

    if(ball.isTouching(block4) && ball.bounceOff(block4)) {
        ball.shapeColor = "red" ;
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    drawSprites();
}
