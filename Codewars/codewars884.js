// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(titleCase(''), '')
// Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
// Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
// Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')

// });
// });

// PREP
// P: we are given one or two strings
// R: we are to return a string with Title Case. Title Case is always capitalized the first letter, and each first letter of the rest of the words, except the words given in the second string, if given.
// E: given a string'the quick brown fox blah blah','the' we are to return 'The Quick Brown Fox Blah Blah'
// the tricky part here is how to get to compare the given minor words that are to begin lowercase. we can split that string and put them into an array and check for them I think it will be a nested loop or a for in loop.

function titleCase(title, minorWords) {
    if(!title) return ''
    let majors = title.split(' ')

    for (let i = 0; i < majors.length; i++) {
        majors[i] = majors[i][0].toUpperCase() + majors[i].slice(1).toLowerCase()
    }

    if(minorWords){
       
    let minors = minorWords.split(' ')
    for (let i = 1; i < majors.length; i++) {
        for (let j = 0; j < minors.length; j++){
            if (majors[i].toLowerCase() === minors[j].toLowerCase()){
                majors[i] = majors[i].toLowerCase()
            }
        }
    }
       }
  return majors.join(' ')
}
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))