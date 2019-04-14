// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns 
// an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// - A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. 
//   (No need to handle fancy punctuation.)
// - Matches should be case-insensitive, and the words in the result should be lowercased.
// - Ties may be broken arbitrarily.
// - If a text contains fewer than three unique words, then either the top-2 or top-1 words should be 
//   returned, or an empty array if a text contains no words.

// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
//   1. Avoid creating an array whose memory footprint is roughly as big as the input text.
//   2. Avoid sorting the entire array of unique words.

function topThreeWords(text) {
  var count = {}
  var str = text.toLowerCase().split(' ')
  var t
  str.map(i => {
    t = i.replace(/[^a-z\']/g, '')
    if(t.match(/[a-z]/g)) {
      if(count[t] === undefined) {
        count[t] = 1
      } else {
        count[t]++
      }
    }
  })
  var res = Object.entries(count).sort((a, b) => (b[1] - a[1]))
  if(res.length >= 3) return [res[0][0], res[1][0], res[2][0]]
  else return [...res.map(i => i[0])]
}

// Sample Test:
const assert = require('assert')
assert.deepEqual(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a'])
  
assert.deepEqual(topThreeWords("a a c b b"), ['a','b','c'])
  
assert.deepEqual(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])

assert.deepEqual(topThreeWords("  //wont won't won't "), ["won't", "wont"])
  
assert.deepEqual(topThreeWords("  , e   .. "), ["e"])

assert.deepEqual(topThreeWords("  ...  "), [])

assert.deepEqual(topThreeWords("  '  "), [])
  
assert.deepEqual(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`), ['a','of','on'])