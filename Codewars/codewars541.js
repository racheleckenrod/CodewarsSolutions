// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

// For example,

// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
// If there are multiple brightest colors, return the first one:

// brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
// Note that both input and output should use upper case for characters A, B, C, D, E, F.
// const chai = require("chai");
// const assert = chai.assert;

// function dotest(arr, expected) {
//   const actual = brightest(arr.slice())
//   assert.deepEqual(actual, expected, `Test failed with colors = ${arr}`)
// }

// describe("Fixed tests", function() {
//   it("Basic tests", function() {
//     dotest(["#001000", "#000000"], "#001000");
//     dotest(["#ABCDEF", "#123456"], "#ABCDEF");
//     dotest(["#00FF00", "#FFFF00"], "#00FF00");
//     dotest(["#FFFFFF", "#1234FF"], "#FFFFFF");
//     dotest(["#FFFFFF", "#123456", "#000000"], "#FFFFFF");
//   });
// });

// PREP
// Parameters:
// we are given an array of hexidecimal numbers
// we are to return the hexideciaml number that has the greatest 2digit value component in it

// Pseudocode:
// I think we split the given number into its three  parts and get the highest value, return the first hexideciaml witht the highest value.




function brightest(colors){

    // for(let i = 0; i < colors.length; i++){
    //     // split each one, I could map instead
    // }
  let values = colors.map(item => item.split(""))
  let nums = []
  for(let i = 0; i < values.length; i++){
    for(let j = 1; j < values[i].length - 1; j+= 2){
        nums.push([values[i][j], values[i][j+1]])
    }
  }
//   now we have nums with an array of two digit hexidecimal values, but they are not grouped into threes...
nums = nums.map(item => item.join(""))
nums = nums.map(item => parseInt(item, 16))

let highest = Math.max(...nums)
console.log(values, nums, Math.floor(nums.indexOf(highest) / 3),nums.indexOf(highest) )

return colors[Math.floor(nums.indexOf(highest) / 3)]
 
}
console.log(brightest(['#001000', '#000000']))