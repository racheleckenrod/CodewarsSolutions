// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

// // STRINGSFUNDAMENTALS
// describe("Fixed tests", function() {
//     it("Should count correctly", function() {
//       assert.equal(countLettersAndDigits("hel2!lo"), 6);
//       assert.equal(countLettersAndDigits("n!!_ice!!123"), 7);
//       assert.equal(countLettersAndDigits("1"), 1);
//       assert.equal(countLettersAndDigits("?"), 0);
//       assert.equal(countLettersAndDigits("12345f%%%t5t&/6"), 10);
//       assert.equal(countLettersAndDigits("aBcDeFg090"), 10);
//       assert.equal(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);
//     });
//   });

// PREP
// P: we are given a string
// R: we are to return the number of letters and digits in the string
// E: if given "hello 23" we are to return 7
// P: we can do a regex match and return the length of the array produced.


function countLettersAndDigits(input) {
    let matches = input.match(/[0-9a-z]/gi) 
    return matches ? matches.length : 0
    
  }

  console.log(countLettersAndDigits("?"))


//   or a oneliner:
// function countLettersAndDigits(input) {
    // return input.match(/[0-9a-z]/gi) ? input.match(/[0-9a-z]/gi).length : 0
// }