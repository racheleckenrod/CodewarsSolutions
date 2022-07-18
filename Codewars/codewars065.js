// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

// This kata was inspired by the Hackerrank challenge Find Point

// test examples will probably be helpful for this one

// const assert = require("chai").assert;

// describe("Points of Reflection", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(symmetricPoint([0,0], [1,1]), [2, 2]);
//     assert.deepEqual(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
//     assert.deepEqual(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
//     assert.deepEqual(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
//     assert.deepEqual(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
//     assert.deepEqual(symmetricPoint([0, 0], [0, 0]), [0, 0]);
//   });
// });
// PREP
// Parameters:
// given two coorinates, a point and a midpoint, in x and y  array format. 
// return:
// are to return the coresponding point to the point, midpoint pair- also in a x and y corordinates.
// examples
// if given point x,y and midpoint x1,y1 , the corresponding point will be equal and opposite . so first to determine the distance between x and x1 then y and y1. then put that distance in the opposite direction.
// Pseudocode:
// x3,y3 is the point reflection. is obtained by adding (midpoint - point) to midpoint? in each direction?
// so that would look like (q[0] - p[0]) + q[0] = pr
function symmetricPoint(p, q) {
  let pr = []
  pr[0] = (q[0] - p[0]) + q[0]
  pr[1] = (q[1] - p[1]) + q[1]
  return pr
}

// my solution makes much more sense to me than the other ones I see on codewars... the 2* the coordinates then subtracting it wasn't a way I thought to do it.