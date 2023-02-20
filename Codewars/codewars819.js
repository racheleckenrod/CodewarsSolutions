// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// describe("Basic tests", function(){
//     Test.assertDeepEquals(capitalize("abcdef",[1,2,5]),'aBCdeF');
//     Test.assertDeepEquals(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
//     Test.assertDeepEquals(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
//     Test.assertDeepEquals(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
//     Test.assertDeepEquals(capitalize("codewarriors",[5]),'codewArriors');
//     Test.assertDeepEquals(capitalize("indexinglessons",[0]),'Indexinglessons');
//     });


// PREP
// we are given a string and and array of numbers
// we are to return a string with the letters capitalized in the indexes that were in the array.
// ex: "codewars", [1,3,4,5] => cOdEWArs

// Pseudocode:
// split string into array, check the index for being in the array, and if it is, .toUpperCase()

function capitalize(s,arr){
    let split = s.split('')
    for(let i = 0; i < split.length; i++){
        if(arr.includes(i)){
            split[i] = split[i].toUpperCase()
        }
    }
    return split.join('')
  };