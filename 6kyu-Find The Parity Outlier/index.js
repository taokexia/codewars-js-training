// You are given an array (which will have a length of at least 3, but could be very large) containing 
// integers. The array is either entirely comprised of odd integers or entirely comprised of even integers 
// except for a single integer N. Write a method that takes the array as an argument and returns this 
// "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
  var i0 = Math.abs(integers[0]) % 2
  var i1 = Math.abs(integers[1]) % 2
  var i2 = Math.abs(integers[2]) % 2
  if(i0 === i1)
    return (integers.filter(i => Math.abs(i) % 2 !== i0))[0]
  else if(i1 === i2)
    return integers[0]
  else
    return integers[1]
}

// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }

// Sample Test:
const assert = require('assert')
assert.strictEqual(findOutlier([0, 1, 2]), 1)
assert.strictEqual(findOutlier([1, 2, 3]), 2)
assert.strictEqual(findOutlier([2,6,8,10,3]), 3)
assert.strictEqual(findOutlier([0,0,3,0,0]), 3)
assert.strictEqual(findOutlier([1,1,0,1,1]), 0)