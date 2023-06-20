'use strict';

console.log('-- begin --');

const school = 'HackYourFuture';

/*for (const letter of school) {
  console.log(letter);
}*/

// write this for...of loop as a for loop:

for (let i = 0; i < school.length; i++) {
  console.log(school[i]);
}

// write this for loop as a while loop:
let x = 0;
while (x < school.length) {
  console.log(school[x]);
  x++;
}

console.log('-- end --');
