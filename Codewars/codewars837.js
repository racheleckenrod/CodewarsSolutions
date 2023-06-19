// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).


// const assert = require('chai').assert;

// describe("Sample tests", () => {
//   it ('h = 3.0, bounce = 0.66, window = 1.5', () => {
//     assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
//   });
    
//   it ('h = 30.0, bounce = 0.66, window = 1.5', () => {
//     assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
//   });
  
//   it ('h = 3.0, bounce = 1.0, window = 1.5', () => {
//     assert.strictEqual(bouncingBall(3.0, 1.0, 1.5), -1);
//   });
// });

// PREP:
// P: we are given three variables. the height of the drop, the decimal of how high the ball bounces back, and the height of the viewing of the ball.
// R: we are to return the number of times the ball passes the window. specifically past, not just to. 
// E: h= 10, bounce= .66, window = 2
// the ball is dropped, passes = 1
// ball bounces up 10 * .66, height = 6.6 , passes = 2
// ball comes down, passes = 3,
// ball bounces up 6.6 * .66 height = 4.356, passes = 4
// ball comes down, passes = 5
// ball bounces up 4.356 * .66 height = 2.875 passes = 6
// ball comes down, passes = 7
// ball bounces up .66 * 2.875  height = 1.897 no more passes, so return 7.
// P: provided that the height is greater than the window, start with 1 as the ball is dropped; add two if height * bounce is greater than window. continue until height <= window. seems a good candidate for a while loop. 
  
function bouncingBall(height,  bounce,  window) {
    if(window >= height || height < 1 ) return -1
    if(bounce <= 0 || bounce >= 1) return -1

    count = 1
    while(height > window) {
        count += 2
        height = height * bounce
    }

    return count - 2
    // your code here
  }

  console.log(bouncingBall(10, .66, 2))