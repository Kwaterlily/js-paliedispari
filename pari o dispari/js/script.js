// Pari e Dispari
// L’utente  indica il suo nome e sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5)
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari 
// Dichiariamo la vincita o la perdita.

var nomeUtente = prompt("Scrivi il tuo nome");
var sceltaUtente = prompt("Scegli pari o dispari");
while (sceltaUtente != "pari" && sceltaUtente != "dispari") {
  sceltaUtente = prompt("Per favore, scrivi correttamente la tua scelta: se 'pari' o 'dispari'");
}
var numeroUtente = parseInt(prompt("Ora scegli un numero da 1 a 5"));
while (numeroUtente <= 0 || numeroUtente > 5) {
  numeroUtente = parseInt(prompt("Ora scegli un numero da 1 a 5"));
}
console.log("numeroUtente " + numeroUtente);
var numeroComputer = generaNumeroRandom(1, 5);
console.log("numeroComputer " + numeroComputer);
var somma = numeroUtente + numeroComputer;
console.log("somma " + somma);

if (somma % 2 == 0) {
  var vincita = "pari";
  document.getElementById("risultato-somma").innerHTML = " La somma é un numero pari";
  console.log("la somma è pari")
} else {
  var vincita = "dispari";
  console.log("la somma è dispari")
  document.getElementById("risultato-somma").innerHTML = " La somma é un numero dispari";

};

if (sceltaUtente == vincita) {
  document.getElementById("vincita").innerHTML = nomeUtente + " hai vinto!!";
} else {
  document.getElementById("vincita").innerHTML = nomeUtente + " peccato, hai perso :(";
}

function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("scelta-utente").innerHTML = sceltaUtente + " è la tua scelta";
document.getElementById("numero-utente").innerHTML = numeroUtente + " è il numero scelto";
document.getElementById("numero-computer").innerHTML = numeroComputer + " è il numero scelto dal computer";
document.getElementById("somma").innerHTML = " La somma dei due numeri è " + somma;