//var for div that will hold the js created divs
let divContainer = document.getElementById("divContainer"); 

//given array of objects
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];


//on click function
function makeDiv() {
    //for loops through "objects" array and creates a new element that takes info from array and sets it to its styles
    for (let i = 0; i < objects.length; i++) {
        
        //var set to the created element
        let newDiv = document.createElement("div");
        
        //w x h info is originally a num so .toString changes it to "" and appends px so the browser can read it as a measurement. 
        newDiv.style.height = objects[i].height.toString() + "px";
        newDiv.style.width = objects[i].width.toString() + "px";
        newDiv.style.backgroundColor = objects[i].color;
        
        //adds the newly created divs to the html
        divContainer.appendChild(newDiv); 
    }
}