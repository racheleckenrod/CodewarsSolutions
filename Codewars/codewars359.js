// Improving Math.round(x)
// Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:

// Math.round(3.14); // Returns 3
// Math.round(17.43); // 17
// Math.round(198.499); // 198
// Math.round(200.5); // 201
// Math.round(1784.76); // 1785
// But that is sometimes not enough! What if we wanted to round 3.1415926535 to two decimal places? While some languages (such as PHP) has a round() function that supports rounding to a specified number of decimal places (e.g. <?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified) */ ?>), Javascript does not!

// Task
// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

// You may find the following Math methods useful:

// Math.round(x) (of course)
// Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(Math.roundTo(3.1415926535, 4), 3.1416);
//   Test.assertEquals(Math.roundTo(4, 5), 4);
//   Test.assertEquals(Math.roundTo(4.1235343424, 6), 4.123534);
//   Test.assertEquals(Math.roundTo(5.3035802, 3), 5.304);
//   Test.assertEquals(Math.roundTo(0.9384930193848595, 15), 0.938493019384860);
//   Test.assertEquals(Math.roundTo(9.9999, 3), 10);
//     });
//   });
  
// PREP
// Parameters:
// given a number and the precision- number of decimals
// are to return the number to given sig figs
// example- given 4.555,2 we are to return 4.55
// Pseudocode:
// I'm thinking to do 10 to the  power of precision, multiply the number then round, then divide by 10 power of precision.

Math.roundTo = function (number, precision) {
    return Math.round(Math.pow(10,precision) * number) / Math.pow(10,precision)
  }