// Create a function (or write a script in Shell) that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.
const assert = require('assert')

function even_or_odd(number) {
  return Math.abs(number) % 2 === 1 ? 'Odd' : 'Even'
}

// Sample Tests:
assert.strictEqual(even_or_odd(2), "Even")
assert.strictEqual(even_or_odd(0), "Even")
assert.strictEqual(even_or_odd(7), "Odd")
assert.strictEqual(even_or_odd(1), "Odd")