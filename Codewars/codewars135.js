// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
// PREP: 
// Parameters:
// given an array of values - booleans
// Return number of trues in the array
// Example [true, true, false] would return 2
// pseudocode:
// if array[i] === true  sheep += 1


function countSheeps(arrayOfSheep) {
    let sheep = 0
    for(let i = 0; i < arrayOfSheep.length; i++){
        if(arrayOfSheep[i] === true){
            sheep += 1
        }
    }return sheep
  }