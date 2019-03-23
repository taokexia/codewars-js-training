const assert = require('assert');
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
// Solution:
function findShort(s){
  return s.split(' ').reduce((min, item) => Math.min(min, item.length), Infinity)
}

// Sample Tests:
describe("Example tests", ()=>{
  it('findShort("bitcoin take over the world maybe who knows perhaps") should return 3', () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
  })
  it('findShort("turns out random test cases are easier than writing out basic ones") should return 3', () => {
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
  })
});