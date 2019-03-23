const assert = require('assert');
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
// Solution:
function findShort(s){
  return s.split(' ').reduce((min, item) => Math.min(min, item.length), Infinity)
}

assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
  