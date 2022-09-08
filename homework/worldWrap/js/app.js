/* Jesús Andrade
FALL2022 N220 */

//World Wrap
let r = 150; //radius of circle
let y = 300 //initial y circle starting point
let x = -r; //initial x circle starting point
let speed = 5; //rate of pixels circle is traveling

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(170);
    noStroke();
    fill(220, 10, 150);
    x += speed; //increases the value of x
    if (x > width + r) { //if statement changes x back to -150 once it is beyond the canvas width and radius combined
        x = -r;
    }
    ellipse(x, y, r);
} 

