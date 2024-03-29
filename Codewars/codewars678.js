// Clash Royale is a tower rush video game which pits players in games featuring two players in which the objective is to destroy the most opposing towers. 

// Players build card decks in order to play.

// It's crucial to know the opponent's card deck and the opponent's current hand in order to play good. 
// Let's help those who can't count the cards successfully.

// Card Deck Example:
// Full Deck Example
// Current Hand Example:
// Current Hand Example
// Each deck in Clash Royale has 8 cards, and you can have 4 cards at any time during the game.

// After you play any card from your hand => this card goes to the end of the "queue" and goes back to your hand after you play another 4 cards. And so on.

// Queue Scheme
// Task:

// Given an array of cards played in a certain order. You need to return the opponent's current hand (4 cards max) in any order. 
// If you receive less than 8 cards as an argument => return as many cards as we could possibly know from this play.

// getCurrentHand(['Hog Rider','Earthquake','Archer Queen','Giant Skeleton','Fire Spirit','Cannon']) // => ['Hog Rider', 'Earthquake']
// Example:

// currentHand([
//   'Hog Rider',
//   'Earthquake',
//   'Archer Queen',
//   'Giant Skeleton',
//   'Fire Spirit',
//   'Cannon',
//   'Skeletons',
//   'Hog Rider',
//   'The Log',
//   'Fire Spirit',
//   'Earthquake',
//   'Giant Skeleton',
//   'Skeletons',
//   'Archer Queen',
//   'Fire Spirit',
//   'Cannon',
//   'Giant Skeleton',
//   'Skeletons',
// ]); // => ['Archer Queen', 'Earthquake',  'The Log', 'Hog Rider']
// Explanation:

// The current hand definitely can't contain:

// 'Fire Spirit', 'Cannon', 'Giant Skeleton', 'Skeletons'

// Because they're the last played cards withing the 4-card range.

// Archer Queen => definitely in the current hand (no Archer Queen in the last 4 cards played) 
// Skeletons => not in the current hand (we can see Skeletons in the last 4 cards played)

// ...and so on...

// Good luck!
// Pseudocode:
// Looks like to me we have to check the value in the array to see if it matches any of the last four elements of the array, if it matches, move on, if not matches, add to return array

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("currentHand", function() {
//   it("could handle empty array", function() {
//     assert.deepEqual(getCurrentHand([]), [])
//   });
  
//   it("only some of the cards could be determined", function() {
//     const opponentPlays = ['Hog Rider','Earthquake','Archer Queen','Giant Skeleton','Fire Spirit','Cannon'];
//     assert.equal(JSON.stringify(getCurrentHand(opponentPlays).sort()), JSON.stringify(['Hog Rider', 'Earthquake'].sort()));
//   });
  
//   it("all cards could be determined", function() {
//     const opponentPlays = ['Hog Rider','Earthquake','Archer Queen','Giant Skeleton','Fire Spirit','Cannon','Skeletons','Hog Rider','The Log','Fire Spirit','Earthquake','Giant Skeleton','Skeletons','Archer Queen','Fire Spirit','Cannon','Giant Skeleton','Skeletons'];
//     assert.equal(JSON.stringify(getCurrentHand(opponentPlays).sort()), JSON.stringify(['Hog Rider', 'The Log', 'Earthquake', 'Archer Queen'].sort()));
//   });  
// })


function getCurrentHand(arr) {
    let newArr = []
    for(let i = 0; i < arr.length - 4; i++){
        if(arr[i] === arr[arr.length - 1]){
            continue
        }else if(arr[i] === arr[arr.length - 2]){
            continue
        }else if(arr[i] === arr[arr.length - 3]){
            continue
        }else if(arr[i] === arr[arr.length - 4]){
            continue
        }else if(newArr.includes(arr[i])){
            continue
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
}

// baby steps-
//  I used to think of baby steps as just small steps
// today, my idea of "baby steps" has expanded to include more of the circumstances surrounding the action, the environment- and not just on the physical plane (3D) but mentally (4D) and I suppose spiritually (5D). Fully understanding the differences in dimention being similar to the naming of the colors- it is arbitrary and standardized, in other words, refering to the measurement of the frequency of the wave (electromagnetic wave) that we are talking about- I suspect that the ability to talk about things led to the naming of the dimensions, and many people have differing ideas of what that is. 
// anyway, Baby Steps
// What I didn't see:
// all the prep work
// baby steps begin long before they can run,
// 