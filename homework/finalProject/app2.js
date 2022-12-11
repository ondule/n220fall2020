//Shuffle array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let cardsArray = [
  { value: '0', image:"./images/0.jpg", match: false},
  { value: '1', image:"./images/1.jpg", match: false },
  { value: '2', image:"./images/2.jpg", match: false },
  { value: '3', image:"./images/3.jpg", match: false },
  { value: '4', image:"./images/4.jpg", match: false },
  { value: '5', image:"./images/5.jpg", match: false },
  { value: '6', image:"./images/6.jpg", match: false },
  { value: '7', image:"./images/7.jpg", match: false },
  { value: '0', image:"./images/0.jpg", match: false },
  { value: '1', image:"./images/1.jpg", match: false },
  { value: '2', image:"./images/2.jpg", match: false },
  { value: '3', image:"./images/3.jpg", match: false },
  { value: '4', image:"./images/4.jpg", match: false },
  { value: '5', image:"./images/5.jpg", match: false },
  { value: '6', image:"./images/6.jpg", match: false },
  { value: '7', image:"./images/7.jpg", match: false },
]

let cardClass = document.querySelectorAll(".card");
let firstGuess = null;
let canGuess = true;
shuffle(cardsArray);

cardClass.forEach(function (card, index) {
  card.addEventListener('click', function () {
    if (index === firstGuess || cardsArray[index].match === true || canGuess === false) {
      console.log("invalid guess");
      return
    }
    let clickedCard = cardsArray[index]
    card.style.backgroundImage = `url(${clickedCard.image})`;
    if (firstGuess === null) {
      firstGuess = index
    } else {
      //second guess
      if (cardsArray[firstGuess].value === cardsArray[index].value) {
        cardsArray[firstGuess].match = true;
        cardsArray[index].match = true;
        console.log("IT'S A MATCH")
        firstGuess = null;
        //check for win
      } else {
        canGuess = false;
        setTimeout(function() {
          cardClass[firstGuess].style.backgroundImage = `url(./images/back.jpg)`;
          cardClass[index].style.backgroundImage = `url(./images/back.jpg)`;
          console.log("no match")
          firstGuess = null;
          canGuess = true;
        }, 1200)
        //no match
        
        //alert('no match');
      }
    }
    
    
  })
})

///