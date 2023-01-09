
// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.


// const assert = require('chai').assert

// describe("Tests",()=>{
//   it('Fixed tests', ()=>{
//     assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
//     assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
//     assert.strictEqual(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
//   });
// });

// PREP
// Parameters:
// we are given an array of arrays and a number of miniwind needed to win.
// Results:
// we are to return 'Winner!' if miniwins >= wins, else return 'Loser!'
// Example: [['hci', 65], ['fff', 68]] find value of char and compare to index[i][1]
// Pseudocode:
// instead of for loops, maybe I could do this with the methods.
// going to have to split the index[i][0] so we can acess each one
// filter the inner array to match the value of the index[1], check the lengths of the new inner arrays and compare the number of lengths >=1 with the win number.

function bingo(ticket, win){
    let miniwins = 0

    for(let i = 0; i < ticket.length; i++){
        let chars = ticket[i][0].split('')
        let char = String.fromCharCode(ticket[i][1])

        for(let j = 0; j < chars.length; j++){
            if( char === chars[j] ) {
                miniwins += 1
            }
        }
        

        
    }

    if( miniwins >= wins){
        return "Winner!"
    }else {
        return "Loser!"
    }

}