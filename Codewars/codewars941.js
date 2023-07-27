// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

// describe("Tests", () => {
//     it("test", () => {
//   scores = [49,3,5,300,7];
//   Test.assertEquals(average(scores), 73);
  
//   scores = [90,98,89,100,100,86,94];
//   Test.assertEquals(average(scores), 94);
//     });
//   });

// PREP
// P: we are given an array of numbers
// R: we are to return the average, rounded to the nearest whole number
// E: [2,4,6,8] returns 5
// P: reduce the array and divide by the length, enclosing it in Math.round()
  

function average(scores) {
    return Math.round((scores.reduce((acc,c) => acc + c,0))/(scores.length))
    // code to calculate the average
}
console.log(average([90,98,89,100,100,86,94]))