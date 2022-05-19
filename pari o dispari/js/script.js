// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const numeriGenerati = document.getElementById("pariODispari");
const numeriGeneratiDalPc = document.getElementById("pariODispari2");
const ilVincitore = document.getElementById("pariODispari3");

let numPc;
numPc = generaNum ();
// Generiamo un numero random (sempre da 1 a 5
function generaNum() {
    let numPc = Math.floor(Math.random() * 5) + 1;
    console.log (numPc);
    return numPc;
  }

let sceltagGiocatore;  
let numUtente;
let somma;

numUtente = parseInt(prompt ("scegliere un numero da 1 a 5 "));


sceltagGiocatore = (prompt (" Indicare se il numero scelto sia pari o dispari"));



somma = numUtente + numPc;
console.log (somma);

// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari 

function vincitore () {
    if (somma % 2 == 0 && sceltagGiocatore == "pari") {
        console.log("congratulazioni, hai vinto!");
    } else if (somma % 2 !== 0 && sceltagGiocatore == "pari") {
        console.log("spiacente, hai perso!");
        
    }  else if (somma % 2 !== 0 && sceltagGiocatore == "dispari") {
        console.log("congratulazioni, hai vinto!");
    } else if (somma % 2 == 0 && sceltagGiocatore == "dispari") {
        console.log("spiacente, hai perso!");
    }  
}
// Dichiariamo chi ha vinto.
numeriGenerati.append(`la scelta dell'utente é: ${numUtente} ${sceltagGiocatore}`);
numeriGeneratiDalPc.append(`la scelta del computer é: ${numPc} ${sceltagGiocatore}`);
ilVincitore.append(`Il vincitore é: `);





