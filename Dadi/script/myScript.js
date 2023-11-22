// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare un numero random da 1 a 6 (giocatore)
const userRandomNumber = Math.floor(Math.random() * 6 + 1);
document.getElementById('userOutput').innerHTML = `Il tuo numero è ${userRandomNumber}`;

// Generare un numero random da 1 a 6 (pc)
const computerRandomNumber = Math.floor(Math.random() * 6 + 1);
document.getElementById('computerOutput').innerHTML = `Il numero del computer è ${computerRandomNumber}`;

// Confronto tra i due numeri random
if (userRandomNumber > computerRandomNumber) {
  document.getElementById('result').innerHTML = 'Hai Vinto!';

} else if (userRandomNumber < computerRandomNumber) {
  document.getElementById('result').innerHTML = 'Hai Perso!';

} else {
  document.getElementById('result').innerHTML = 'Pareggio';
}