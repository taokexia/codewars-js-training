// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  // your code here
  return array.reduce((sum,i) => sum + i, 0) / array.length
}

// Sample Test:
const assert = require('assert')
assert.strictEqual(find_average([1,1,1]), 1);
assert.strictEqual(find_average([1,2,3]), 2);