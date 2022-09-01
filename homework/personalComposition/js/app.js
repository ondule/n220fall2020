function setup() {
    var purple = "#570590";
    var startX = 30;
    createCanvas(842,600);
    
    background(125, 230, 247);
        //Cat Shape 
        fill (153, 153, 153);
        noStroke()    
    beginShape();     
    vertex(330, 115); //115
    vertex(253, 204); //204
    vertex(254, 260);
    vertex(208, 334);
    vertex(253, 434);
    vertex(324, 456);
    vertex(401, 423);
    vertex(512, 456);
    vertex(621, 396);
    vertex(654, 334);
    vertex(624,276);
    vertex(575, 107); //605
    vertex(503, 204); //503
    vertex(360, 204);
    endShape(CLOSE);
    
    ////EYES
    fill (237, 220, 39);
    noStroke()
    ellipse(302, 313, 55, 55);  //left eye
    ellipse(481, 313, 55, 55);  //right eye
    fill (38, 38, 38);
    noStroke()
    ellipse(302, 313, 20, 55);  //left iris
    ellipse(481, 313, 20, 55);  //right iris
    ///whiskers
        //left whiskers
        stroke(20, 20, 20,)
    let leftS = 79; //start point 
    let leftE = 255; //endpoint 

    line(leftS, 306, leftE, 342);
    line(leftS -10, 379, leftE, 378);
    line(leftS, 477, leftE, 414);
        
    //right whiskers
    
    let rightS = 546; //start point
    let rightE = 718; ///endpoint
    
    line(rightS, 354, rightE, 319);
    line(rightS, 388, rightE +20, 388);
    line(rightS, 425, rightE, 460);

    ///nose
    fill (100, 90, 100);
    noStroke()
    triangle(365, 370, 395, 399, 425, 370);
    

    ////ears

    fill (255, 177, 236);
    noStroke()
    triangle(329,134, 264,209, 350,209); //left ear
    triangle(572,131, 514,210, 592,210); //right ear

}

