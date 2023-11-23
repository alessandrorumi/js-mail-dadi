// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

/*

// PROMPT

// Chiedi all’utente la sua email
const userInput = prompt('Qual è la tua mail?');

// controlla che sia nella lista di chi può accedere
const mailList = ['tizio.tizio@gmail.com', 'caio.caio@gmail.com', 'test.test@gmail.com']

let foundedMail;

for (let i = 0; i < mailList.length; i++) {
  
  if (userInput === mailList[i]) {
    // stampa un messaggio appropriato sull’esito del controllo
    foundedMail = true;
  }
  
}

if (foundedMail) {
  console.log('YES')
} else {
  console.log('NO')
}

*/

// INPUT TYPE TEXT E BUTTON

// Dichiaro l'input Mail
const userMail = document.getElementById('email');

// Dichiaro il bottone "Verifica Email"
const verify = document.getElementById('verifyEmail');

// Dichiaro il bottone "Verifica Email"
const undo = document.getElementById('undoEmail');

// Dichiaro lo span (Mail output a schermo)
const output = document.getElementById('textOutput');

// Array delle Mail 
const mailList = ['tizio.tizio@gmail.com', 'caio.caio@gmail.com', 'test.test@gmail.com', 'tizio.caio@gmail.com']
console.log(mailList);

// Al click del bottone Verifica Mail:
verify.addEventListener('click',

  function() {
    // Associo ad una variabile il valore della Mail
    userInput = userMail.value;

    // Definisco la variabile (in caso di corrispondenza Mail-Array)
    let foundedMail = false; // AAA VA IMPOSTATA 'FALSE' ALTRIMENTI ALLE ITERAZIONI SUCCESSIVE RIMARRA' IN MEMORIA IL RISULTATO 'TRUE'

    for (let i = 0; i < mailList.length; i++) {
  
      if (userInput === mailList[i]) {
        // Associo il risultato alla variabile (se facessi il console.log adeso risulterebbero 1 true e 2 false)
        foundedMail = true;
      }
      
    }    
// Do un output alla variabile
    if (foundedMail) {
      // Positivo
      output.innerHTML = 'La tua Mail è presente nella lista, puoi accedere!';
    } else {
      // Negativo
      output.innerHTML = 'La tua Mail non è presente nella lista, accesso negato!';
    }
    
  }

);

// Al click del bottone Annulla:
undo.addEventListener('click',

  function() {
    // Rimuovi Parametri Inseriti
    userMail.value = '';

    output.innerHTML = '';
  }

);