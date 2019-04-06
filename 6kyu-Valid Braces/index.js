// Write a function that takes a string of braces, and determines if the order of the braces is valid. 
// It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], 
// and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly 
// braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
  var isTake = []
  var valid = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for(var i = 0; i < braces.length; i++) {
    switch(braces[i]) {
      case '(':
      case '{':
      case '[':
        isTake.push(braces[i])
        break
      default:
        var t = isTake.pop()
        if(t !== valid[braces[i]])
          return false
    }
  }
  if(!isTake.length) return true
  return false
}

// Sample Test
const assert = require('assert')
describe('Sample Test', () => {
  it('validBraces( "()" ) should return true', () => {
    assert.strictEqual(validBraces( "()" ), true)
  })
  it('validBraces( "[(])" ) should return false', () => {
    assert.strictEqual(validBraces( "[(])" ), false)
  })
})