// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

// Example
// For formula = [1,3,7], The output should be true.

// For formula = [7,1,2,3], The output should be false.

// For formula = [1,3,5,7], The output should be false.

// For formula = [1,5,6,7,3], The output should be true.

// For formula = [5,6,7], The output should be true.

// For formula = [5,6,7,8], The output should be true.

// For formula = [6,7,8], The output should be false.

// For formula = [7,8], The output should be true.

// Note
// All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

// Happy Coding ^_^
// PREP 
// Parameters - given an array of number, up to eight of numbers 1-8
// Results - are to return true if the formula is valid, else return false given the formula :
// 1 and 2 cannot be selected at the same time
// 3 and 4 cannot be selected at the same time
// 5 and 6 must be selected at the same time
// 7 or 8 must be selected- at least one or both
// Examples - see above
// Pseudocode -
// I dont really know how to appraoch this problem... seems like it would be too much to start doing if statements
// how to keep the boolean true and return false if the condition doesn't pass... 

function isValid(formula){
    
    if(formula.includes(1) && formula.includes(2)){
        return false
     }else if(formula.includes(3) && formula.includes(4)){
        return false
     }else if(formula.includes(5) != formula.includes(6)){
        return false
     }else if(formula.includes(7) || formula.includes(8)){
        return true
     }else{
        return false
     }
  }

console.log(isValid([7,1,3]))