// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    let value = []
    value.push(Math.abs(number))
    console.log(value)
    value = value.toString().split('')
    for(let i = 0; i < value.length; i++){
        value[i] = +value[i]
    }
    // ((acc,c) => acc + c, 0)
    value = value.reduce((acc,c) => acc + c, 0)
    return value
}

console.log(sumDigits(-32))


// refactored:

// function sumDigits(number) {
//     let value = []
//     value.push(Math.abs(number))
//     value = value.join("").split('').reduce((acc,c) => +acc + +c, 0)
//     return value
// }