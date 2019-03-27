// Hey, young man, very glad to see you again in the madhouse, 
// thank you for giving me a lot of help last time.

// Now I have a great job, are you interested in?

// My colleague myjinxin wanted to find a girlfriend, we as great programmers, what should we do?

// I have a good idea, insert ads in the code!

// We can do this:

// 1. when someone converted numbers to a string, 
//    we put the advertisement insertion strings inside.
// 2. But if we do this, ads appear too frequently, 
//    we should set a condition, only display ads in prime number
// OK, this is my great idea, we can imagine, myjinxin will be able to find a girlfriend very quickly, 
// and soon the wedding, and soon gave birth to a child, is really great!

// I have written the advertising text, the rest of the work to you.

// Let's get to work!

// Solution:
var ads=
"\nNow is the time for advertisements:\n"+
"My name is myjinxin, 25 years old, Male, \n"+
"unmarried, handsome, rich, looking for\n"+
"a lovely woman as a life partner\n";
//do something here 

Number.prototype.toString = function() {
  if(this == 1 || this == 0) return this+''
  for(var i = 2; i < this; i++) {
    if(this % i === 0)
      return this+''
  }
  return ads+this
}
// better solution
// Number.prototype.toS = Number.prototype.toString;

// Number.prototype.toString = function(base=10){
//   return isPrime(this) ? ads+ this.toS(base) : this.toS()
// }

// const isPrime = x => { 
//   if( x==2 || x==3 ) return true;
//   if( x< 2 || x%2==0 ) return false;
//   let end = (x**.5)+1, p = 1;
//   while( (p = p+2) < end ) if( x%p==0 ) return false;
//   return true
// }

// Sample Tests:
const assert = require('assert')
describe('test function', ()=> {
  it("mission failed", ()=> {
    assert.strictEqual((1+0).toString(), "1")
  })
  it("mission failed", ()=> {
    assert.strictEqual((1+1).toString(), ads+2)
  })
  it("mission failed", ()=> {
    assert.strictEqual((1+2).toString(), ads+3)
  })
  it("mission failed", ()=> {
    assert.strictEqual((1+3).toString(), "4")
  })
  it("mission failed", ()=> {
    assert.strictEqual((1+4).toString(), ads+5)
  })
})
