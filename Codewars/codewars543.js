// Given a certain array of positive and negative numbers, give the longest increasing or decreasing combination of at least 3 elements of the array.

// If our array is a = [a[0], a[1], ....a[n-1]]:

// i) For the increasing case: there is a combination: a[i] < a[j] < a[k]..< a[p], such that 0 ≤ i < j < k < ...< p ≤ n - 1

// For the decreasing case the combination would be: a[i] > a[j] > a[k]..> a[p], such that 0 ≤ i < j < k < ...< p ≤ n - 1

// For that task create a function longest_comb() (Javascript: longestComb() ) that will receive an array, and a command, one of the two kinds of strings: '< <' or '<<' (increasing), '> >' or '>>' (decreasing).

// Let's see some examples:

// longest_comb([-1, 3, -34, 18, -55, 60, 118, -64], '< <') == [-1, 3, 18, 60, 118]

// longest_comb([-1, 3, -34, 18, -55, 60, 118, -64], '> >') == [[-1, -34, -55, -64], [3, -34, -55, -64]] # outputs a 2D array of two combinations # of same length in the order that they appear in the given array from # left to right
// We may have some cases without any possible combination:

// longest_comb([-26, 26, -36, 17, 12, 12, -10, -21], "< <") == []
// On the other hand we may have cases with many solutions:

// longest_comb([-22, 40, -45, -43, -1, 7, 43, -56], "> >") == [[-22, -45, -56], [-22, -43, -56], [40, -45, -56], [40, -43, -56], [40, -1, -56], [40, 7, -56]]

// describe("Basic Tests", function(){
//     it("Some Arrays", function(){
//       var arr = [-1, 3, -34, 18, -55, 60, 118, -64];
//       var comm = '< <';
//       Test.assertSimilar(longestComb(arr, comm), [-1, 3, 18, 60, 118]);
      
//       arr = [-1, 3, -34, 18, -55, 60, 118, -64];
//       comm = '> >';
//       Test.assertSimilar(longestComb(arr, comm),[[-1, -34, -55, -64], [3, -34, -55, -64]]);
      
//       arr = [-26, 26, -36, 17, 12, 12, -10, -21];
//       comm = '< <';
//       Test.assertSimilar(longestComb(arr, comm), []);
      
//       arr = [-22, 40, -45, -43, -1, 7, 43, -56];
//       comm = '> >';
//       Test.assertSimilar(longestComb(arr, comm), [[-22, -45, -56], 
//       [-22, -43, -56], [40, -45, -56], [40, -43, -56], [40, -1, -56],
//       [40, 7, -56]]);  
//     });
//   });

// PREP
// Parameters:
// we are given an array of positive and negative numbers, and a command of either ">>" or "<<" to represent increasing or decreasing order for the testing of the numbers in the array.
// Results:
// we are  to return all arrays of the longest length that are consequetive in the array. there may be no answer or one or multiple.

// for example, if the array was [1,4,3,7] it would return two arrays of length three: [1,4,7] and [1,3,7].  somehow will need to test for and create return arrays for those middle numbers. During the looping, there should be a test to see if there needs to be more arrays made.. like an if there is a number greater than something and less than something else go to an optional loop


function longestComb(arr, command){
    let newArr = []
    let miniArr = []
    if(command === "> >"){
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                if((arr[i] < arr[i-1] || arr[i] === arr[0]) && arr[i] < arr[j]){
                    miniArr.push(arr[i])
                    console.log(miniArr,"test",i)
                    break
                }
                // if(arr[i] < arr[j] && )
               console.log(miniArr)
            }
            newArr.push(miniArr)
            // miniArr = []
        }
    }

    // your code here
    return newArr;
}
console.log(longestComb([-22, 40, -45, -43, -1, 7, 43, -56], '> >'))

// Pseudocode:
// so I got the first array, but have no way yet to get this code to know if it needs to look for another array, much less how to do it. I'm thinking that there will need to be some comparing of the values at the indexes to check to see if there can be another array made... 
// 