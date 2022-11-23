// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example

// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(mostFrequentItemCount([3, -1, -1]), 2);
// Test.assertEquals(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
//   });
// });

// PREP
// Parameters:
// we are given an array of integers
// Results:
// we are to return the highest number of repeats 
// example:
// if we are given [2,3,1,2,2,2,3,4,1,1,3]
// we should return 4 - the number 2 occurs 4 times and that is the most

// pseudocode:
// can I make an object out of the array that would have the number, then the number of repeats from the array. so the above would be {2:4, 3:3, 1:3, 4:1} and we would return the highest value of the key value pairs of the object. 


function mostFrequentItemCount(collection) {
    if(collection.length < 1) return 0
    return Math.max(...collection.map(element => 
       collection.filter(item => item == element).length))
  }
  console.log(mostFrequentItemCount([2,3,1,2,2,2,3,4,1,1,3]))