// A child is playing with a ball on the nth floor of a tall building. The height of this floor, 
// h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height
//  (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling 
// and bouncing?

// Three conditions must be met for a valid experiment:
//   ** Float parameter "h" in meters must be greater than 0**
//   ** Float parameter "bounce" must be greater than 0 and less than 1**
//   ** Float parameter "window" must be less than h.**
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note: The ball can only be seen if the height of the rebounding ball is stricty greater than the window 
// parameter.

// Example:

// h = 3, bounce = 0.66, window = 1.5, result is 3

// h = 3, bounce = 1, window = 1.5, result is -1 (Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
  console.log(h, bounce, window)
  if(bounce >= 1 || bounce < 0 || h < 0 || window >= h) return -1
  var res = 1
  h  *= bounce
  while(h > window) {
    h *= bounce
    res += 2
  }
  return res
}

// const bouncingBall=(h, b, w)=>(b>=1 || h<w || b<=0) ? -1 : Math.ceil(Math.log(w/h)/Math.log(b))*2-1;

// Sample Test:
const assert = require('assert')
describe("Tests", function(){
  it ("test1", function(){
       assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
  });
  
  it ("test2", function(){
       assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
  });
  
});
