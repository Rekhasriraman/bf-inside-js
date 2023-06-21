'use strict';

let userInput = '';
while (true) {
userInput = prompt('Tell me something about frogs');

/* -- BEGIN: validate input -- */
if (userInput === '' || userInput === null) {
alert('That is not something.');
continue; 
}

if (/frog/i.test(userInput)) {
break; 
}

alert('Nope, not about frogs. Try again.');
/* -- END: validate input -- */
}

const finalMessage =
'I just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);