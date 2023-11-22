// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare un numero random da 1 a 6 (giocatore)
const userRandomNumber = Math.floor(Math.random() * 6 + 1);
console.log(userRandomNumber);

// Generare un numero random da 1 a 6 (pc)
const computerRandomNumber = Math.floor(Math.random() * 6 + 1);
console.log(computerRandomNumber);

// Confronto tra i due numeri random
if (userRandomNumber > computerRandomNumber) {
  console.log('Hai Vinto');

} else if (userRandomNumber < computerRandomNumber) {
  console.log('Hai Perso');

} else {
  console.log('Pareggio');
}