/* Jesús Andrade
FALL2022 N220 
Data Driven Display
*/



 let ghst = {
    //main shape of ghost
    bodyX1: 346, bodyY1: 123,
    bodyX2: 452, bodyY2: 123,
    bodyX3: 476, bodyY3: 146,
    bodyX4: 476, bodyY4: 237,
    bodyX5: 494, bodyY5: 232,
    bodyX6: 479, bodyY6: 254,
    bodyX7: 463, bodyY7: 254,
    bodyX8: 485, bodyY8: 264,
    bodyX9: 449, bodyY9: 278,
    bodyX10: 345, bodyY10: 277,
    bodyX11: 323, bodyY11: 252,
    bodyX12: 323, bodyY12: 147, 

    //eyes
    eyeW: 23,
    eyeH: 62,
    rEyeX: 410,
    rEyeY: 202,
    lEyeX: 346,
    lEyeY: 209,
    
    //left horn
    hrnX1: 323, hrnY1: 114,
    hrnX2: 340, hrnY2: 77,
    hrnX3: 340, hrnY3: 111,
    hrnX4: 346, hrnY4: 123,
    hrnX5: 323, hrnY5: 147,

    //right horn
    rhrnX1: 449, rhrnY1: 75,
    rhrnX2: 477, rhrnY2: 113,
    rhrnX3: 469, rhrnY3: 155,
    rhrnX4: 435, rhrnY4: 130,
    rhrnX5: 449, rhrnY5: 111,

    //mouth
    mX1:361, mY: 251,
    mX2: 409,

    //teeth
    tX1: 360, tY1:251,
    tX2: 372, tY2:251,
    tX3: 365, tY3:259
    
 }

 function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(180, 250, 100);
    ghosty(ghst);
    
}

function ghosty(ghst) {
    fill(100, 0, 250);
    noStroke();
    beginShape();
    vertex(ghst.bodyX1, ghst.bodyY1);
    vertex(ghst.bodyX2, ghst.bodyY2);
    vertex(ghst.bodyX3, ghst.bodyY3);
    vertex(ghst.bodyX4, ghst.bodyY4);
    vertex(ghst.bodyX5, ghst.bodyY5);
    vertex(ghst.bodyX6, ghst.bodyY6);
    vertex(ghst.bodyX7, ghst.bodyY7);
    vertex(ghst.bodyX8, ghst.bodyY8);
    vertex(ghst.bodyX9, ghst.bodyY9);
    vertex(ghst.bodyX10, ghst.bodyY10);
    vertex(ghst.bodyX11, ghst.bodyY11);
    vertex(ghst.bodyX12, ghst.bodyY12);
    endShape(); 
    //eyes
    fill(250);
    ellipse(ghst.rEyeX, ghst.rEyeY, ghst.eyeW, ghst.eyeH);
    ellipse(ghst.lEyeX, ghst.lEyeY, ghst.eyeW - 2, ghst.eyeH - 10);
    //horns
    fill(10);
    beginShape();
    vertex(ghst.hrnX1, ghst.hrnY1);
    vertex(ghst.hrnX2, ghst.hrnY2);
    vertex(ghst.hrnX3, ghst.hrnY3);
    vertex(ghst.hrnX4, ghst.hrnY4);
    vertex(ghst.hrnX5, ghst.hrnY5);
    endShape();
    //right horn
    beginShape();
    vertex(ghst.rhrnX1, ghst.rhrnY1);
    vertex(ghst.rhrnX2, ghst.rhrnY2);
    vertex(ghst.rhrnX3, ghst.rhrnY3);
    vertex(ghst.rhrnX4, ghst.rhrnY4);
    vertex(ghst.rhrnX5, ghst.rhrnY5);
    endShape();
    //mouth
    stroke(0);
    strokeWeight(2);
    line(ghst.mX1, ghst.mY, ghst.mX2, ghst.mY);
    //teeth
    noStroke();
    fill(250);
    triangle(ghst.tX1, ghst.tY1, ghst.tX2, ghst.tY2, ghst.tX3, ghst.tY3);
    triangle(ghst.tX1 + 40, ghst.tY1, ghst.tX2 + 38, ghst.tY2, ghst.tX3 + 40, ghst.tY3 + 2);
    
}