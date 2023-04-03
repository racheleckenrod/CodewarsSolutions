// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

// const Test = require('@codewars/test-compat');

// describe( "Scorer Function", function() {
//   it( "should value this as worthless", function() {
//     Test.expect( score( [2, 3, 4, 6, 2] ) == 0,   "Should be 0 :-(" );
//   });
  
//   it( "should value this triplet correctly", function() {
//     Test.expect( score( [4, 4, 4, 3, 3] ) == 400, "Should be 400" );
//   });
  
//   it( "should value this mixed set correctly", function() {
//     Test.expect( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
//   });
// });

// PREP
// P: we are given an array of five numbers
// R: we are to return a number, a score of the dice.
// E: if three of the same are rolled score certain points and if a single ace or five is rolled, score points.
// P: I think sorting the numbers would be good and then can test for the three in a row and for the fives and ones, adding the correct points to the total. the instructions say not to modify the original so sorting must be done on a copy. we can then remove the triplet from the joined array if present and check the remainder with a while loop for ones and fives , removing them as we go




function score( dice ) {
    let roll = dice.toString().slice(0)
    roll = roll.split('').sort().join("")
    let score = 0

    if(roll.includes("111")){
        score += 1000
        roll = roll.replace("111", "")
    } else  if(roll.includes("222")){
        score += 200
        roll = roll.replace("222", "")
    } else  if(roll.includes("333")){
        score += 300
        roll = roll.replace("333", "")
    } else  if(roll.includes("444")){
        score += 400
        roll = roll.replace("444", "")
    } else  if(roll.includes("555")){
        score += 500
        roll = roll.replace("555", "")
    } else  if(roll.includes("666")){
        score += 600
        roll = roll.replace("666", "")
    }

    while (roll.includes("1")){
        score += 100
        roll = roll.replace("1", "")
    }

    while (roll.includes("5")){
        score += 50
        roll = roll.replace("5", "")
    }
    

return score


    // Fill me in!
  }

  console.log(score(21511))