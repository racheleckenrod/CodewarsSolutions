// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

// const Test = require('@codewars/test-compat');

// describe("Example Tests", function() {

//   it("ex1", function(){
//     Test.assertEquals(countDeafRats("~O~O~O~O P"), 0);
//   });
  
//   it("ex2", function(){
//     Test.assertEquals(countDeafRats("P O~ O~ ~O O~"), 1);
//   });

//   it("ex3", function(){
//     Test.assertEquals(countDeafRats("~O~O~O~OP~O~OO~"), 2);
//   });

// });

// PREP
// P: we are given a string containing a "P" and "O" and "~"
// R: we are to return the number of "O"'s with a "~" between the "P" and the "O" instead of it after the "O".
// E: if given "~0 ~0 0~ P ~0 ~0" we are to return 3
// P: the data to the left and right of the "P" needs to be handled differently, so finding the index of "P" seems like one of the first things to do. then group the chars "~" and "0" together so we have either a coming or going associated with them, then tally the goings. they will be reverse from each other if before the "P" or after. I think I'll make a new array converting the chars into a single char for the ~O or 0~ values, retaining the position of "P". then loop through the new array tallying the values that are going. 

var countDeafRats = function(town) {
    let PIndex = town.indexOf("P")

    let arr = town.split('')
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "~" && arr[i+1] === "O" && i < PIndex) {
            newArr.push("G")
            i++
        } else if (arr[i] === "~" && arr[i+1] === "O" && i > PIndex) {
            newArr.push("C")
            i++
        } else if (arr[i] === "O" && arr[i+1] === "~" && i > PIndex) {
            newArr.push("G")
            i++
        } else if (arr[i] === "O" && arr[i+1] === "~" && i < PIndex) {
            newArr.push("C")
            i++
        }
    }
    // count the "C"
    let str = newArr.join("")

    let result = str.match(/C/g)


    // Your code here
    return result.length
  }
  console.log(countDeafRats("~O~O~O~OP~O~OO~"))
  