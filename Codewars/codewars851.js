// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
// STRINGSPERFORMANCEALGORITHMS


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe('Sample Tests', function(){
//   it("Tests", () => {
//     assert.strictEqual(scramble('rkqodlw',           'world'      ), true );
//     assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
//     assert.strictEqual(scramble('katas',             'steak'      ), false);
//     assert.strictEqual(scramble('scriptjavx',        'javascript' ), false);
//     assert.strictEqual(scramble('scriptingjava',     'javascript' ), true );
//     assert.strictEqual(scramble('scriptsjava',       'javascripts'), true );
//     assert.strictEqual(scramble('javscripts',        'javascript' ), false);
//     assert.strictEqual(scramble('jscripts',          'javascript' ), false);
//     assert.strictEqual(scramble('aabbcamaomsccdd',   'commas'     ), true );
//     assert.strictEqual(scramble('commas',            'commas'     ), true );
//     assert.strictEqual(scramble('sammoc',            'commas'     ), true )
//   });
  
//   it("Large inputs test", () => {
//     let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
//     let s2 = "zyxcba".repeat(9_000);
//     assert.strictEqual(scramble(s1, s2), true);
//   });
// });

// PREP 
// P: we are given two strings.
// R: we are to return true or false. true if the first string ,string1, contains all the letters in string2.
// P: since it is necessary to handle duplicates, removing the letters from string1 as they are found we will do. so, findIndexOf the letter and remove it from string1, continue or return false. 


// function scramble(str1, str2) {
//     let arr1 = str1.split('')
//     let arr2 = str2.split('')

//     for(let i = 0; i < arr2.length; i++){
//         console.log("TEST")
//         for(let j = 0; j < arr1.length; j++){
//             console.log("T2")
//             if(arr2[i] === arr1[j]){
//                 console.log("T3")
//                 // remove it from arr1
//                 arr1.splice(j, 1)
//                 console.log(arr1)
//                 break
//             } else if (j === arr1.length - 1){
//                 return false
//             }
//         }
//     }

//     return true
//   }

//   console.log(scramble('scriptingjav', 'javascript' ))
  
//   we were warned about performance, and my first solution passes the small strings but not with very large strings. I need to implement a different solution. Perhaps one that does not use nested for loops, as I had originally intended. Trying to wrap my head around using the built in methods: if string1 contains the letter in string2, remove it and continue else return false for each letter in string2. how to loop through the letters in string1 or string2 without using for loops. forEach and findIndex, then do the splice on the string1. perhaps converting the very long strings to arrays is not performent enough, and I need to do this one with strings in stead of arrays, or I could use includes? then remove it? any removing will need to be done with a mutable array, or two slices added together? 


function scramble(str1, str2) {
    let arr2 = str2.split('')
    let arr1 = str1.split('')

    for(let i = 0; i < arr2.length; i++){
        if(str1.indexOf(arr2[i]) === -1){
            return false
            
        } else if (str1.indexOf(arr2[i]) === 0){
           
            str1 = str1.slice(1)

        } else {
            // remove it
         
            str1 = str1.slice(0, str1.indexOf(arr2[i])) +  str1.slice(str1.indexOf(arr2[i]) + 1)
           
           
        }

    }
   
return true
}
console.log(scramble('scriptingjava', 'javascript' ))


// another failed attempt at passing the timed test, led me to ask chat gpt for help. It came up with the solution to create an object that holds the character count of letters in the string1, then check the string2 for the counted letters. 

function scramble(str1, str2) {
    let letterCount = {}

    for(let letter of str1) {
        letterCount[letter] = (letterCount[letter] || 0) + 1
    }

    for(let letter of str2) {
        if(!letterCount){
            return false
        }
        letterCount[letter]--
    }

    return true

}function scramble(str1, str2) {
    const charCount = {};
  
    // Count the occurrence of each character in str1
    for (let char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Check if characters in str2 can be formed using str1
    for (let char of str2) {
      if (!charCount[char]) {
        return false; // Character is missing in str1
      }
      charCount[char]--;
    }
  
    return true;
  }