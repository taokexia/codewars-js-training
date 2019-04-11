// Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
  if(num === 1) return num
  return num+summation(num-1)
}

// const summation = n => n * (n + 1) / 2;

// Sample Test:
const assert = require('assert')
describe('summation', function () {
  it('should return the correct total', function () {
    assert.strictEqual(summation(1), 1)
    assert.strictEqual(summation(8), 36)
  })
})