// Story
// You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

// Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

// But at the end of the day you realise not everybody did the same amount of work.

// To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

// Kata Task
// Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

// Example
// For start = 125, and end = 132

// The letterboxes are

// 125 = 1, 2, 5
// 126 = 1, 2, 6
// 127 = 1, 2, 7
// 128 = 1, 2, 8
// 129 = 1, 2, 9
// 130 = 1, 3, 0
// 131 = 1, 3, 1
// 132 = 1, 3, 2
// The digit frequencies are:

// 0 is painted 1 time
// 1 is painted 9 times
// 2 is painted 6 times
// etc...
// and so the method would return [1,9,6,3,0,1,1,1,1,1]

// Notes
// 0 < start <= end
// In C, the returned value will be free'd.

// const { assert } = require("chai")

// describe("Example Tests", function() {

//   it("ex", function(){
//     assert.deepEqual(paintLetterboxes(125, 132), [1,9,6,3,0,1,1,1,1,1]);
//   });

// });

// PREP
// P: we are given two numbers.
// R: we are to return an array of ten values each representing how many of each digit equal to the index in the array of the consecutive numbers from start to end.
// E: if given (100, 110), we are to return an array of the count of each digit.
// 100
// 101
// 102
// 103
// 104
// 105
// 106
// 107
// 108
// 109
// 110

// sum up the occurances of each:
// 0:12, 1:13, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1
// return the array [12,13,1,1,1,1,1,1,1,1]
// P: make an object that keeps track of each digit. will need to split each number after turning it into a string 


var paintLetterboxes = function(start, end) {
    let digits = {}

    for (let i = start; i <= end; i++) {
        let strNum = i.toString()
        for (let digit of strNum) {
            digits[digit] = (digits[digit] || 0) + 1
        }
    }

    let result = []
    for (let i = 0; i <=9; i++) {
        result.push(digits[i] || 0)
    }

    return result
    // Your code here
    // return [digits['0'], digits['1'], digits['2'], digits['3'], digits['4'], digits['5'], digits['6'], digits['7'], digits['8'], digits['9']]
  }
  console.log(paintLetterboxes(125, 132), [1,9,6,3,0,1,1,1,1,1])