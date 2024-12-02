//Assegno le variabili al DOM
const km = document.getElementById('kmField');
const name = document.getElementById('nameField');
const eta = document.getElementById('etaField');
const result = document.getElementById('result');
const generate = document.getElementById('generate');
const reset = document.getElementById('reset');

//Assegno le variabili al ticket
let tName = document.getElementById('ticketName');
let tOff = document.getElementById('ticketOff');
let tCarr = document.getElementById('ticketCarr');
let tCpCode = document.getElementById('ticketCpCode');
let tPrice = document.getElementById('ticketPrice');

//Assegno le variabili che abbiamo
const scontoUnder = 0.8;
const scontoOver = 0.6;
const kmPrice = 0.21;

//Functions
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}



// const prezzoBase = km * prezzoPerKm;
// let prezzoScontato;
// if (eta < 18)
// {
//   prezzoScontato = prezzoBase * scontoUnder;
//   console.log("il prezzo del biglietto è €", prezzoScontato.toFixed(2));
// } else if(eta > 65)
// {
//   prezzoScontato = prezzoBase * scontoOver;
//   console.log("il prezzo del biglietto è €", prezzoScontato.toFixed(2));
// } else 
// {
//   console.log("il prezzo del biglietto è €", prezzoBase.toFixed(2));
// }