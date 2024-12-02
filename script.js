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

generate.addEventListener('click', handlerClickGenerate)

reset.addEventListener('click', handlerClickReset)

//Functions
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function handlerClickReset() {

  
  result.classList.toggle('d-none')

  name.value = ''
  km.value = ''
  eta.value = ''
 
  tName.innerText = ''
  tOff.innerText = ''
  tCarr.innerText = ''
  tCpCode.innerText = ''
  tPrice.innerText = ''
}

function handlerClickGenerate() {
  
  const prezzoBiglietto = km.value * kmPrice;
  let prezzoFinale = prezzoBiglietto 
  let message = 'Prezzo Intero'

    if(eta.value === 'minorenne'){
      prezzoFinale *= scontoUnder;
      message = 'Sconto Minorenne'
    
    }else if(eta.value === 'over65'){
        prezzoFinale *= scontoOver;
        message = 'Sconto Over 65'
    }

    console.log(prezzoFinale)

    result.classList.toggle('d-none')

    tName.innerHTML = name.value
    tOff.innerText = message
    tCarr.innerText = getRandomNumber(1,12)
    tCpCode.innerText = getRandomNumber(10000,1000000)
    tPrice.innerText = prezzoFinale.toFixed(2) + '€'
}
