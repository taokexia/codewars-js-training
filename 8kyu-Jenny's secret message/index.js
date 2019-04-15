// Jenny has written a function that returns a greeting for a user. However, she's in love with 
// Johnny, and would like to greet him slightly different. She added a special case to her function, 
// but she made a mistake.

// Can you help her?

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!"
  return "Hello, " + name + "!"
}

const assert = require('assert')
describe("Jenny's greeting function", function(){
  it("should greet some people normally",function(){
    assert.strictEqual(greet("Jim"), "Hello, Jim!");
    assert.strictEqual(greet("Jane"), "Hello, Jane!");
    assert.strictEqual(greet("Simon"), "Hello, Simon!");
  });
  it("should greet Johnny a little bit more special",function(){
    assert.strictEqual(greet("Johnny"), "Hello, my love!");
  });
});