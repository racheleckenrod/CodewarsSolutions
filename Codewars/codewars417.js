// Find the anonymous function in the array
// Find the anonymous function in the given array and use the function to filter the array
// Input
// Your input. First Parameter will be an array with an anonymous function somewhere in the lot, The second Parameter will be an array which you will filter using the anonymous function you find.
// Output
// Your output. Output a filtered version of the second parameter using the function found in the first parameter.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var FindFunction = function(func, arr) {
    let funct = func.filter(item => typeof item === "function")
    let output = arr.filter(funct[0])
    console.log(funct,arr)
    return output //Complete this function
  }

  console.log(FindFunction([(a=>a%2==0),9,3,1,0],[1,2,3,4]))