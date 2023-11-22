// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

/*

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

  if (foundedMail === true) {
    console.log('YES')
  } else {
    console.log('NO')
  }

}

*/

// TEST CON INPUT TYPE TEXT E BUTTON

// Dichiaro l'input Mail
const userMail = document.getElementById('email');

// Dichiaro il bottone "Verifica Email"
const verify = document.getElementById('verifyEmail');

// Dichiaro lo span di validità della Mail
const textOutput = document.getElementById('textOutput');

// Array delle Mail 
const mailList = ['tizio.tizio@gmail.com', 'caio.caio@gmail.com', 'test.test@gmail.com']

// Definisco la variabile (in caso di corrispondenza Mail-Array)
let foundedMail;

// Al click del bottone genera
verify.addEventListener('click',

  function() {

    userInput = userMail.value;

    for (let i = 0; i < mailList.length; i++) {
  
      if (userInput === mailList[i]) {
        // stampa un messaggio appropriato sull’esito del controllo
        foundedMail = true;
      }
    
      if (foundedMail === true) {
        console.log('YES')
      } else {
        console.log('NO')
      }
    
    }    

  }

)