// DESCRIPTION:
// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

// pseudocode:
// handle no parameters given and returning "z"
// convert to ascii, add (reduce), check for > 26 and subtract 26 then convert back to letter.

// const { assert } = require('chai');

// describe("Fixed tests", () => {
//   const tests = [
//     [['a', 'b', 'c'], 'f'],
//     [['z'], 'z'],
//     [['a', 'b'], 'c'],
//     [['c'], 'c'],
//     [['z', 'a'], 'a'],
//     [['y', 'c', 'b'], 'd'],
//     [[], 'z']
//   ];
//   tests.forEach(test => {
//     const str = test[0].map(x => `"${x}"`).join(', ');
//     it(`addLetters(${str})`, () => {
//       assert.strictEqual(addLetters(...test[0]), test[1]);
//     });
//   });
// });


function addLetters(...letters) {
    if(letters.length === 0) return 'z'

    let values = []
    // console.log(letters, letters.length)
    for(let i = 0; i < letters.length; i++){
        values.push(letters[i].charCodeAt(0) - 96)
    }
    console.log(values)
    let value = values.reduce((acc, c) => acc + c,0) 
    while(value > 26){
        value = value - 26
    }

    return String.fromCharCode(value + 96)
  }

  console.log(addLetters('z', 'b', 'c'))