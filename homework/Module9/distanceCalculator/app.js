let dist = document.getElementById("dist") //getting html element to display result  

function checkDist() {
    let x1 = document.getElementById('x1').value; //getting the value from the input
    let y1 = document.getElementById('y1').value; //getting the value from the input
    let x2 = document.getElementById('x2').value; //getting the value from the input
    let y2 = document.getElementById('y2').value; //getting the value from the input
    let xDiff = x2 - x1; //subtracting differences and assigning it to a variable
    let yDiff = y2 - y1; //subtracting differences and assigning it to a variable
    console.log(Math.sqrt( xDiff*xDiff + yDiff*yDiff)); //quation for finding distance outputting to console
    dist.innerHTML = "Distance: " + Math.sqrt( xDiff*xDiff + yDiff*yDiff); //displaying result to html element    
    
}




