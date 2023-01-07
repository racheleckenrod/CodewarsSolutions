// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// seems pretty straightforward.
// PREP
// Parameters:
// we are given a string
// Results
// we are to return the Number of consonants in the string.
// Example
// vowels are to be aeiou, so all except them. do not count special characters or numbers.
// Pseudocode:
// make into an array, determine that each index contains a [a-z] that is not [/aeiou/] tally up the indicies that match.

function consonantCount(str) {
    let arr = str.split('')
    let letters = arr.filter(item => item.match(/[b-z]/-gi) )
    return letters.filter(item => !item.match(/[eiou]/-gi)).length
  }


//   a one liner
// const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length;
