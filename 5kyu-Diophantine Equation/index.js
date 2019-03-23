// In mathematics, a Diophantine equation is a polynomial equation, 
// usually with two or more unknowns, such that only the integer solutions are sought or studied.

// In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine 
// equation of the form:

// x2 - 4 * y2 = n
// (where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

// If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

// Examples:
// solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
// solEquaStr(90002) --> "[]"
// Hint:
// x2 - 4 * y2 = (x - 2*y) * (x + 2*y)

// Solution:
// method 1:
// too slow
// function solequa(n) {
//   // your code
//   var res = []
//   for(var i = Math.ceil(n/2); i > 0;i--) {
//     for(var j = Math.ceil(i/2); j >= 0; j--) {
//       var t = (i - 2 * j) * (i + 2 * j)
//       if(t === n) {
//         res.push([i, j])
//         break
//       }
//     }
//   }
// 	return res;
// }

// method 2:
module.exports = function solequa(n) {
  // your code
  var res = []
  var i = 1
  var a,b,x,y
  while(i < n) {
    if(n % i !== 0) {
      i++
      continue
    }
    a = i
    b = n/i
    if(b < a) {
      break
    }
    if((a+b) % 2 === 1) {
      i++
      continue
    }
    x = (a+b)/2
    if((x-a) % 2 === 1) {
      i++
      continue
    }
    y = (x-a)/2
    res.push([x, y])
    i++
  }
	return res;
}

// perfect resolution:
// function solequa(n) {
//   let result = []
//   for ( let d, x, y, i=1; i <= Math.sqrt(n); i++ ) {
//     if ( Number.isInteger( d = n/i ) && Number.isInteger( x = (d+i)/2) && Number.isInteger( y = (d-i)/4)) {
//       result.push([x,y]);
//     }
//   }
//   return result;
// }


