//getting the div and button elements and assigning them to a variable
let quest = document.getElementsByClassName("quest");
let dispAnswr = document.getElementById("answer");



//for loop adds a click event listener to all buttons
for (let i = 0; i < quest.length; i++) {
    quest[i].addEventListener("click", seeAnswer);
}


function seeAnswer(event) {
    dispAnswr.innerHTML = event.target.getAttribute("data-answer");
}

