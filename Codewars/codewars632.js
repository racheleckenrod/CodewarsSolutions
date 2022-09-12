// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.
// More examples in the test cases.

// Good luck!

// describe("Basic tests", function(){
//     Test.assertDeepEquals(solve([16,17,14,3,14,5,2]),[ 17,14,5,2]);
//     Test.assertDeepEquals(solve([ 92,52,93,31,89,87,77,105]),[105]);
//     Test.assertDeepEquals(solve([ 75,47,42,56,13,55]), [75,56,55]);
//     Test.assertDeepEquals(solve([ 67,54,27,85,66,88,31,24,49]),[88,49]);
//     Test.assertDeepEquals(solve([ 76,17,25,36,29]),[76,36,29]);
//     Test.assertDeepEquals(solve([ 104,18,37,9,36,47,28]),[104,47,28]);
//     });


// PREP
//Parameters:
//  we are given an array of positive integers
// results:
// we are to returnan array of numbers that are greater than all the numbers to it's right in the array
// Example:
// [2,5,56,34,3,5]  returns [56,34,5]
// Pseudocode:
// nested for loops that check each element in the array to the right of the element being chcked to see if it is higher than it, then push that number in to a new array if it is.


function solve(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if( i === arr.length - 1){
            newArr.push(arr[i])
        }
      for(let j = i + 1; j < arr.length; j++){
        if(arr[i] <= arr[j]){
            break
        }
        console.log(arr[i], arr[j],i,j)
        if(j === arr.length - 1){
            newArr.push(arr[i])
        }
      }
    }
    return newArr
    };
    console.log(solve([ 76,17,25,36,29]))

    // Many better solutions:

    // function solve(arr){
    //     return arr.filter((e,i)=> arr.slice(i+1).every(x => x < e));
    //   };
      
//     function solve(arr){
//         var result=[]
//         for(var i=0;i<arr.length;i++){
//            if(arr[i]>Math.max(...arr.slice(i+1, arr.length)))
//                result.push(arr[i])
//         }
//         return result;
//    };

// another without using .every

// function solve(arr){
//     return arr.filter((n, i)=>n>Math.max(...arr.slice(i+1)));
//   };