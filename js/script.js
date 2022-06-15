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


function startGame() {
    // ! prendo la difficoltà dal valore inserito dall'utente 
difficulty = document.getElementById("user-level").value;
console.log("difficoltà",difficulty);

   // ! con lo switch imposto i range di difficoltà per i da 1 a 3
const numberOfBombs= 16;
let gameMaxRange;
switch(difficulty) {
    case '1':
        gameMaxRange = 100;
        break;
    case '2':
        gameMaxRange = 81;
        break;
    case '3':
        gameMaxRange = 49;
        break;
    default:
        alert('Dato che non sai scrivere scelgo per te il livello 3 😈') ;
        gameMaxRange = 49;
}
console.log(gameMaxRange);
}