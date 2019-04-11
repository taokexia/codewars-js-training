// Your goal in this kata is to implement a difference function, which subtracts one list from 
// another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  return a.filter(i => b.indexOf(i) === -1)
}

// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }

// Sample Tests
const assert = require('assert')
describe("Sample tests", function() {
  it("Should pass Sample tests", function() {
    assert.deepEqual(array_diff([], [4,5]), [])
    assert.deepEqual(array_diff([3,4], [3]), [4])
    assert.deepEqual(array_diff([1,8,2], []), [1,8,2])
  })
})