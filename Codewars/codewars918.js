// Short Intro

// Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

// Can you solve this kata? Suuure-You-Can!

// UPDATE: a new kata's harder version is available here.

// The Kata

// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

// Screen:

// screen

// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);
// Output

// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);
// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

// Notice: changing some of the input data might not help you.

// Examples

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
// then I should get:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// Result:

// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
// OFF-TOPIC

// Some music to get in the mood for this kata :

// Street Fighter 2 - selection theme


// const chai   = require("chai")
// const assert = chai.assert
// chai.config.truncateThreshold = 0;


// let moves = []
// let fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ];


// describe("Testing...", function(){
//   it("should work with few moves", function(){
//     moves = ['up', 'left', 'right', 'left', 'left'];
//     assert.deepEqual(streetFighterSelection(fighters, [0,0], moves),['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
//   });

//   it("should work with no selection cursor moves", function(){
//     moves = [];
//     assert.deepEqual(streetFighterSelection(fighters, [0,0], moves),[]);
//   });

//   it("should work when always moving left", function(){
//     moves = ["left","left","left","left","left","left","left","left"];
//     assert.deepEqual(streetFighterSelection(fighters, [0,0], moves),['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);
//   });

//   it("should work when always moving right", function(){
//     moves = ["right","right","right","right","right","right","right","right"];
//     assert.deepEqual(streetFighterSelection(fighters, [0,0], moves),['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);
//   });
  
//   it("should use all 4 directions clockwise twice", function(){
//     moves = ["up","left","down","right","up","left","down","right"];
//     assert.deepEqual(streetFighterSelection(fighters, [0,0], moves),['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);
//   });

//   it("should work when always moving down", function(){
//     moves = ["down","down","down","down"];
//     assert.deepEqual(streetFighterSelection(fighters, [0,0], moves), ['Ken', 'Ken', 'Ken', 'Ken']);
//   });

//   it("should work when always moving up", function(){
//     moves = ["up","up","up","up"];
//     assert.deepEqual(streetFighterSelection(fighters, [0,0], moves), ['Ryu', 'Ryu', 'Ryu', 'Ryu']);
//   });
// });


// PREP
// P: we are given an array of two arrays of fighters, a starting position that is to be [0,0] for each one, and and array of moves of [up,down,left,right]
// R: we are to return an array of fighter's names
// E: see above
// P: Being given the starting position of [0,0] meaning first array, first position. can convert it to something that will give the correct fighter name: fighter[0][0], handle the ups and downs with conditionals that loop through the moves array and push a name to a new return array

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
//   ]

function streetFighterSelection(fighters, position, moves){

    let [first, second] = position

    let results = []

   

    console.log(position)

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "up") {
            first = 0
            results.push(fighters[first][second])
        } else if (moves[i] === "down") {
            first = 1
            results.push(fighters[first][second])
        } else if (moves[i] === "left") {
            if(second === 0) {
                
                second = fighters[first].length - 1
            }else {
                second -= 1
            }
            results.push(fighters[first][second])
        } else if (moves[i] === "right") {
            if (second === fighters[first].length - 1) {
                second = 0
            }else {
                second += 1
            }
            results.push(fighters[first][second])

        }
    }

    return results;
  }

  console.log(streetFighterSelection([
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ], [0,0], ["up","left","down","right","up","left","down","right"]))