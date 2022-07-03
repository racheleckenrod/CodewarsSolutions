// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// describe('hex number', () => {
//     it('Basic tests', () => {
//       Test.assertEquals(''.digit(), false);
//       Test.assertEquals('7'.digit(), true);
//       Test.assertEquals(' '.digit(), false);
//       Test.assertEquals('a'.digit(), false);
//       Test.assertEquals('a5'.digit(), false);
//       Test.assertEquals('14'.digit(), false);
//     });
//   });

// PREP
// Parameters: we are given a string 
// results: are to return true if the string is a single digit, else return false

// Pseudocode:
// this challange is titled having to do with regexp... so I suppose I'll look it up
// good learning opportunity to get more comfortable with the concept of prototype and adding methods to the global String object. in this case .digit. I did search and find an answer for this challange...

String.prototype.digit = function() {
    return /^\d$/i.test(this);
  };

//   I was picturing something more like this...

// String.prototype.digit = function() {
//   return /^[0-9]$/.test(this);
// };

// wasn't totally clear on using the "this" in the solution and I see how it is needed to give a prototype answer... 