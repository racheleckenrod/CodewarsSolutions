// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// const Test = require('@codewars/test-compat');

// describe("Let's go...", function() {
// it("Basic tests", function() {
//   Test.assertEquals(calculate("1plus2plus3plus4"), '10');
//   Test.assertEquals(calculate('1minus2minus3minus4'), '-8');
// 	Test.assertEquals(calculate('1plus2plus3minus4'), '2');
// })
// });

// PREP
// P: we are given a string of numbers and words "plus" and "minus"
// R: we are to return a string of the addition and/or subtraction of the numbers
// E: if given "1plus2plu3" we are to return "6"
// P: i will find out what happens when we split the string on the different words and see if I can replace the words with the operators. Now that I have a string that has the operators replacing the letters, to sum the string, I will loop through it, checking for if the element is a number or an operator and which one. I need to account for multidigit numbers. I can push num into total, keeping the minus with the num and making it negative, then sum the array. Maybe need to do in two steps, first gather the digits into the numbers, keeping the operators, then do a separate loop to attach the minuses to the following number, then sum the array.

function calculate(str) {

    // let add = str.split("plus").join("+")
    // let sub = str.split("minus").join("-")
    let nums = str.split("plus").join("+").split("minus").join("-").split("")
    let total = []
    let num = ""

    for (let i = 0; i < nums.length; i++) {

        if(!isNaN(Number(nums[i]))) {
            num += nums[i]
            if(i === nums.length-1) {
                total.push(num)
            }
        }else {
            total.push(num)
            total.push(nums[i])
            num = ""
        }

    }
    // attach minus sign to following number

    for (let i = 0; i < total.length; i++){
        if (total[i] === "-") {
            total[i+1] *= -1
        }
    }

    // make a new array to reduce

    let sum = []

    for (let i = 0; i < total.length; i++) {
        if(!isNaN(Number(total[i]))) {
            sum.push(total[i])
        }
    }


    //your code here...
    return sum.reduce((acc,c) => acc + +c, 0).toString()
    }

    console.log(calculate('11plus22plus33minus44'))


    // much more concise code

    // function calculate(str) {
    //     let result = '';
        
    //     result = str.split('plus').join(' ')
    //               .split('minus').join(' -')
    //               .split(' ').reduce((a,c)=> +a + +c)  
    //     return result+'';
    //     }