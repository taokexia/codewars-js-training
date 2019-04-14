// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str){
  return (new Set(str.toLowerCase().split(''))).size === str.split('').length
}

// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }

// function isIsogram(str){ 
//   return !/(\w).*\1/i.test(str)
// }

// Sample Test:
const assert = require('assert')
describe('Test', () => {
  it('', ()=> {
    assert.strictEqual(isIsogram("Dermatoglyphics"), true )
  })
  it('', ()=> {
    assert.strictEqual(isIsogram("isogram"), true )
  })
  it("same chars may not be adjacent", ()=> { 
    assert.strictEqual(isIsogram("aba"), false)
  })
  it("same chars may not be same case", ()=> { 
    assert.strictEqual(isIsogram("moOse"), false)
  })
  it('', ()=> { 
    assert.strictEqual(isIsogram("isIsogram"), false )
  })
  it("an empty string is a valid isogram", ()=> { 
    assert.strictEqual(isIsogram(""), true)
  })
})

