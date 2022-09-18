// Challenge:

// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

// Example:

// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

// Addendum:

// Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

// The resultant arrays should be in the order they were originally in and should not have its values changed.

// No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.



function filterHomogenous(arrays) {
    let arr = arrays.filter(item => item.every((el, i ) => typeof el[i] == typeof el ))
    return arr
  }
  console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))


  function filterHomogenous(arrays) {
    let arr = []
    let count = 0
    for(let i = 0; i < arrays.length; i++){
        if(arrays[i].length > 0){
            for(let j = 0; j < arrays[i].length; j++){
                if( typeof arrays[i][j] == typeof arrays[i][j+1]){
                count += 1
                }
            }
            if(count === arrays[i].length - 1 || arrays[i].length === 1){
                arr.push(arrays[i])
            }
           count = 0
        }
    }
    return arr
  }


//   Here is an example of one of the ways I thought to do this challange, but failed at excution:

// let filterHomogenous = a => a.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));