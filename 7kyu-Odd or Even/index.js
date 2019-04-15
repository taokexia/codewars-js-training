// Task:
// Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is 
// odd or even.

// Give your answer in string format as 'odd' or 'even'.
// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// oddOrEven([0]) returns "even"
// oddOrEven([2, 5, 34, 6]) returns "odd"
// oddOrEven([0, -1, -5]) returns "even"

function oddOrEven(array) {
  return array.reduce((sum, i) => sum+i, 0) % 2 === 0 ? 'even' : 'odd'
}

// Sample Test:
const assert = require('assert')
describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.srticeEqual(oddOrEven([0]), 'even')
    assert.srticeEqual(oddOrEven([1]), 'odd')
    assert.srticeEqual(oddOrEven([]), 'even')
  });
  
  it('Even tests', () => {
    assert.srticeEqual(oddOrEven([0, 1, 5]), 'even')
    assert.srticeEqual(oddOrEven([0, 1, 3]), 'even')
    assert.srticeEqual(oddOrEven([1023, 1, 2]), 'even')
  });
  
  it('Negative Even tests', () => {
    assert.srticeEqual(oddOrEven([0, -1, -5]), 'even')
    assert.srticeEqual(oddOrEven([0, -1, -3]), 'even')
    assert.srticeEqual(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  it('Odd tests', () => {
    assert.srticeEqual(oddOrEven([0, 1, 2]), 'odd')
    assert.srticeEqual(oddOrEven([0, 1, 4]), 'odd')
    assert.srticeEqual(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  it('Negative Odd tests', () => {
    assert.srticeEqual(oddOrEven([0, -1, 2]), 'odd')
    assert.srticeEqual(oddOrEven([0, 1, -4]), 'odd')
    assert.srticeEqual(oddOrEven([-1023, -1, 3]), 'odd')
  });
});