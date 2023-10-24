// In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).

// If each angle is less than 90°, this triangle is acute and the function should return 1.

// If one angle is strictly 90°, this triangle is right and the function should return 2.

// If one angle is more than 90°, this triangle is obtuse and the function should return 3.

// If three sides cannot form a triangle, or one angle is 180° (which turns the triangle into a segment) - the function should return 0.

// Three input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both, depending on the language).


// Acute

// Right

// Obtuse
// Examples:
// (2, 4, 6) ---> return 0 (Not triangle)
// (8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
// (3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
// (7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
// If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.

// There is a very small chance of random test to fail due to round-off error, in such case resubmit your solution.

// const { assert } = require("chai");

// function test(sides, expected) {
//   const type = ['INVALID', 'ACUTE', 'RIGHT', 'OBTUSE'][expected];
//   const actual = triangleType(sides[0], sides[1], sides[2]);
//   assert.strictEqual(actual, expected, `Sides = (${sides.join(', ')}), type = ${type}`);
// }

// describe("Tests", () => {
//   it("test", () => {
//     test([7, 3, 2], 0); // Not triangle
//     test([2, 4, 6], 0); // Not triangle
//     test([8, 5, 7], 1); // Acute
//     test([3, 4, 5], 2); // Right
//     test([7, 12, 8], 3); // Obtuse
//   });
// });


/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

// PREP:
// P: we are given three numbers
// R: we are to return a number corresponding to wether or not  the values make a trianlge (return 0 if no triangle), (return 1 if acute triangle), (return 2 if right trianle), (return 3 if obtuse triangle).
// E: if given 3,4,5 we are to return 2 for right triangle
// P: in order to test to see if the three values given form a triangle, we need to test if the sum of the two smaller nums is less than the max value. in order to accomplish this, we will sort the nums. Since we are given them as three variables, we will add them to an array first and then sort them. label the largest num as c, middle num as b and smallest as a. to see if we are to return 0, we set up the conditional a + b < c if true, return 0 if not, we continue, checking if c**2 = a**2 + b**2 return right triangle (2)
// if a**2 + b**2 < c**2 obtuse (3), else if a**2 +b**2 > c**2 return acute (1)
function triangleType(a, b, c){

    let nums = [a, b, c]

    sortedNums = nums.slice().sort((a,b) => a - b)

    a = sortedNums[0]
    b = sortedNums[1]
    c = sortedNums[2]

    if (a + b <= c) return 0
    if (a**2 + b**2 > c**2) return 1
    if (a**2 + b**2 === c**2) return 2
    if (a**2 + b**2 < c**2) return 3

  }
  console.log(triangleType(2,4,6))