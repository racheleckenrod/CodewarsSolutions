// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

// Have fun coding it and please don't forget to vote and rank this kata! :-)


// const Test = require('@codewars/test-compat');

// describe("KataTests", function(){
//   it("Basic Tests", function(){
//     Test.assertSimilar(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
//     Test.assertSimilar(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
//     Test.assertSimilar(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
//   });
// });

// Pseudocode: reduce the array and divive by arr.length.



// function averages(numbers) {
//     return numbers.reduce((acc,c) => acc + c,0)/numbers.length
// }

// Not what the problem asked for. Problem want an array of numbers back, with the average of two numbers

// so loop through the array and give the average of the number and the next one in line. return array should have one less value than given array

function averages(numbers) {
    if(numbers === null) return []
    let arr = []

    for(let i = 0; i < numbers.length - 1; i++){
        arr.push((numbers[i] + numbers[i + 1])/2)
    }

    return arr
}

console.log(averages([1, 3, 5, 1, -10]))