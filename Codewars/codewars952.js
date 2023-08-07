// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample tests", function() {
//   it("should test", function() {
//     var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
//     assert.strictEqual( highestRank(arr), 12);
//   });
// });

// PREP
// P: we are given an array of numbers
// R: we are to return the largest number with the greatest frequency.
// E: if given [1, 2, 2, 3, 4, 4, 5] we are to return 4
// P: we can make an object with the values and the counts of those values and return the greatest value of the highest frequency element.

function highestRank(arr){
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }

    let maxCount = Math.max(...Object.values(obj))

    // find out if there is more than one max 

    let maxKeys = Object.keys(obj).filter(key => obj[key] === maxCount)

    return  Math.max(...maxKeys)




    //Your Code logic should written here
    }

    console.log(highestRank([1, 2, 2, 4, 4, 5]))
