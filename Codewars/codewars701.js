// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
// FUNDAMENTALS


// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.deepEqual(solution([1,2,3,10,5]), [1,2,3,5,10])
//       assert.deepEqual(solution(null), [])
//       assert.deepEqual(solution([]), [])
//       assert.deepEqual(solution([20, 2, 10]), [2,10,20])
//       assert.deepEqual(solution([2, 20, 10]), [2,10,20])
//     })
//   })
// pseudocode:
// this challenge prevents the use of "sort"
// can I loop through the array and place the element into a new array in the sorted position?

// function solution(nums){
//     // return nums.sort((a,b) => a - b)
//     let sorted = [nums[0]]
//     console.log(sorted)
//     for(let i = 1; i < nums.length; i++){
//         console.log("Test")
//         if(nums[i] > sorted[i-1]){
//             console.log("sorted push",i, nums[i])
//             sorted.push(nums[i])
//             console.log(i, sorted)
//         }else if(nums[i] < sorted[i-1]){
//             sorted.unshift(nums[i])
//         }else{
//             // find where it fits- what about if nums[i] < 
//             for(let j = 0; j < sorted.length; j++){
//                 if(nums[i] > sorted[j] && nums[i] < sorted[j + 1]){
//                     console.log(sorted, "j=", j, nums[i], sorted[j])
//                     sorted.splice(j + 1,0,nums[i])
//                     console.log(sorted, "now j = ", j)
//                 }
//             }
//         }
//     }
//     return sorted
    
//   }

// new approach.. will we be able to use Math.min or Math.max?


function solution(nums){
    let sorted = []
    for(let i = 0; i < nums.length; i++){
        let num = Math.min(...nums)
        // remove num from nums and push to sorted
        sorted.push(num)
        // find index of num in nums
        let index = nums.indexOf(num)
        nums.splice(index,1)
        i--

    }
    return sorted
}






  console.log(solution([20, 2, 10]))

//   After solving this kata without .sort, the other solutions used instanceof, and I tried again and it passed. grrrrr

function solution(nums){
    if(nums === null || nums.length < 1) return []
    
    return nums.sort((a,b) => a - b)
  
  }