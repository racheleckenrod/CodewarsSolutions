// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

// split the string, use indexOf " " to find out what the numbers and operator are, do the calculation and use ".".repeat(number). may have to make a variable "."

function dotCalculator (equation) {
    let arr = equation.split("")
    let y
    let z
    let dot = "."
    let x = arr.indexOf(" ")
    let firstNum = x
    let operator = arr[x + 1]
    if( operator === "/"){
        y = 4
    }else{
        y = 3
    }
    let secondNum = arr.length - x - y
    console.log(secondNum, arr.length, x , y)
    console.log(firstNum,secondNum, x)
    if(operator === "+"){
        z = firstNum + secondNum
    }else if(operator === "-"){
        z = firstNum - secondNum
    }else if(operator === "*"){
        z = firstNum * secondNum
    }else if(operator === "/"){
        z = firstNum / secondNum
    }

    return dot.repeat(z)
}

console.log(dotCalculator("..... + ..............."))