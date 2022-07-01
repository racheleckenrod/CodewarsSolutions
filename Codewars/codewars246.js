// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

// PREP 
// Parameters - given an array and a  function
// results- return true if NONE of the items pass the function

function none(arr, fun){
    if(arr === []){
        return true
    }else{
        return !arr.some(fun)
    }
    
  }
 
  console.log(none([1,2,3,4,5],function(item){ return item > 4 }))