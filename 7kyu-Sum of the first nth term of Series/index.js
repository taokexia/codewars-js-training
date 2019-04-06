// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// NOTE: In PHP the function is called series_sum().

function SeriesSum(n)
{
  return Number(Array.from({length: n}).map((i, index) => 1/(1+3*index))
    .reduce((sum, i) => sum + i, 0)).toFixed(2)
}

// function SeriesSum(n, s = 0) {
//   return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
// }

// Sample Tests:
const assert = require('assert')
describe('Test my SeriesSum function', () => {
  it('SeriesSum(1) should return "1.00"', () => {
    assert.strictEqual(SeriesSum(1), "1.00")
  })
  it('SeriesSum(2) should return "1.25"', () => {
    assert.strictEqual(SeriesSum(2), "1.25")
  })
  it('SeriesSum(3) should return "1.39"', () => {
    assert.strictEqual(SeriesSum(3), "1.39")
  })
  it('SeriesSum(4) should return "1.49"', () => {
    assert.strictEqual(SeriesSum(4), "1.49")
  })
})


