// Complete the solution so that it splits the string into pairs of two characters. If the string 
// contains an odd number of characters then it should replace the missing second character of the 
// final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
  return str.replace(/(\w{2})\B/g, '$1,').replace(/(,\w)(?!\w)/, "$1_").split(',')
}

// function solution(str){
//   return (str + "_").match(/../g);
// }