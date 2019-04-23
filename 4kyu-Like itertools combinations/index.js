// icombinations should be a generator function with behavior similar to Python's itertools.combinations. 
// You are given an array arr of unique items and an integer k.

// You should yield each unique combination of elements in arr of length k with no replacements 
// until there are no possible unique combinations left, at which point you should terminate the 
// generator function. Your generator will be called with next(), and with the spread operator and 
// in some cases it will be called until completion.

// Additionally It is important that you return combinations in the same order as the original array 
// arr. (see the example below)....

// For example:

// given an array of unique elements example_arr and an integer example_k:
// where example_arr = ['a', 'b', 'c', 'd'] and example_k = 2;
// calling the next() method of the iterator should return [ 'a', 'b' ].
// if we were to call next() again we should get [ 'a', 'c' ] and so on...
// so that if we got all values yielded by the generator we would have the following:
// [ 'a', 'b' ] [ 'a', 'c' ] [ 'a', 'd' ] [ 'b', 'c' ] [ 'b', 'd' ] [ 'c', 'd' ]
// again, notice the order of the above, as you will need to replicate it in your solution.
// Some more things to consider:
// If your solution is timing out, it may be because you tried to generate all possible combinations 
// first and then yield each one. This defeats the point of a generator. Some of input values will 
// be large.
// Values in arr will always be unique but they may be of different types (i.e. strings, integers, 
// other objects).

// The only cases in which you would not be able to produce combinations is that in which arr is 
// null or or has a length less than k. In any of those situations you should return null.

// max size
// function* icombinations(arr, k){
//   if(arr.length < k) return null
//   var collect = []
//   getNumber(arr, 0, [], k)
//   for(var i = 0; i < collect.length; i++) {
//     yield collect[i]
//   }
  
//   function getNumber(arr, index, res, k) {
//     console.log(res)
//     if(res.length === k) {
//       collect.push(res)
//     } else {
//       for(var i = index; i < arr.length; i++) {
//         var t = arr[i]
//         if(res.length === 0 && i === arr.length-k+1) continue
//         getNumber(arr, i+1, [...res, t], k)
//       }
//     }
//   }
//   return;
// }

function* icombinations(arr, k){
  const L = arr.length
  if (k <= 0) return [undefined]
  if (k > arr.length) return null
  if (k === 1) yield* arr.map(x=>[x])
  for (let i = 0; i < L; ++i) 
      for (const x of icombinations(arr.slice(i+1),k-1)) 
          yield [arr[i]].concat(x)
}

function* icombinations(indexed, r) {
  if (indexed == null || r == null) return;
  const xs = indexed.slice(), n = xs.length;
  if (r > n) return null;
  
  const indices = Array.from({length: r}, (_, i) => i);
  yield indices.map(i => xs[i]);
  do {
    let i = r;
    while (--i >= 0) if (indices[i] != i + n - r) break;
    if (i < 0) return;
    ++indices[i];
    for (let j = i + 1; j < r; ++j) indices[j] = indices[j - 1] + 1;
    yield indices.map(i => xs[i]);
  } while (true);
}
// <https://docs.python.org/3/library/itertools.html#itertools.combinations>
