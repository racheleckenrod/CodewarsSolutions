// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// Since Node 10, we're using Mocha.
// // You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// // Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });

// Pseudocode: sort of unclear about exactly what is being asked in this kata, are they going to add the color or is that supposed to be part of the function they are asking for?
// definately see they are asking for a class but not setting the starter code out that way. although it looks like it is intended to be a constructor with its capital letter and all. I'm thinking that it is wanting a Math.random for this.color in the constructor..

var Ghost = function() {
    let randomColor = Math.ceil(Math.random() * 4)
    if(randomColor === 1){
        this.color = "white"
    }else if(randomColor === 2){
        this.color = "yellow"
    }else if(randomColor === 3){
        this.color = "purple"
    }else if(randomColor === 4){
        this.color = "red"
    }
  };

//   var Ghost = function() {
//     this.color = ['white','yellow','red','purple'][Math.floor(Math.random()*4)];
//   };