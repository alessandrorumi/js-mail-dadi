// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Chiedi all’utente la sua email
const userInput = prompt('Qual è la tua mail?');
console.log(userInput);

// controlla che sia nella lista di chi può accedere
const mailList = ['tizio.tizio@gmail.com', 'caio.caio@gmail.com', 'test.test@gmail.com']
console.log(mailList);

for (let i = 0; i < mailList.length; i++) {
  
  if (userInput === mailList[i]) {
    // stampa un messaggio appropriato sull’esito del controllo
    console.log('test mail accettata con prompt riuscito!')
  } else {
    console.log('test mail rifiutata con prompt riuscito!')
  }

}


