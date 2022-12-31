// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

// Examples
// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7

// PREP
// Parameters:
// we are given a string
// Results:
// we are to return the number of unique consonants
// Example:
// from above, notably Dad has one as upper and lower case should be treated as the same., in otherwords, use .toLowerCase()
// Pseudocode:
// I am thinking to create an array of consonants and returen the length of it, good use for Set and filter out vowels 
// also have to filter out non letters



function countConsonants(str) {
    let arr = str.toLowerCase().split('').filter(item => item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)
    console.log(arr)
    return [...new Set(arr)].join('').replace(/[aeiou]/g, '').length
   

}
console.log(countConsonants("aeiou11!!"))