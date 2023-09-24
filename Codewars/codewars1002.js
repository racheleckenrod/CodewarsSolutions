// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Zero size files can always be saved even HD full.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.
// Examples:
// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12
// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11
// save([12, 0, 0, 1], 12) -> 3
// # 12+0+0 <= 12, but 12+0+0+1 > 12
// Do not expect any negative or invalid inputs.

// LISTSARRAYSFUNDAMENTALS

// const { assert } = require("chai");

// describe("Fixed tests", function() {
//   it("save([4, 4, 4, 3, 3], 12)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 12), 3));
//   it("save([4, 4, 4, 3, 3], 11)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 11), 2));
//   it("save([4, 8, 15, 16, 23, 42], 108)", () => assert.strictEqual(save([4, 8, 15, 16, 23, 42], 108), 6));
//   it("save([13], 13)", () => assert.strictEqual(save([13], 13), 1));
//   it("save([1, 2, 3, 4], 250)", () => assert.strictEqual(save([1, 2, 3, 4], 250), 4));
//   it("save([100], 500)", () => assert.strictEqual(save([100], 500), 1));
//   it("save([11, 13, 15, 17, 19], 8)", () => assert.strictEqual(save([11, 13, 15, 17, 19], 8), 0));
//   it("save([45], 12)", () => assert.strictEqual(save([45], 12), 0));
// });

// PREP
// P: we are given an array of integers and a max value
// R: we are to return the number of integers that can be added without going over the max value.
// E: if given [1,2,3,4,5], 8 , we are to return 1 + 2 + 3 = 6 which ios less than 8, so three as 1 + 2 + 3 + 4 = 10 which is more than 8.
// P: we can start with a variable equal to zero, and add each element of the array to it and check if it is less than or equal to the max value. continue adding values until max is reached. keep count of how many integers are added and return that number.

function save(sizes, hd) {
    let count = 0
    let sum = 0

    for (let i = 0; i < sizes.length; i++){
        sum = sum + sizes[i]
        if (sum <= hd) {
            count += 1
        }
    }
    return count
    // your code here
  }