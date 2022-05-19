// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
const textUser = document.getElementById('parola-utente');
const button = document.getElementById('invio');
const risultato = document.getElementById('risultato');

function palindroma(parola){

    let parolaUtenteInversa = '';

    for (let i = 1; i <= parola.length; i++){
        parolaUtenteInversa += parola[parola.length - i]

    } if (parola === parolaUtenteInversa) {
        return "La parola é palindroma";

    } else {
        return "La parola non é palindroma";
    }   
}

button.addEventListener('click',

      function () {
          let palindromia = palindroma(textUser.value);
          risultato.innerText = palindromia;
      }
      
);
