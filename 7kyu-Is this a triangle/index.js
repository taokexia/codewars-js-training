// Implement a method that accepts 3 integer values a, b, c. The method should return true if a 
// triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
  var max = Math.max(...arguments)
  var min = Math.min(...arguments)
  var middle = a + b + c - max - min
  return max * max < min * min + middle * middle
}

// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }

// Sample Test:
const assert = require('assert')
describe("PublicTest", function() {
  assert.strictEqual(isTriangle(1,2,2), true);
  assert.strictEqual(isTriangle(7,2,2), false);
});