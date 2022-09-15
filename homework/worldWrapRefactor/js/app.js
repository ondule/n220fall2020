/* Jesús Andrade
FALL2022 N220 
World Wrap Refactor
*/



let ball = { //declaring object
    x:150, //initial horizontal point of ball
    y:300, //vertical point of ball
    r:150, //size of ball
    speed:5, //speed at which ball is traveling at
    colorz: [200,10,150] //ball co    
};

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(170);
    noStroke();
    fill(ball.colorz);
    ball.x += ball.speed; //increases the value of x
    if (ball.x > width + ball.r) { //if statement changes x back to -150 once it is beyond the canvas width and radius combined
        ball.x = -ball.r;
    }
    ellipse(ball.x, ball.y, ball.r);
}
console.log(ball.colorz);