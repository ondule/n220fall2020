let text = ""

let myFavs = ["Pizza", "Cats", "My Boo", "Botany"];
myFavs.forEach(myFunction);
let myDiv = document.getElementById("myDiv").innerHTML = text;



function myFunction(item) {
    text += item + " is one of my favorite things" + "<br>";
}


