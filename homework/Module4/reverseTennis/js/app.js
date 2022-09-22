//Reverse Tennis
//Jesús Andrade
//FALL N220
 
 let lPaddle = {x: 10, y: 175, w: 20, h: 50};
let rPaddle = {x: 770, y: 175, w: 20, h: 50};

let speed = 5;

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(80, 255, 100);
    noStroke();
    fill(255);
    rect(lPaddle.x, lPaddle.y, lPaddle.w, lPaddle.h);
    rect(rPaddle.x, rPaddle.y, rPaddle.w, rPaddle.h);
    if (keyIsDown(DOWN_ARROW)) {
        lPaddle.y += speed;
        rPaddle.y -= speed;
    }
    if (keyIsDown(UP_ARROW)) {
        lPaddle.y -= speed;
        rPaddle.y += speed;
    }
    
    

}  



 