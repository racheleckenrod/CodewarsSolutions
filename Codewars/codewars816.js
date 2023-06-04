// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD


// describe("Alternate case", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(alternateCase("abc"), "ABC");
//       assert.strictEqual(alternateCase("ABC"), "abc");
//       assert.strictEqual(alternateCase("Hello World"), "hELLO wORLD"); 
//     })
//   });

// PREP
// we are given a string of upper and lowercase letters
// we are to return a string with each letter in the opposite case.
// example: aBC => Abc
// Pseudocode: check if it is uppercase, change to lowercase, then check for lowercase and change it to uppercase. use for loop, convert to array then back to string

function alternateCase(s) {
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++)
    if(arr[i] === arr[i].toUpperCase()){
        arr[i] = arr[i].toLowerCase()
    }else{
        arr[i] = arr[i].toUpperCase()
    }
    return arr.join('')
  }

  console.log(alternateCase('Rachel Eckenrod'))