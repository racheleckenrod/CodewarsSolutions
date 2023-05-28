// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

// f(n=100) // returns 5050 
// It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).

// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code. 

// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

// Credits: this kata was inspired by the farzher's kata 'Sum of large ints' . In fact, it can be seen as a sort of prep kata for that one.

// describe("Kata", () => {
//     it("Basic tests", () => {
//       assert.strictEqual(f(100), 5050);
//       assert.strictEqual(f(300), 45150);
//       assert.strictEqual(f(50000), 1250025000);
//       assert.strictEqual(f('n'), false, "n must be a number");
//       assert.strictEqual(f(), false, "n must be a value");
//       assert.strictEqual(f(3.14), false, "n must be an integer");
//       assert.strictEqual(f(0), false, "a value of n greater than 0 is required");
//       assert.strictEqual(f(-10), false, "a positive value of n is required");
//     });
//   });

// PREP
// P: given a number
// R: return a sum of the numbers from 1 to the number
// P: make an array and sum it up for first try- 
function f(n){
    let arr = []
    if(Number.isInteger(n) && n > 0){

      for(let i = 1; i <= n; i++){
          arr.push(i)
      }
        return arr.reduce((acc, c) => +acc + +c,0)
    }else return false
    };
