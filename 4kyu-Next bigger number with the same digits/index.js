// You have to create a function that takes a positive integer number and returns the next 
// bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// Method1: too Slow
// function nextBigger(n){
//   var res = -1
//   var str = (n + '').split('')
//   getNumber(str, '', n, '')
//   return res
//   function getNumber(arr, s, num, ns) {
//     if(arr.length === 0) {
//       var cs = Number(s)
//       if(num < cs) {
//         if(res === -1) res = cs
//         else if (res > cs) {
//           res = cs
//         }
//       }
//     } else {
//       arr.forEach((item, index) => {
//         var t1 = s+item
//         var t2 = ns+arr[index]
//         if(Number(t1) >= Number(t2))
//           getNumber([...arr.slice(0, index), ...arr.slice(index+1)], t1, num, t2)
//       })
//     }
//   }
// }

// use pointer from end, not deal from front.
function nextBigger(n){
  var s  = n + ''
  var l =  s.length-1
  var last = s[l]
  while( l >= 0 && last <= s[--l]) {
    last = s[l]
  }
  if(l < 0) return -1
  var arr = s.split('')
  var narr = [...arr.slice(l)]
  var larr = [...arr.slice(0, l)]
  var nstr = narr.join('')
  var res = -1
  getNumber(narr, '', nstr, '')
  return Number(larr.join('') + res)
  function getNumber(arr, s, num, ns) {
    if(arr.length === 0) {
      var cs = Number(s)
      if(num < cs) {
        if(res === -1) res = cs
        else if (res > cs) {
          res = cs
        }
      }
    } else {
      arr.forEach((item, index) => {
        var t1 = s+item
        var t2 = ns+arr[index]
        if(Number(t1) >= Number(t2))
          getNumber([...arr.slice(0, index), ...arr.slice(index+1)], t1, num, t2)
      })
    }
  }
}

// other solution
// const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };
// function nextBigger(n){
//   let arr = sortedDigits(n);
//   let max = parseInt(arr.join(''), 10);
//   for(var i = n + 1; i <= max; i++){
//     if(sortedDigits(i).every((x, j) => x === arr[j])){
//       return i;
//     }
//   }
//   return -1;
// }

// Sample Test:
const assert = require('assert')
assert.strictEqual(nextBigger(12),21)
assert.strictEqual(nextBigger(513),531)
assert.strictEqual(nextBigger(2017),2071)
assert.strictEqual(nextBigger(414),441)
assert.strictEqual(nextBigger(144),414)





