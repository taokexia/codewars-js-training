// When no more interesting kata can be resolved, I just choose to create the new kata, 
// to solve their own, to enjoy the process --myjinxin2015 said

// Description:
// There is an array arr:

//  [1,2,3,4,6,6,6,6,8,6,4,2]
// arr contains only integers(positive, negative or 0). The length of arr >= 3.

// Task1: Write a function arrayToString. Compress the array to a string:

// "1:4+1,6:4,8:4-2"
// explain:
// 1:4+1 ---> start number is 1, total 4 number, 
//            Each number increases by 1
// 6:4   ---> number 6 repeat 4 times
// 8:4-2 ---> start number is 8, total 4 number, 
//            Each number decreases by 2
// Note1: Only more than 2 numbers increasing, decreasing or the same to be compressed. 
// Otherwise, output the original number. For example:

// arrayToString([2,1,6,12,5]) === "2,1,6,12,5"
// Note2: If there are two sequences are adjacent, and the number of the junction can be 
// used by two sequences, then the left sequence give priority to the use of this number, 
// unless it affects the compression of right sequence. Two examples:

// arrayToString([1,2,3,4,3,2,1]) === "1:4+1,3:3-1"
// (Should not compress to "1:3+1,4:4-1")
// arrayToString([1,2,3,4,3,2]) === "1:3+1,4:3-1"
// (Should not compress to "1:4+1,3,2")
// Note3: It should works for negative integers too:

// arrayToString([-1,-2,-3,-4,-3,-2]) , "-1:3-1,-4:3+1")
// Task2: Write a function stringToArray. Decompress the string(like the result above) 
// to an array(like the arr above). The inputs of function always be a valid string.

// Examples of stringToArray:

// stringToArray("1:4+1,6:4,8:4-2") === [1,2,3,4,6,6,6,6,8,6,4,2]

// stringToArray("2,1,6,12,5") === [2,1,6,12,5]

// stringToArray("1:4+1,3:3-1") === [1,2,3,4,3,2,1]

// stringToArray("1:3+1,4:3-1") === [1,2,3,4,3,2]

// stringToArray("-1:3-1,-4:3+1") , [-1,-2,-3,-4,-3,-2])

function arrayToString(arr){
  var prev1 = arr[0]
  var prev2 = arr[1]
  var count = [prev1, prev2]
  var type = prev2 - prev1
  var t
  var res = ''
  for(var i = 2; i < arr.length+1; i++) {
    t = arr[i] - prev2
    if(t === type) {
      if(count.length >= 3) {
        var g = arr[i+1] - arr[i] 
        if(g === arr[i+2] - arr[i+1] && g !== type && g !== arr[i+3] - arr[i+2]) {
          if(type < 0) res += count[0] + ':' + count.length + type + ','
          else if(type > 0) res += count[0] + ':' + count.length + '+' + type + ','
          else res += count[0] + ':' + count.length + ','
          if(g < 0) res += arr[i] + ':3' + g + ','
          else if(g > 0) res += arr[i] + ':3+' + g + ','
          else res += arr[i] + ':3' + ','
          i = i+3
          count = []
        }
      }
      count.push(arr[i])
    } else {
      if(count.length >= 3) {
        if(type < 0) res += count[0] + ':' + count.length + type + ','
        else if(type > 0) res += count[0] + ':' + count.length + '+' + type + ','
        else res += count[0] + ':' + count.length + ','
      } else {
        res += count.join(',') + ','
      }
      type = arr[i+1] - arr[i]
      count = [arr[i]]
    }
    prev1 = prev2
    prev2 = arr[i]
  }
  return res.substring(0, res.length - 1)
}

function stringToArray(str){
  var res = []
  str.split(',').map(i => {
    if(i.indexOf(':') !== -1) {
      var t = i.split(':')
      if(t[1].match(/\+/g)) {
        var all = t[1].split('+')
        var num = all[0]
        var up = Number(all[1])
        for(var i = 0; i < Number(num); i++) {
          var get = Number(t[0]) + i * up
          res.push(get)
        }
      } else if(t[1].match(/-/g)) {
        var all = t[1].split('-')
        var num = all[0]
        var down = all[1]
        for(var i = 0; i < Number(num); i++) {
          var get = t[0] - i * down
          res.push(get)
        }
      } else {
        for(var i = 0; i < Number(t[1]); i++) {
          res.push(Number(t[0]))
        }
      }
    } else {
      res.push(Number(i))
    }
  })
  return res
}

// Sample Test:
const assert = require('assert')
describe("Basic Tests", function(){
  it("It should works for basic tests", function(){
    //arrayToString:
    assert.deepEqual(arrayToString([1,2,3,4,6,6,6,6,8,6,4,2]),"1:4+1,6:4,8:4-2")
    assert.deepEqual(arrayToString([2,1,6,12,5]) , "2,1,6,12,5")
    assert.deepEqual(arrayToString([1,2,3,4,3,2,1]) , "1:4+1,3:3-1")
    assert.deepEqual(arrayToString([1,2,3,4,3,2]) , "1:3+1,4:3-1")
    assert.deepEqual(arrayToString([-1,-2,-3,-4,-3,-2]) , "-1:3-1,-4:3+1")

    //stringToArray:
    assert.deepEqual(stringToArray("1:4+1,6:4,8:4-2") , [1,2,3,4,6,6,6,6,8,6,4,2])
    assert.deepEqual(stringToArray("2,1,6,12,5") , [2,1,6,12,5])
    assert.deepEqual(stringToArray("1:4+1,3:3-1") , [1,2,3,4,3,2,1])
    assert.deepEqual(stringToArray("1:3+1,4:3-1") , [1,2,3,4,3,2])
    assert.deepEqual(stringToArray("-1:3-1,-4:3+1") , [-1,-2,-3,-4,-3,-2])

})})