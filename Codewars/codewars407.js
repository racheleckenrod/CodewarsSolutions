// Sort an array by value and index
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5


// function sortByValueAndIndex(array){
//     let newArr = array.map(item => item * (array.indexOf(item) + 1))
//     newArr.sort((a,b) => newAra -b)

//   return newArr
// }
// oooOOOO. needs the original array returned, not the values of the products

// Third try:

// function sortByValueAndIndex(array){
   
//     array.sort((a,b) => (a * (array.indexOf(a) + 1)) - (b * (array.indexOf(b) + 1)))

//   return array
// }

// this produced some correct results but broke down with multiple accurances of the same value, as indexOf returns the FIRST index of the occurance ... going to have to use some other way to get to the "index" and it isn't a true index because we want to use 1 and not zero for the multiplier. I am thinking about some version of .length, but unsure how to access a partial length...
// perhaps the counter will be needed here
// I dont really know how to keep track of the old value and the new values though

// ah ha.. Object notation??

// what I think I could do here is add a key/value pair to each one and use it to sort then return the original values.

function sortByValueAndIndex(array){
   
    let newArr = array.map((num, i) => [num, i + 1])
    // make an array of the number and the index plus one.
    console.log(newArr)

    let newArr2 = newArr.sort((a, b) => (a[0] * a[1]) - (b[0] * b[1]))
    // sort the new array with the instructions of the multiplier of the non zero index and being able to account for multiple numbers with using the [] indexing... I was unable to see how to do this on my own. I also didnt know that this would be able to keep track of the original numbers as this does. when doing the next step of taking the original num out of the array and using map to convert it back to the num. 
    .map(([num]) => num);
    console.log(newArr2)
}

console.log(sortByValueAndIndex([ 9, 5, 1, 4, 3 ]))

// Maybe we could do it another way, by += 1 and map or for each...
// that isnt going to be keep ing good track of the original values though... I think I better go back to objects
// function sortByValueAndIndex(array){

// ended up looking at the solution for this one, and really learning some good stuff in the  process.

function sortByValueAndIndex(array){
    return array.map((num, i) => [num, i + 1]).sort((a, b) => (a[0] * a[1]) - (b[0] * b[1])).map(([num]) => num);
  }