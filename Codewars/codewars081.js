// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

// PREP 
// Parameters:
// takes an array of arrays
// Returns csv- comma separated values in a list. looks to need a new line \n after each array and then a "+" plus sign. also appears to need quotations. needs a \n at the end of each array except the last one, quotes instead of brakets and a plus instead of a comma.
// function toCsvText(array) {
    // for(let i = 0; i < array.length - 1; i++){
    //     array[i].push("\n","+","'")
    // }
    // for(let i = 0; i < array.length; i++){
       
       
    //    let newArr = array.join("\n")
       
       
        // return array
       
    
//    let newArr = array.toString()
//   let newStr = newArr.replace("',", "'")
    // return newArr
    // good luck
//  }


 function toCsvText(array) {
    // good luck
    return array.join('\n')
 }
console.log(toCsvText(([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ] )))

//    this codewars was bad- I had the "correct" solution and submitted it but dont really know why it wasn't accepted. The first time I looked at the codewars answer...