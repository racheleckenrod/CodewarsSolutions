// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647

// Examples
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"
// ALGORITHMS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(groupByCommas(1), '1');
// Test.assertEquals(groupByCommas(10), '10');
// Test.assertEquals(groupByCommas(100), '100');
// Test.assertEquals(groupByCommas(1000), '1,000');
// Test.assertEquals(groupByCommas(10000), '10,000');
// Test.assertEquals(groupByCommas(100000), '100,000');
// Test.assertEquals(groupByCommas(1000000), '1,000,000');
// Test.assertEquals(groupByCommas(35235235), '35,235,235');
//   });
// });

// PREP
// P: we are given a number between 0 and  2147483647
// R: we are to return the number as a string with properly insterted commas
// E: if given 10 we are to return "10" or given 10000 we are to return "10,000"
// P: one way to do this is to split the string number into an array, reverse it, add a comma after every third element, reverse it again and then join it.


function groupByCommas(n) {

    let x = n.toString()

    if ( x.length > 3 ) {
         x = x.split('').reverse()
        for (let i = 3; i < x.length; i+=4){
            x.splice(i,0,',')
        }
        x = x.reverse().join('')
    }
  return x
}
console.log(groupByCommas(123456789))

// yes there is a built in method in javascript to do this work:

// function groupByCommas(n) {
    //   return n.toLocaleString()

// }