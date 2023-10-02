// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

// const Test = require('@codewars/test-compat');

// describe('vowel', () => {
//   it('Basic tests', () => {
//     Test.assertEquals(''.vowel(), false);
//     Test.assertEquals('a'.vowel(), true);
//     Test.assertEquals('E'.vowel(), true);
//     Test.assertEquals('ou'.vowel(), false);
//     Test.assertEquals('z'.vowel(), false);
//     Test.assertEquals('lol'.vowel(), false);
//   });
// });

String.prototype.vowel = function() {
    regex = /[aeiou]/i
   
    return regex.test(this) && this.match(regex).length === 1
  };


// or more simply:

// String.prototype.vowel = function() {

//   return /^[aeiou]$/i.test(this) 
// }