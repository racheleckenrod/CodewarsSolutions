// Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x

// Examples
// x = 4     n = 2  -->  2    # the square root of 4 is 2     2^2 = 4
// x = 8     n = 3  -->  2    # the cube root of 8 is 2       2^3 = 8
// x = 256   n = 4  -->  4    # the 4th root of 256 is 4      4^4 = 256
// x = 9     n = 2  -->  3    # the square root of 9 is 3     3^2 = 9
// x = 6.25  n = 2  -->  2.5  #                             2.5^2 = 6.25
// Notes:
// 4 <= x < 10 ^ 20
// 4 <= n <= 50
// Good luck!

// describe("Tests", () => {
//     it("test", () => {
//   var rts = [{n: 3, x: 8, r: 2}, {n: 2, x: 6.25, r: 2.5}];
  
//   rts.forEach(function(o) {
//     assertFuzzyEquals(root( o.x, o.n ), o.r, "Wrong value");
//   });
//     });
//   });
  
// PREP
// P: we are given two numbers. x is the result, and n is the exponent
// R: we are to return the base number.
// E: if given x = 9, n = 2 , we are to return 3.
// P: the root is calculated by raising to the 1/2 power, so we will write a function that plugs in the givens into a formula to return the root number.



function root(x, n) {
    return x**(1/n)
  }

  console.log(root(9,2))