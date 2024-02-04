// Complete the function which will return the area of a circle with the given radius.

// Returned value is expected to be accurate up to tolerance of 0.01.

// If the radius is not positive, throw Error.

// Example:

// circleArea(43.2673);     // returns 5881.248  (± 0.01)
// circleArea(68);          // returns 14526.724 (± 0.01)
// circleArea(0);           // throws Error
// circleArea(-1);          // throws Error


// const chai = require("chai");
// const assert = chai.assert;

// describe("Sample tests", function() {
//   it("Test positive", function() {
//     assert.closeTo(circleArea(1), 3.141, 0.01)
//   });
//   it("Test examples", function() {
//     assert.closeTo(circleArea(43.2673),  5881.248, 0.01)
//     assert.closeTo(circleArea(68     ), 14526.724, 0.01)
//   });
//   it("Test zero", function() {
//     assert.throws(() => circleArea(0), Error)
//   });
//   it("Test negative", function() {
//     assert.throws(() => circleArea(-1), Error)
//   });
// });

// PREP
// P: we are given a value for the radius
// R: we are to return the area of a circle with given radius with an accurancy of +/- 0.01 , or throw an error if the input is invalid
// E: if given 1 we are to return 3.141
// P: use Math.PI in the formula PI * radius**2 to calculate the area, returning it to three decimal places using toFixed() then converting it back to a number.


function circleArea(radius) {
    if (radius <= 0) throw new Error
    return Number((Math.PI * (radius**2)).toFixed(3))
  }

  console.log(circleArea(1))