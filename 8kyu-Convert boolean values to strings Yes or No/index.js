// Complete the method that takes a boolean value and return a "Yes" string for true, 
// or a "No" string for false.

function boolToWord( bool ){
  return bool ? 'Yes' : 'No'
}

// Sample Tests:
const assert = require('assert')
describe('test my function', () => {
  it('boolToWord(true) should return Yes', () => {
    assert.strictEqual(boolToWord(true), 'Yes')
  })
  it('boolToWord(false) should return No', ()=> {
    assert.strictEqual(boolToWord(false), 'No')
  })
})