// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

// describe("Basic tests",() =>{
//     Test.assertEquals(arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9");
//     Test.assertEquals(arithmeticSequenceElements(1, 0, 5), "1, 1, 1, 1, 1");
//     Test.assertEquals(arithmeticSequenceElements(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26");
//     Test.assertEquals(arithmeticSequenceElements(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10");
//   });

// PREP
// P: we are given three numbers. the starting number, the difference and the number of numbers we are to return.
// R: we are to return a string of numbers separated by a comma and a space.
// E: if given (1,2,3) we are to return "1, 3, 5"
// P: use a for loop, starting at a, incrementing by d, and continuing until n pushing values into an array that we will join with the ", "


function arithmeticSequenceElements(a, d, n) {
    let arr = []
    for (let i = 0; i < n; i++){
        arr.push(a + (i * d))
    }
    
	return arr.join(", ")
}
console.log(arithmeticSequenceElements(100, -10, 10))