// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// const chai = require('chai');
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe('Sample Tests', function() {
//   function test(string, expected) {
//     it(`<code>'${string}'</code>`, function() {
//       assert.deepEqual(count(string), expected);
//     });
//   }

//   test('', {});
//   test('a', {'a': 1});
//   test('ab', {'a': 1, 'b': 1});
//   test('aba', {'a': 2, 'b': 1});
//   test('ABC', {'A': 1, 'B': 1, 'C': 1});
// });

// PREP
// P: we are given a string of upper and/or lower case letters
// R: we are to return an object with keys of the letters and values of how many of each are present in the string. return an empty object if given an empty string.
// E: given "lmnop" we are to return {'l': 1, 'm': 1, 'n': 1, 'o': 1, 'p': 1, } does not say what order to list them in.
// P: this reminds me of the frontend Masters course looping through and saving the values,
// create empty object, check for key in obj, if not there, add it, if is there increase value by one. 

function count(string) {
    let result = {}
    let arr = string.split('')

    for(let i = 0; i < arr.length; i++){
        if(result[arr[i]]) {
            result[arr[i]] += 1
        }else{
            result[arr[i]] = 1
        }
    }
    // TODO
    return result
  }



//   also works:
function count(string) {
    let result = {}
    let arr = string.split('')
    
    for(let i = 0; i < arr.length; i++){
      if(!result[arr[i]]){
        result[arr[i]] = 1
      }else{
        result[arr[i]] ++
      }
    }
  
    return result
  }
  console.log(count('abacde'))