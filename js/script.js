// TODO|L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in /// TODO|cui ogni cella contiene un numero tra quelli compresi in un range:
// TODO|con difficoltà 1 => tra 1 e 100
// TODO|con difficoltà 2 => tra 1 e 81
// TODO|con difficoltà 3 => tra 1 e 49
// TODO|Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// TODO|I numeri nella lista delle bombe non possono essere duplicati.
// TODO|In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// TODO|La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// TODO|Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// TODO|BONUS:
// TODO|1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// TODO|2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

// ! Game Settings 



const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', startGame);


function startGame() {

// ! numero di bombe
const numberOfBombs = 5;


    // ! prendo la difficoltà dal valore inserito dall'utente 
const difficulty = document.getElementById("user-level").value;
console.log("difficoltà",difficulty);

   // ! con lo switch imposto i range di difficoltà per i da 1 a 3
let gameMaxRange;
switch (difficulty) {
    case '1':
        gameMaxRange = 100;
        break;
    case '2':
        gameMaxRange = 81;
        break;
    default:
        gameMaxRange = 49;
        break;
    }

    console.log("gamemaxrange",gameMaxRange);

  const bombs = generateBombs(numberOfBombs, 1, gameMaxRange);
  
  const maxAttemps = gameMaxRange - numberOfBombs;
  console.log("",maxAttemps);

// !  array numeri azzeccati 
// const successfulNumbers = [];  
  
}


// // ! creare la cella con i numeri 
// const mainGrid = document.querySelector('#main-grid')


// for (let i = 1 ; i <= gameMaxRange; i++){
// // !    creo i quadrati
// const newSquare = document.createElement('div');
// // ! popolo il numero
// newSquare.innerHTML = `<span>${i}</span>` ;
// // ! aggiungere a square la classe
// newSquare.classList.add('square');

// }




// !||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
   // !                    UTILITY    FUNCTIONS
 // !||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

 // ! funzione per generare le bombe
function generateBombs(numberOfElements, rangeMin, rangeMax) {
    // ! creo l 'array vuoto da riempire
const bombsArray = [];
// ! uso il ciclo while per mettere la condizione che deve scorrere finchè non trova solo numeri diversi,
// ! gameMaxRange darà il range del livello scelto
while (bombsArray.length < numberOfElements) {
    const randomNumber = getRndInteger (rangeMin, rangeMax);
    if(!bombsArray.includes(randomNumber)){
        bombsArray.push(randomNumber);
    }
    return bombsArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}