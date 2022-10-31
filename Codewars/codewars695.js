// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552
// You will be receiving values higher than 10, all valid.

// Enjoy it!!

// const { assert } = require('chai');

// describe("Example Tests", function() {
//   it( "Test", () => {
//     assert.strictEqual(nextPal(11), 22)
//     assert.strictEqual(nextPal(188), 191)
//     assert.strictEqual(nextPal(191), 202)
//     assert.strictEqual(nextPal(2541), 2552)
//   });
// });

// PREP
// Parameters:
// we are given a number greater than 10
// Results:
// we are to return the next higher palindrome number
// example:
//  56 would return 66
// Pseudocode:
// come up with a check and run it on each number until a palindrome is found.
// check first digit and last digit, then next. if odd number of digits or even...



function nextPal(val) {
    
   
for(let i = 0; i < 99999999; i++){
        
        let arr = val.toString().split('')
        let rev = arr.slice().reverse().join('')
        let num = arr.join('')
        console.log(arr, rev, num)
        if(rev === num){
            return num
        }else{
            val += 1
        }
       
    }
}
    console.log(nextPal(5678))