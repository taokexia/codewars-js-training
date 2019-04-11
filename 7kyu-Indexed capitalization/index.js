// Given a string and an array of integers representing indices, capitalize all letters 
// at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// Be sure to also try:
// Alternate capitalization https://www.codewars.com/kata/59cfc000aeb2844d16000075
// String array revisal https://www.codewars.com/kata/59f08f89a5e129c543000069

function capitalize(s,arr){
  return arr.reduce((str, i) => {
    s = s[i] ? s.substring(0,i) +s[i].toUpperCase()+s.substring(i+1) : s
    return s
  }, s)
}

// function capitalize(s,arr){
//   return [...s].map((x,i)=>arr.includes(i)?x.toUpperCase():x).join('')
// };

// Sample Test
const assert = require('assert')
describe("Basic tests", function(){
  assert.strictEqual(capitalize("abcdef",[1,2,5]),'aBCdeF');
  assert.strictEqual(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
  assert.strictEqual(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
  assert.strictEqual(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
  assert.strictEqual(capitalize("codewarriors",[5]),'codewArriors');
  assert.strictEqual(capitalize("indexinglessons",[0]),'Indexinglessons');
});