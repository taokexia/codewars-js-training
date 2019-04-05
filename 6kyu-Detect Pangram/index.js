// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.

function isPangram(string){
  return Object.keys(string.toLowerCase().replace(/\s|[^a-z]/g, '')
    .split('').reduce((c, i) =>{ !c[i] ? c[i]=1 : (c[i]++); return c }, {}))
    .length === 26 ? true : false
}

// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }

// Sample Tests:
const assert = require('assert')
describe('Test my isPangram function', () => {
  it('isPangram("The quick brown fox jumps over the lazy dog.") should return true', ()=> {
    assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true)
  })
  it('isPangram( "This is not a pangram.") should return true', ()=> {
    assert.strictEqual(isPangram( "This is not a pangram."), false)
  })
})