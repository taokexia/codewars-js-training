// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

// Examples
//   pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//   pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  //Code here
  return str.split(' ').map(i => i.match(/[A-Za-z]/g) ? i.substring(1)+i[0]+'ay' : i).join(' ')
}

// Sample Tests:
const assert = require('assert')
assert.strictEqual(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
assert.strictEqual(pigIt('This is my string'),'hisTay siay ymay tringsay')