/* 
Jesús Andrade
N220 FALL 2022
*/


//Drawing Drawer

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(50, 167, 120);
    ghosty(0, 100); //center ghost
    ghosty(200, 200); //right hand corner
    ghosty(-400, -400); //upper left
    ghosty(mouseX, mouseY); //ghost follows mouse
    

    
}

function ghosty(x, y) {
    translate(x, y);// adjust coordinates when function is called
    noStroke(); //removes outlines 
    fill(255, 158, 158,); //pink color
    rect(352, 233, 88, 98, 80); //body
    triangle(352, 280, 352, 336, 364, 316); //far left limb
    triangle(368, 321, 385, 326, 380, 336); //left limb
    triangle(405, 326, 412, 336, 424, 321); //right limb
    triangle(424, 321, 440, 336, 440, 280); //far right limb
    fill(255); //white eye color
    ellipse(380, 277, 25, 28); // left eye
    ellipse(412, 277, 25, 28); //right eye
    fill(0, 100, 255); //iris color
    ellipse(375, 276, 9, 11); //left iris
    ellipse(407, 276, 9, 11); //right iris
}