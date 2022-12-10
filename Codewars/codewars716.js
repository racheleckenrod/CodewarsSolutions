// 6kyu

// Write the following function:

// function areaOfPolygonInsideCircle(circleRadius, numberOfSides)
// It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). The answer should be a number rounded to 3 decimal places.

// Input :: Output Examples

// areaOfPolygonInsideCircle(3, 3) // returns 11.691

// areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

// areaOfPolygonInsideCircle(4, 5) // returns 38.042
// Note: if you need to use Pi in your code, use the native value of your language unless stated otherwise.
// //

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Example Tests", function() {

//   it("ex1", function() {
//     assert.strictEqual(areaOfPolygonInsideCircle(3, 3), 11.691);
//   });
  
//   it("ex2", function() {
//     assert.strictEqual(areaOfPolygonInsideCircle(2, 4), 8);
//   });
  
//   it("ex3", function() {
//     assert.strictEqual(areaOfPolygonInsideCircle(2.5, 5), 14.86);
//   });
  
// });   

// Area = n * (1/2 * (2*(radius * Math.sin(Math.PI/n))) * (radius * Math.cos(Math.PI/n)))


function areaOfPolygonInsideCircle(radius, n) {
    return +(n * (radius * Math.sin(Math.PI/n)) * (radius * Math.cos(Math.PI/n))).toFixed(3)
  }
  console.log(areaOfPolygonInsideCircle(3, 3), 11.691)