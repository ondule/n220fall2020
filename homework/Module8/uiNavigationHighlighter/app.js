
let allDivs = document.getElementsByClassName("divo"); //selects all divs with class name
let topDawg = document.getElementById("topDiv") //div at the top


//styles for div at the top
topDawg.style.backgroundColor = "#fa9b52";
topDawg.style.margin = "10px";
topDawg.style.height = "100px";
topDawg.style.width = "100px";
topDawg.style.textAlign = "center";
topDawg.style.fontWeight = "bold"; 

//styles all the divs in allDivs
for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].style.backgroundColor = "#03bafc";
    allDivs[i].style.margin = "10px";
    allDivs[i].style.height = "100px";
    allDivs[i].style.width = "100px";
    allDivs[i].style.textAlign = "center"; 
}

/* Each function resets the color and format then changes the div with the specified index number */
function myFunction() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "#03bafc";
        allDivs[i].style.fontWeight = "normal";
        
        if (i == 0) {
            allDivs[0].style.backgroundColor = "pink";
            allDivs[0].style.fontWeight = 'bold';
            topDawg.innerHTML = allDivs[0].innerHTML;
        } 
  }
}

 function myFunction2() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "#03bafc";
        allDivs[i].style.fontWeight = "normal";
        
        if (i == 1) {
            allDivs[1].style.backgroundColor = "pink";
            allDivs[1].style.fontWeight = 'bold';
            topDawg.innerHTML = allDivs[1].innerHTML;
    }
  }
}

function myFunction3() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "#03bafc";
        allDivs[i].style.fontWeight = "normal";
        
        if (i == 2) {
            allDivs[2].style.backgroundColor = "pink";
            allDivs[2].style.fontWeight = 'bold';
            topDawg.innerHTML = allDivs[2].innerHTML;
    }
  }
}

function myFunction4() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "#03bafc";
        allDivs[i].style.fontWeight = "normal";

        if (i == 3) {
            allDivs[3].style.backgroundColor = "pink";
            allDivs[3].style.fontWeight = 'bold';
            topDawg.innerHTML = allDivs[3].innerHTML;
    }
  }
}

function myFunction5() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "#03bafc";
        allDivs[i].style.fontWeight = "normal";

        if (i == 4) {
            allDivs[4].style.backgroundColor = "pink";
            allDivs[4].style.fontWeight = 'bold';
            topDawg.innerHTML = allDivs[4].innerHTML;
    }
  }
}

function myFunction6() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "#03bafc";
        allDivs[i].style.fontWeight = "normal";

        if (i == 5) {
            allDivs[5].style.backgroundColor = "pink";
            allDivs[5].style.fontWeight = 'bold';
            topDawg.innerHTML = allDivs[5].innerHTML;
    }
  }
} 










