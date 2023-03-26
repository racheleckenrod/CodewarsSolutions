// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertDeepEquals( parse("iiisdoso"), [ 8, 64 ] );
//   Test.assertDeepEquals( parse("iiisxxxdoso"), [ 8, 64 ] );
//   });
//   });
  
// PREP
// P: We are given a string containing some letters that correspond to actions to take on a variable 
// R: we are to return an array of numbers from the output of the instructions in the string.
// E: see above
// P: set a variable equal to zero to keep track of the operations set out in the string values. create a loop with conditionals that do what the letters in the string command. output array

// Return the output array, and ignore all non-op characters
function parse( data ) {
    let x = 0
    let result = []
    let instructions = data.split('')

    for (let i = 0; i < instructions.length; i++){
        if (instructions[i] === "i") {
            x += 1
        } else if (instructions[i] === "d") {
            x -= 1
        } else if (instructions[i] === "s") {
            x = x * x
        } else if (instructions[i] === "o") {
            result.push(x)
        }
    }
  return result
}
console.log(parse("iiisxxxdoso"))