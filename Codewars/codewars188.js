// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

function first(arr, n=1) {
    let newArr = []
      if(n <= arr.length){
        for(let i = 0; i < n; i++){
          newArr.push(arr[i])
      }
      }else{
        newArr = arr
      }return newArr
  }

  console.log(first([1,2,3],0))


//   function first(arr, n=1) {
//     return arr.slice(0,n);
//  }
 