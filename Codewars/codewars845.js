// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals


// const chai = require('chai');
// const assert = chai.assert;

// describe("solution", function(){
//   it ("should handle small numbers", function(){
//     assert.strictEqual(solution(1), 'I', '1 should return "I"')
//     assert.strictEqual(solution(2), 'II', '2 should return "II"')
//     assert.strictEqual(solution(3), 'III', '3 should return "III"')
//     assert.strictEqual(solution(4), 'IV', '4 should return "IV"')
//     assert.strictEqual(solution(5), 'V', '5 should return "V"')
//     assert.strictEqual(solution(9), 'IX', '9 should return "IX"')
//     assert.strictEqual(solution(10), 'X', '10 should return "X"')
//     assert.strictEqual(solution(11), 'XI', '11 should return "XI"')
//     assert.strictEqual(solution(19), 'XIX', '19 should return "XIX"')
//     assert.strictEqual(solution(22), 'XXII', '22 should return "XXII"')
//     assert.strictEqual(solution(15), 'XV', '15 should return "XV"')
//   });
  
//   it ("should handle large numbers", function(){
//     assert.strictEqual(solution(1000), 'M', '1000 should, "M"')
//     assert.strictEqual(solution(1001), 'MI', '1001 should, "MI"')
//     assert.strictEqual(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
//     assert.strictEqual(solution(2007), 'MMVII', '2007 should, "MMVII"')
//     assert.strictEqual(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
//   });
// });

// PREP
// P: we are given a number between 0 and 4000.
// R: we are to return a string with the Roman Numeral for that number.
// E: given 2334, we are to return "MMCCCXXXIV"
// P: handle each possible digit with a return value and concatenate them together, checking for the length of the number first. if number.toString() is length 4, 3,2,1. then go with the value of the digit and have a string to concatenate. 
// if we put the number into an array and reverse it, handle the digit by checking it and pushing something to a new array, we can unshift the tens spot with the next digit, and same for hundreds and thousands. then join the array. 



function solution(number){
    let num = number.toString().split('').reverse()
    let arr = []

    if (num[0] === '1'){
        arr.push('I')
    }else if (num[0] === '2'){
        arr.push('II')
    }else if (num[0] === '3'){
        arr.push('III')
    }else if (num[0] === '4'){
        arr.push('IV')
    }else if (num[0] === '5'){
        arr.push('V')
    }else if (num[0] === '6'){
        arr.push('VI')
    }else if (num[0] === '7'){
        arr.push('VII')
    }else if (num[0] === '8'){
        arr.push('VIII')
    }else if (num[0] === '9'){
        arr.push('IX')
    }

    if (num[1] === '1'){
        arr.unshift('X')
    }else if (num[1] === '2'){
        arr.unshift('XX')
    }else if (num[1] === '3'){
        arr.unshift('XXX')
    }else if (num[1] === '4'){
        arr.unshift('XL')
    }else if (num[1] === '5'){
        arr.unshift('L')
    }else if (num[1] === '6'){
        arr.unshift('LX')
    }else if (num[1] === '7'){
        arr.unshift('LXX')
    }else if (num[1] === '8'){
        arr.unshift('LXXX')
    }else if (num[1] === '9'){
        arr.unshift('XC')
    }

    if (num[2] === '1'){
        arr.unshift('C')
    }else if (num[2] === '2'){
        arr.unshift('CC')
    }else if (num[2] === '3'){
        arr.unshift('CCC')
    }else if (num[2] === '4'){
        arr.unshift('CD')
    }else if (num[2] === '5'){
        arr.unshift('D')
    }else if (num[2] === '6'){
        arr.unshift('DC')
    }else if (num[2] === '7'){
        arr.unshift('DCC')
    }else if (num[2] === '8'){
        arr.unshift('DCCC')
    }else if (num[2] === '9'){
        arr.unshift('CM')
    }

    if (num[3] === '1'){
        arr.unshift('M')
    }else if (num[3] === '2'){
        arr.unshift('MM')
    }else if (num[3] === '3'){
        arr.unshift('MMM')
    }

    return arr.join('')
    // convert the number to a roman numeral
  }


// from solutions:
// function solution(number)
// {
//   var result   = '',
//       decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
//       roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

//   decimals.map(function (value, index) {
//     while (number >= value) {
//       result += roman[index];
//       number -= value;
//     }
//   });
  
//   return result;
// }




  console.log(solution(2008))