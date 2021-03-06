// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) 
// in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
//, [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
//, [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
//, None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
//, [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. 
// Be sure your code doesn't time out.

var sum_pairs=function(ints, s){
  var count = {}
  var t
  for(var i = 0; i < ints.length; i++) {
    t = s - ints[i]
    if(count[t] !== undefined) {
      return [count[t], ints[i]]
    } else {
      count[ints[i]] = ints[i]
    }
  }
}

// var sum_pairs = function(ints, s) {
//   set = new Set();
//   for (let i of ints) {
//     if (set.has(s - i)) {
//       return [ s - i, i ];
//     }
//     set.add(i);
//   }
// }

// Sample Tests:
l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

const assert = require('assert')
describe("Testing For Sum of Pairs", function(){
  it("Basic: ["+l1+"] should return [1, 7] for sum = 8", () => { 
    assert.deepEqual(sum_pairs(l1, 8)+"", [1, 7]+"")
  })
  it("Negatives: ["+l2+"] should return [0, -6] for sum = -6", () => { 
    assert.deepEqual(sum_pairs(l2, -6)+"", [0, -6]+"")
  })
  it("No Match: ["+l3+"] should return undefined for sum = -7", () => { 
    assert.deepEqual(sum_pairs(l3, -7), undefined)
  })
  it("First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ", () => { 
    assert.deepEqual(sum_pairs(l4, 2)+"", [1, 1]+"")
  })
  it("First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ", () => { 
    assert.deepEqual(sum_pairs(l5, 10)+"", [3, 7]+"")
  })
  it("Duplicates: ["+l6+"] should return [4, 4] for sum = 8", () => { 
    assert.deepEqual(sum_pairs(l6, 8)+"", [4, 4]+"")
  })
  it("Zeroes: ["+l7+"] should return [0, 0] for sum = 0", () => { 
    assert.deepEqual(sum_pairs(l7, 0)+"", [0, 0]+"")
  })
  it("Subtraction: ["+l8+"] should return [13, -3] for sum = 10", () => { 
    assert.deepEqual(sum_pairs(l8, 10)+"", [13, -3]+"")
  })
})