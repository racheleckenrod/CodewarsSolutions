// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
// PREP:
// we are given an array and and index.
// our job is to return the index of the value that is the smallest larger value than the value at the index we are given

// to do this, I will make a new array and sort it then take the next index, get the value then return the index of that value in the original array.



function leastLarger(a,i) {
    if(a === []) return -1
    let x = a[i]
    let sorted = a.slice(0, a.length)
    sorted.sort((a,b) => a -b)
    console.log(sorted, a)
    // now to get the value at the index we are given in the original array
    
    // find the value that is next in the sorted array from that value
    // first get the index of x in the sorted array then add one to get the value
    let y = sorted.indexOf(x)
    if(y === sorted.length - 1) return -1
    let z = sorted[y+1]
    // now find the indexOf z in the original array, I guess we can just return it in one step. 
    return a.indexOf(z)
  }

  console.log(leastLarger( [1, 3, 5, 2, 4], 0 ) )

  function leastLarger(a,i) {
    console.log(a,i)
     if(a === []) return -1
      let x = a[i]
      let sorted = a.slice(0, a.length)
      sorted.sort((a,b) => a -b)
      // now to get the value at the index we are given in the original array
      
      // find the value that is next in the sorted array from that value
      // first get the index of x in the sorted array then add one to get the value
      let y = sorted.indexOf(x)
      let z = sorted[y+1]
      for(let i = 1; i < sorted.length; i++){
        if(z <= x){
          z = sorted[i]
        }
      }
      if(z === x){
        return -1
      }
    
      
      return a.indexOf(z)
    
      }