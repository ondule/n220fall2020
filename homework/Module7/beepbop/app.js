let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

let myDiv = document.getElementById("myDiv");

//myDiv.innerHTML = count;
for (let i = 0; i <26; i++) {
    if(count[i] % 3 == 0) {
        myDiv.innerHTML  += " beep";
    } else if (count[i] % 5 == 0) {
        myDiv.innerHTML += " bop"; 
    } else if (count[i] % 3 && 5 == 0) {
        myDiv.innerHTML += " beep-bop"; 
    } else {
        myDiv.innerHTML += count;
    }
}

/* for (let i = 0; i <26; i++) {
    //myDiv.innerHTML = count;   
    if(count[i] % 5 == 0) {
        myDiv.innerHTML = "bop";
    }
}

for (let i = 0; i <26; i++) {
    //myDiv.innerHTML = count;   
    if (count[i] % 3 && 5 == 0) {
        myDiv.innerHTML = "beep bop";
    }
} */


    









