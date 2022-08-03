// Task
// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

// Given n and firstNumber/first_number/first-number, find the number which is written in the radially opposite position to firstNumber.

// Example
// For n = 10 and firstNumber = 2, the output should be 7



// Input/Output
// [input] integer n

// A positive even integer.

// Constraints: 4 ≤ n ≤ 1000.

// [input] integer firstNumber/first_number/first-number

// Constraints: 0 ≤ firstNumber ≤ n - 1

// [output] an integer


// describe("Basic Tests", function(){
//     it("It should works for basic tests.", function(){
    
//     Test.assertEquals(circleOfNumbers(10,2) , 7)
    
//     Test.assertEquals(circleOfNumbers(10,7) , 2)
    
//     Test.assertEquals(circleOfNumbers(4,1) , 3)
    
//     Test.assertEquals(circleOfNumbers(6,3) , 0)
    
//     })})

// PREP 
// Parameters:
// we are given two integers. the first one n is between 4 and 1000.
// the second one is between 0 and n - 1.
// Results:
// we are to return the number opposite the second number if they were in a circle

// looks like it would be half, of n, plus the number, if the number was less than half. if the number is zero, it is exactly half. if the number is greater than half, it would bethe number minus half.

function circleOfNumbers(n, firstNumber) {
    if(firstNumber === 0){
        return n/2
    }else if( firstNumber < n/2){
        return (n/2) + firstNumber
    }else if(firstNumber > n/2){
        return firstNumber - (n/2) 
    }else{
        return 0
    }
}
