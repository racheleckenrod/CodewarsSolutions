// Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
// PREP
// Parameters:
// given a positive interger
// Return:
// are to return true if the product of the sum of its digits and that sum reversed equal the given number.


// example:
// n = abcd
// then we check if the sum of its digits a+b+c+d = ef, and the reverse of the sum, fe
// so ef * fe = abcd?

// if it does, return true, otherwise, return false.

// we will need to get the sum of the digits, perhaps put the number to a string, then split the string into an array, and reduce it. store that number to use later, then put the number into a string and then an array and then reverse it, put it back into a number and multiply by the stored sum . Then check to see if that product is equal to the number you started with.

function numberJoy(n) {
    let x = n.toString().split("")
    console.log(x)
    let sum = x.reduce((acc,c) => +acc + +c,0)
    // now to reverse sum
    let revSum = sum.toString().split("").reverse().join("")
    // multiply sum and revSum
    let prod = sum * Number(revSum)
    console.log(sum, revSum, prod)
    // check if prod = n
    return prod == n
}

console.log(numberJoy(1729))