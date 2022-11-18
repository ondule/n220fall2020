//getting the div elements and assigning them to a variable
squares = document.getElementsByClassName("squares");

//for loop applies the styling to all the elements with the squares class name
for (let i = 0; i < squares.length; i++) {
    const element = squares[i];
    element.style.width = "200px"
    element.style.height = "200px"
    element.style.backgroundColor = "#777"
    element.style.margin = "5px"
    element.style.float = "left"
}

//on click function changes the color of the squares
function changeColor(event) {
    //getting the attribute data and assigning it to a variable
    let color = event.target.getAttribute("data-color");
    //changing the background color the functions target using the custom html attribute value 
    event.target.style.backgroundColor = color;
}

