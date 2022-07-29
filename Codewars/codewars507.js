// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(countBits(0), 0);
//       assert.strictEqual(countBits(4), 1);
//       assert.strictEqual(countBits(7), 3);
//       assert.strictEqual(countBits(9), 2);
//       assert.strictEqual(countBits(10), 2);
//       })
//     })


var countBits = function(n) {
    // n = n.toString(2)
  
    return n.toString(2).split("").reduce((acc,c) => +acc + +c, 0)
    
  };

  console.log(countBits(4))