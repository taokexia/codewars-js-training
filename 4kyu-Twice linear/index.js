// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered 
// (with <) sequence u (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency

function dblLinear(n) {
  var _u = [1]
  var time = 0
  dblLinear = function(num) {
    if(time > num) return _u[num]
    else {
      while(time < num/3 * 2) {
        var l1 = _u[time] * 2 + 1
        var l2 = _u[time] * 3 + 1
        var t
        if(_u.indexOf(l1) === -1) {
          t = _u.length-1
          if(_u[t] < l1) _u.push(l1)
          else {
            while(_u[t] > l1) {
              t--
            }
            _u.splice(t+1, 0, l1)
          }
        }
        if(_u.indexOf(l2) === -1) {
          t = _u.length-1
          if(_u[t] < l2) _u.push(l2)
          else {
            while(_u[t] > l2) {
              t--
            }
            _u.splice(t+1, 0, l2)
          }
        }
        time++
      }
    }
    return _u[num] 
  }
  return dblLinear(n)
}

// Best Solution:

// function dblLinear(n) {
//   var u = [1], pt2 = 0, pt3 = 0; //two pointer
//   for(var i = 1;i<=n;i++){
//     u[i] = Math.min(2* u[pt2] + 1, 3*u[pt3] + 1);
//     if(u[i] == 2 * u[pt2] + 1) pt2++;
//     if(u[i] == 3 * u[pt3] + 1) pt3++;
//   }
//   return u[n];
// }

// Sample Test:
const assert = require('assert')
describe("dblLinear",function() {
  it("Basic tests",function() {
    assert.strictEqual(dblLinear(10), 22)
    assert.strictEqual(dblLinear(20), 57)
    assert.strictEqual(dblLinear(30), 91)
    assert.strictEqual(dblLinear(50), 175)
    assert.strictEqual(dblLinear(100), 447)
  })
})