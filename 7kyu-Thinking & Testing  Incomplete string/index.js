// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

// function testit(s){
//   //return s?
//   //return s.substr(0,1) ?
//   //return s.substr(0,s.length/2) ?
//   return ???;
// }

// Solution:
function testit(s){
  //return s?
  //return s.substr(0,1) ?
  //return s.substr(0,s.length/2) ?
  return s.replace(/(..)/g, s => String.fromCharCode((s.charCodeAt(0)+s.charCodeAt(1))/2));
}

// Sample Tests:
//return s ?
// Test.assertSimilar(testit(""), "", "")
// Test.assertSimilar(testit("a"), "a", "")
// Test.assertSimilar(testit("b"), "b", "")
// //return s.substr(0,1) ?
// Test.assertSimilar(testit("aa"), "a", "")
// Test.assertSimilar(testit("ab"), "a", "")
// Test.assertSimilar(testit("bc"), "b", "")
// //return s.substr(0,s.length/2) ?
// Test.assertSimilar(testit("aaaa"), "aa", "")
// Test.assertSimilar(testit("aaaaaa"), "aaa", "")
// //click "Submit" try more testcase...