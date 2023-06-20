'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = 'user name';
const secretInformation = 'password';
const warningMessage = 'invalid';
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay = isLoggedIn ? secretInformation : warningMessage;

console.log(toDisplay);

console.log('-- end --');
