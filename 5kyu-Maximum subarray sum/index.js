// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence 
// in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the 
// sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is 
// also a valid sublist/subarray.

var maxSequence = function(arr){
  if(arr.length === 0) return 0
  var res = 0
  var sum = 0
  for(var i = 0; i < arr.length-1; i++) {
    sum = arr[i]
    if(sum > res) res = sum
    for(var j = i+1; j < arr.length; j++) {
      sum+= arr[j]
      if(sum > res) res = sum
    }
  }
  return res
}

// var maxSequence = function(arr){
//   var min = 0, ans = 0, i, sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// }
// When the 'min' changing, means the left-array will be abandoned
// It similar with Kadane's algorithm
// https://en.wikipedia.org/wiki/Maximum_subarray_problem
// run time is O(n) easy than using divide and conquer

// Sample Test:
const assert = require('assert')
describe( "maxSequence", function(){
  it("should work on an empty array",function(){
    assert.strictEqual(maxSequence([]), 0);
  })
  it("should work on the example",function(){
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  })
  it("should work on the example",function(){
    assert.strictEqual(maxSequence([ -12, -46, -47, 29, -27, -8, 34, -28, -49, -32, 5 ]), 34);
  })
});