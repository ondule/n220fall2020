//Reverse Tennis
//Jesús Andrade
//FALL N220
 
//objects containing paddles
 let lPaddle = {x: 10, y: 175, w: 20, h: 50};
let rPaddle = {x: 770, y: 175, w: 20, h: 50};
//controls the speed at which the paddles move
let speed = 5;

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(80, 255, 100);
    noStroke();
    fill(255); //paddle color
    rect(lPaddle.x, lPaddle.y, lPaddle.w, lPaddle.h); //left paddle
    rect(rPaddle.x, rPaddle.y, rPaddle.w, rPaddle.h); //right paddle
    //if statement controlling paddles, pressing down arrow makes left paddle move down and right paddle move up 
    if (keyIsDown(DOWN_ARROW)) {  
        lPaddle.y += speed;
        rPaddle.y -= speed;
    }
    //function controlling paddles, pressing up arrow makes left paddle move up and right paddle move down 
    if (keyIsDown(UP_ARROW)) {
        lPaddle.y -= speed;
        rPaddle.y += speed;
    }
    
    

}  



 