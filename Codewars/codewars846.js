// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// onst Test = require('@codewars/test-compat');

// describe('Simple Tests', function() {
//   it('should handle simple tests', function() {
//     Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
//     Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
//     Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
//   });
// });

// PREP
// P: we are given a string
// R: we are to return a string containing a letter that is the first non repeating letter. it shouls be the same case as the given letter even though repeating characters can be of either case.
// E: given "STress" we should return "T"
// P: to return the proper case, we will find the answer with a .toLowerCase() string and return it using the original string. loop through the letters to look for more of them, and if not find any, return the letter at the position from original string. use Set to get a string of unique values and return the character first not in the Set string


function firstNonRepeatingLetter(s) {
    let arr = s.toLowerCase().split('')
    let repeats = []

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){

            if( arr[i] === arr[j]){
                console.log('i=',i,'j=',j)
                repeats.push(arr[i])
            }
        }
    }
    console.log(repeats)
    // compare repeats with lowercase array
   for(let i = 0; i < arr.length; i++){
    if(!repeats.includes(arr[i])) {
        return s[i]
    }
   }
   return ''
  }

  console.log(firstNonRepeatingLetter('moonmendd'))