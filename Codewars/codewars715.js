// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
// //0 survivors                4 survivors
// //return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
// //1 survivors                3 survivors 
// //return true

// ARRAYS

// const chai = require("chai");
// const assert = chai.assert;

// describe("Solution", function() {
//   it("Basic Tests", function() {
//     assert.strictEqual(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
//     assert.strictEqual(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
//     assert.strictEqual(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
//     assert.strictEqual(hasSurvived([], [1, 2, 3]), true);
//     assert.strictEqual(hasSurvived([1, 2, 3], []), false);
//     assert.strictEqual(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]), false);
//   });
// });

// PREP
// Parameters:
// we are given two arrays of integers
// Results:
// we are to return true if the defenders survive, false if not. There are several special cases. if the lengths of the array are different, the non-empty soldier survives. if there is a tie after battle, the "initial attack" (sum of all numbers) is used to determine a winner- if that is a tie as well, return true.



function hasSurvived(attackers, defenders){
    let attckPow = attackers.reduce((acc,c) => +acc + +c,0)
    let defPow = defenders.reduce((acc,c) => +acc + +c,0)

    let attckSurvivers = []
    let defSurvivers = []

    for(let i = 0; i < attackers.length; i++){
        if(attackers[i] > defenders[i] || !defenders[i]){
            attckSurvivers.push(attackers[i])
        }
    }

    for(let i = 0; i < defenders.length; i++){
        if(defenders[i] > attackers[i] || !attackers[i]){
            defSurvivers.push(defenders[i])
        }
    }
    console.log(attckSurvivers, defSurvivers)

    if(defSurvivers.length === attckSurvivers.length){
        return defPow >= attckPow
    }else{
        return defSurvivers.length > attckSurvivers.length
    }

  }
  
  console.log(hasSurvived([1,3,5,7], [2,4]), true)