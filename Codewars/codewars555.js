// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// I want to do it this way:
// if indexOf(first element) !== lastIndexOf(first element), remove them both, retaining the even/odd number...
// A.splice(0,1) & A.splice(lastIndexOf(A[0]))

// I'll have to do a loop though of some kind and I think a while loop will work in this case and at the end we will return the value left


function findOdd(A) {
   let obj = A.reduce(function (acc,c)  {return acc[c] ? ++acc[c] : acc[c] = 1, acc}, {})
   for(item in obj){
    console.log(Object.values(obj),Object.values(item), Object.keys(obj), item, Object.values(item), Object.keys(item), obj[item])
    if(obj[item] % 2 !== 0){
        return item
    }
   
   }
  }

  console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]))


  function findOdd(A) {
    let obj = A.reduce(function (acc,c)  {return acc[c] ? ++acc[c] : acc[c] = 1, acc}, {})
       for(item in obj){
        if(obj[item] % 2 !== 0){
            return +item
        }
       }
      }
    