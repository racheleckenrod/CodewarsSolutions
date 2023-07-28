// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// Have fun!

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Sample tests", function() {
//   it("Tests", function() {
//     assert.deepEqual(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
//     assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
//     assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
//     assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
//     assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
//     assert.deepEqual(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]});
//     assert.deepEqual(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]});
//     assert.deepEqual(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]});
//     assert.deepEqual(pickPeaks([]),{pos:[],peaks:[]});
//     assert.deepEqual(pickPeaks([1,1,1,1]),{pos:[],peaks:[]});
//   });
// });

// PREP
// P: we are given an array of integers or empty
// R: we are to return an object with the position of the peaks and the value of the peaks, put into two arrays with the format of {pos:[],peaks:[]} (to be returned that way in the event of an empty array). we are to return the first position of the peak in the event of peak plateaus.
// E: see above
// P: we will need to loop through the array and compare the elements values, checking for a value greater than the previous and less than a future, allowing equal values to stand until a difference is found or we reach the end of the array. use a temporary variable that holds the first position and value of the peak. if the end of the array is reached, do not push those values to the arrays inside the return object.

function pickPeaks(arr){
    let obj = {pos:[],peaks:[]}

    for (let i = 1; i < arr.length; i++) {
        if(arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
            obj.pos.push(i)
            obj.peaks.push(arr[i])
        } else if (arr[i] > arr[i-1] && arr[i] === arr[i+1]) {
            let temp = i
            while (arr[i] === arr[i+1]) {
                i++
            }
            if (arr[i] > arr[i+1]) {
                obj.pos.push(temp)
                obj.peaks.push(arr[i])
            }
        }
    }
  
     return obj
  }
  console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]})