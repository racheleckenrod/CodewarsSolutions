// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// const Test = require('@codewars/test-compat');

// describe('toWeirdCase', function(){
//   it('should return the correct value for a single word', function(){
//     Test.assertEquals(toWeirdCase('This'), 'ThIs');
//     Test.assertEquals(toWeirdCase('is'), 'Is');
//   });
//   it('should return the correct value for multiple words', function(){
//     Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
//   });
// });

// PREP:
// P: we are given a string containing words and single spaces.
// R: we are to return a string with the words beginning with an Uppercase letter and alternating lowercase letters.
// E: given "codewars is awesome" we are to return "CoDeWaRs Is AwEsOmE"
// P: in the descriptiion it points to odd and even indicies, however since each word is to start over with index[0] and a capital letter, it is possible to simply alternate. first we will split the string in to an array of words, then convert the even indicies to upperCase and the odds to lowerCase. my trusty for loop should work well with this approach. perhaps a for ...of loop here


function toWeirdCase(string){
    let arr = string.split(' ')
    let result = []

    for(let word of arr){
       word = word.split('')

       for(let i = 0; i < word.length; i++){
        if(i % 2 === 0){
            word[i] = word[i].toUpperCase()
        } else {
            word[i] = word[i].toLowerCase()
        }
       }
       result.push(word.join(''))
    }

    return result.join(' ')
    //TODO
  }

  console.log(toWeirdCase("codewars is awesome"))