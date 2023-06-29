// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Courtesy of rosettacode.org


// const strictEqual = require('chai').assert.strictEqual;

// function doTest (romanString, expected) {
// 	const actual = solution(romanString);
// 	strictEqual(actual, expected, `for roman number ${romanString}`);
// }

// describe("Tests", () => {
// 	it("sample tests", () => {
// 		doTest('XXI', 21);
// 		doTest('I', 1);
// 		doTest('IV', 4);
// 		doTest('MMVIII', 2008);
// 		doTest('MDCLXVI', 1666);
// 	});
// });

// PREP
// P: we are given a string of capital letters corresponding to the roman numerals.
// R: we are to return the number represented by the given string.
// E: given MMCDLXXIV returns 2000 + 400 + 50 + 20 + 4 = 2474
// P: tally the values, checking for the 4 values first then the other values. 




function solution (roman) {
   
    let num = 0

    while( roman[0] === 'M'){
        num += 1000
        roman = roman.slice(1)
    }

    if(roman[0] === 'C' && roman[1] === 'M'){
        num += 900
        roman = roman.slice(2)
    }else if(roman[0] === 'C' && roman[1] === 'D'){
        num += 400
        roman = roman.slice(2)
    }else if(roman[0] === 'D'){
        num += 500
        roman = roman.slice(1)
    }
    
    while(roman[0] === 'C'){
        num += 100
        roman = roman.slice(1)
    }

    if(roman[0] === 'X' && roman[1] === 'C'){
        num += 90
        roman = roman.slice(2)
    }else if(roman[0] === 'X' && roman[1] === 'L'){
        num += 40
        roman = roman.slice(2)
    }else if(roman[0] === 'L'){
        num += 50
        roman = roman.slice(1)
    }
    while(roman[0] === 'X'){
        num += 10
        roman = roman.slice(1)
    }

    if(roman[0] === 'I' && roman[1] === 'X'){
        num += 9
        roman = roman.slice(2)
    }else if(roman[0] === 'I' && roman[1] === 'V'){
        num += 4
        roman = roman.slice(2)
    }else if(roman[0] === 'V'){
        num += 5
        roman = roman.slice(1)
    }
    while(roman[0] === 'I'){
        num += 1
        roman = roman.slice(1)
    }

    return num
  }

  console.log(solution('MDCLXVI'))