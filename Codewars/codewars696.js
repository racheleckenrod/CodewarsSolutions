// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde");
//     assert.strictEqual(shorter_reverse_longer("hello", "bau"), "bauollehbau");
//     assert.strictEqual(shorter_reverse_longer("fghi", "abcde"), "fghiedcbafghi");
//   });
// });

// PREP
// Parameters:
//  we are given two strings.
// we are to return a string with the shorter string(b if they are the same length) then the other string, but reversed, and then the first string again.
// Pseudocode:
// find shorter string(or use b if they are the same).
// reverse other string, return short + reversed + short

function shorter_reverse_longer(a,b){
    
return a.length < b.length ? a + b.split('').reverse().join('') + a : b + a.split("").reverse().join("") + b

  }
  console.log(shorter_reverse_longer("fghi", "abcde"), "fghiedcbafghi")


//   function shorter_reverse_longer(a,b){
//     if (a.length < b.length)
//     {
//         return a + b.split('').reverse().join('') + a;
//     }
//     else
//     {
//         return b + a.split('').reverse().join('') + b;
//     }
//   }