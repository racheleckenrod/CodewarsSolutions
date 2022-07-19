// Mars rover is on an important mission to take pictures of Mars.

// In order to take pictures of all directions it needs an algorithm to help it turn to face the correct position.

// Mars rover can face 4 different directions, that would be N, S, E, W. Every time it needs to turn it will call a command turn passing the current position it is facing and the position it wants to face.

// For example:

// if it asks turn N E the expected result would be right
// if it asks turn N W the expected result would be left
// Mars rover can only make one move at a time and it will only request positions that require a single move.

// Can you write an algorithm that tells if it should move left or right?

// const assert = require('chai').assert;

// describe('turn', () => {
//   describe('facing N', () => {
//     it('should turn right to face E', () => {
//       const actual = turn('N', 'E');
//       const expected = 'right';
      
//       assert.equal(actual, expected);
//     });
//   });

//   describe('facing S', () => {
//     it('should turn right to face W', () => {
//       const actual = turn('S', 'W');
//       const expected = 'right';
      
//       assert.equal(actual, expected);
//     });
//   });
// });

function turn(current, target) {
    if(current === "N" && target === "E"){
        return 'right'
    }else if(current === "N" && target === "W"){
        return 'left'
    }else if(current === "W" && target === "N"){
        return 'right'
    }else if(current === "W" && target === "S"){
        return 'left'
    }else if(current === "S" && target === "W"){
        return 'right'
    }else if(current === "S" && target === "E"){
        return 'left'
    }else if(current === "E" && target === "S"){
        return 'right'
    }else if(current === "E" && target === "N"){
        return 'left'
    }
}