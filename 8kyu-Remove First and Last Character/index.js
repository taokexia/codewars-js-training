// It's pretty straightforward. Your goal is to create a function that removes 
// the first and last characters of a string. You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

function removeChar(str){
  return str.substring(1, str.length-1)
 };

// const removeChar = str => str.slice(1,-1)

// Sample Test:
const assert = require('assert')
describe("Tests", function(){
  it("removeChar('eloquent') should return 'loquen'", () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen')
  })
  it("removeChar('country') should return 'ountr'", () => {
    assert.strictEqual(removeChar('country'), 'ountr')
  })
  it("removeChar('person') should return 'erso'", () => {
    assert.strictEqual(removeChar('person'), 'erso')
  })
  it("removeChar('place') should return 'lac'", () => {
    assert.strictEqual(removeChar('place'), 'lac')
  })
})