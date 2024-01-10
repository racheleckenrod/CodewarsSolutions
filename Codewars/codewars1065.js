// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

// STRINGSALGORITHMS

// const Test = require('@codewars/test-compat');

// describe("Basic Tests", function(){
//     it ("Find Average", function(){
//         Test.assertEquals(averageString("zero nine five two"), "four");
//         Test.assertEquals(averageString("four six two three"), "three");
//         Test.assertEquals(averageString("one two three four five"), "three");
//         Test.assertEquals(averageString("five four"), "four");
//         Test.assertEquals(averageString("zero zero zero zero zero"), "zero");
//         Test.assertEquals(averageString("one one eight one"), "two");
//         Test.assertEquals(averageString(""), "n/a");
//     });
// });

// PREP
// P: we are given a string of words representing numbers.
// R: we are to return a string word of the sum of the numbers, and if any word is not a number zero-nine or the string is empty, we are to return "n/a"
// E: if given "one one one" we are to return "three"
// P: split the string then check each element for the words "zero" through "nine" and put the values into an array, average the array and convert the value into the word and return it

// function averageString(str) {
//     let words = str.split(" ");
//     let wordNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//     let nums = [];

//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === "zero") {
//             nums.push(0)
//         }else  if (words[i] === "one") {
//             nums.push(1)
//         }else  if (words[i] === "two") {
//             nums.push(2)
//         }else  if (words[i] === "three") {
//             nums.push(3)
//         }else  if (words[i] === "four") {
//             nums.push(4)
//         }else  if (words[i] === "five") {
//             nums.push(5)
//         }else  if (words[i] === "six") {
//             nums.push(6)
//         }else  if (words[i] === "seven") {
//             nums.push(7)
//         }else  if (words[i] === "eight") {
//             nums.push(8)
//         }else  if (words[i] === "nine") {
//             nums.push(9)
//         }else {
//             return "n/a"
//         }
//     }
//         let ave = Math.floor(nums.reduce((acc,c) => acc + c, 0)/nums.length)

       

//         return wordNums[ave]
   

//     // Code away
//   }


function averageString(str) {
    let words = str.split(" ");
    let wordNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    let nums = map.words(item => wordNums.indexOf(item));
   
    if (nums.includes(-1)) {
        return "n/a"
    }
    
        let ave = Math.floor(nums.reduce((acc,c) => acc + c, 0)/nums.length)

       

        return wordNums[ave]
   

    // Code away
  }