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
const userMessageDiv = document.querySelector('#userMessage');


function startGame() {

// ! Quando l'utente avvia una nuova partita svuoto la griglia
// !e svuoto le classi
mainGrid.innerHTML = '';
mainGrid.className = '';
// userMessageDiv.innerHTML = '';

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
  
// ! FUNZIONE PER GENERARE LA TABELLA

generateGrid();
    
    function generateGrid() {
        // ! dare classe con dimensione grigia
        // ! creare cella
        // ! aggiungere testo
        // ! aggiungere una classe

    mainGrid.classList.add(mainGridClass);

    // ! genero GLI SQUARE da 1 a game max range
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

    // ! gestisce il click su ogni cella
            function handleCellClick() {
                // !Rendiamo la cella non più cliccabile
                this.style.pointerEvents = 'none';
                // console.log('sono clickato');
                
// !              leggere il numero nello span e fare un parseInt
      let cellNumber = parseInt(this.querySelector('span').innerHTML);
      console.log("",cellNumber);
// !      se il numero è incluso in bombs la cella diventa rossa

      if(bombs.includes(cellNumber)) {
        this.classList.add('bomb');
        // endGame('lost', successfulNumbers);
      }else{
        this.classList.add('not-bomb');
      }



   function endGame (gameResult) {
    if (gameResult === 'won') {
        userMessageDiv.innerHTML = 'Hai vinto';
    }else {
        userMessageDiv.innerHTML = `Hai perso. hai azzeccato ${ successfulNumbers.length} numeri`;
    }

    // !rendo tutte le celle non cliccabili e scopro tuttle le bombe
     const allSquares = document.querySelectorAll('.square');
     console.log("",allSquares);
     for(let i = 0; i < allSquares.length; i ++) {
        const thisSquare = allSquares[i];

        // ! rendo non cliccabile
        thisSquare.style.pointerEvents = 'none';

        // ! se il numero è tra le bombe, aggiungo la classe .bomb
         const thisSquareNumber = parseInt(thisSquare.querySelector('span').innerHTML);
         if(bombs.includes(thisSquareNumber)) {
            thisSquare.classLis.add('bomb');
         }
     }


   }

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

