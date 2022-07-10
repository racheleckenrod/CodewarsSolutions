// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

// If there are no numbers, which include the digit, return [0,0,0].

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.
// PREP
// Parameters:
// given x- a number, and d- a digit.

// Results:
// return an array of three numbers -
// arr[0] = the number of numbers from 1 to x that include d the digit
// arr[1] = the sum of those numbers
// arr[2] = the product of the numbers
// 
// Example:
// x = 20
// d = 1
// the actual numbers are not returned, but we can make an array and get the number of numbers by the .length
// then do a reduce with adding,
// then a reduce with multiplying
// return the array with those three numbers

function numbersWithDigitInside(x, d) {
    let arr = []
    let returnArr = []
    for(let i = 1; i <= x; i++){
        if(i.toString().includes(d)){
            arr.push(i)
        }
        console.log(arr)
        
    }
    returnArr.push(arr.length)
    let sumArr = arr.reduce((acc,c) => acc + c, 0)
    returnArr.push(sumArr)
    console.log(arr)
    let prodArr = arr.reduce((acc,c) => acc * c, 1)
    if(arr.length === 0){
        prodArr = 0
    }
    returnArr.push(prodArr)

    return returnArr;
  }
  console.log(numbersWithDigitInside(20, 1))