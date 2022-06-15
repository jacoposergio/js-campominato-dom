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


const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', startGame);

// ! HTML Elements
const mainGrid = document.querySelector('#main-grid');


function startGame() {

// ! Quando l'utente avvia una nuova partita svuoto la griglia
// !e svuoto le classi
mainGrid.innerHTML = '';
mainGrid.className = '';

// ! numero di bombe
const numberOfBombs = 5;


    // ! prendo la difficoltà dal valore inserito dall'utente 
const userLevel = document.getElementById("user-level").value;
console.log("difficoltà",userLevel);

   // ! con lo switch imposto i range di difficoltà per i da 1 a 3
let gameMaxRange;
switch (userLevel) {
    case '1':
        gameMaxRange = 100;
        mainGridClass = 'easy';
        break;
    case '2':
        gameMaxRange = 81;
        mainGridClass = 'hard';
        break;
    default:
        gameMaxRange = 49;
        mainGridClass = 'crazy';
        break;
    }

    console.log("gamemaxrange",gameMaxRange);

// ! genero le bombe

  const bombs = generateBombs(numberOfBombs, 1, gameMaxRange);
// !   numero massimo di tentativi
  const maxAttemps = gameMaxRange - numberOfBombs;
  console.log("generatebomb",bombs);

// !  array numeri azzeccati 
const successfulNumbers = [];  
  

generateGrid();
    
    function generateGrid() {
        // ! dare classe con dimensione grigia
        // ! creare cella
        // ! aggiungere testo
        // ! aggiungere una classe

    mainGrid.classList.add(mainGridClass);

    // ! genero i numeri da 1 a game max range
    for(let i = 1; i <= gameMaxRange; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = `<span>${i}</span>`;
        newCell.classList.add('square');
        newCell.addEventListener('click', handleCellClick );


        // ! aggiungere il testo
        // ! aggiungere una classe etc...
        mainGrid.append(newCell);
        }
    }

            function handleCellClick() {
                alert('ciao')
            }
}  // ! fine della funzione start game







// !||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
   // !                    UTILITY    FUNCTIONS
 // !||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

 // ! funzione per generare le bombe
function generateBombs(numberOfElements, rangeMin, rangeMax) {
    // ! creo l 'array vuoto da riempire
const randomNumbersArray = [];
// ! uso il ciclo while per mettere la condizione che deve scorrere finchè non trova solo numeri diversi,
// ! gameMaxRange darà il range del livello scelto
while(randomNumbersArray.length < numberOfElements) {
    const randomNumber = getRndInteger (rangeMin, rangeMax);
    if(!randomNumbersArray.includes(randomNumber)) {
        randomNumbersArray.push(randomNumber);
    }
   
   }
   return randomNumbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

