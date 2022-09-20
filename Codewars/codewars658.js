// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!



// function solve(arr){
//     let sorted = arr.sort((a,b) => a - b)
//     let newArr = []
//     let max = 0
//     let min = 0
//     for(let i = 0; i < sorted.length; i+=2){
//         max = sorted.shift()
//         min = sorted.pop()
//         newArr.push(max,min)
//     }
//     return newArr
// };

// as much as I loved doing this problem, it does not really work. 
// PREP
// pseudocode:
// this time we will loop through and take a slice off the array and add it to the newArr.

function solve(arr){
    let newArr = []
    let x = 0
    let y = 0
   arr.sort((a,b) => b - a)
   for(let i = 0; i < arr.length/2; i++){
    
     x = arr.slice(i,i+1)
     y = arr.slice(arr.length-i-1, arr.length-i)
  
     if(i === arr.length-i-1){
       newArr.push(...x)
     
     }else{
       newArr.push(...x)
       newArr.push(...y)
       }
     }
 return newArr
}