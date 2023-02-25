// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// const { assert, config } = require('chai');
// config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
    
//     a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

//     a1 = ["xyz", "live", "strong"]
//     assert.sameOrderedMembers(inArray(a1, a2), ["live", "strong"])

//     a1 = ["live", "strong", "arp"]
//     assert.sameOrderedMembers(inArray(a1, a2), ["arp", "live", "strong"])

//     a1 = ["tarp", "mice", "bull"]
//     assert.sameOrderedMembers(inArray(a1, a2), [])
//   });
// });

// PREP
// P: we are given two arrays of strings
// R: we are to return an array of strings from array1 that appear somewhere within the strings of array2. the return array is to be sorted with the shortest string first. not sorted that way, but instead, alphabetically lexigraphical?
// E: see above
// P: sort array1 by length, take each element from array1 and check to see if any elements of array2 "includes" element from array1. if it does, push array1 element into return array.


function inArray(array1,array2){
    let array3 = []
    array1.sort()

  

    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array2[j].includes(array1[i])){
                array3.push(array1[i])
                break
            }

        }
        
    }
    return array3
    //...
  }

  console.log(inArray( ["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]))