// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse( data )
{
  var cot = 0
  var res = []
  var oper = {
    i: () => cot++,
    d: () => cot--,
    s: () => cot*=cot,
    o: () => res.push(cot)
  }
  data.replace(/[^isdo]/g, '').split('').forEach(item => oper[item]())
  return res
}

// function parse(data) {
//   let res = [];

//   data.split('').reduce((cur, s) => {
//     if (s === 'i') cur++;
//     if (s === 'd') cur--;
//     if (s === 's') cur = Math.pow(cur, 2);
//     if (s === 'o') res.push(cur);
    
//     return cur;
//   }, 0);
  
//   return res;
// }

// Sample Test:
const assert = require('assert')
describe('Test', () => {
  it('parse("iiisdoso") should return [ 8, 64 ]', () => {
    assert.deepEqual(parse("iiisdoso"), [ 8, 64 ])
  })
  it('parse("iiisxxxdoso") should return [ 8, 64 ]', () => {
    assert.deepEqual(parse("iiisxxxdoso"), [ 8, 64 ])
  })
})