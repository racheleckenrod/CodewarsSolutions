// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0
// FUNDAMENTALS

// const {assert} = require("chai");

// describe("Tests", () => {
//   it("tests", () => {
//     assert.strictEqual(longestPalindrome("a"), 1);
//     assert.strictEqual(longestPalindrome("aa"), 2);
//     assert.strictEqual(longestPalindrome("baa"), 2);
//     assert.strictEqual(longestPalindrome("aab"), 2);
//     assert.strictEqual(longestPalindrome("zyabyz"), 1);
//     assert.strictEqual(longestPalindrome("BaaBcd"), 4);
//     assert.strictEqual(longestPalindrome("baablkj12345432133d"), 9);
    
//     assert.strictEqual(longestPalindrome(""), 0);
//     assert.strictEqual(longestPalindrome("Aa"), 1);
//   });
// });

// PREP
// P: we are given a string that may contain a palidrome.
// R: we are to return the length of the longest palidrome.
// E: "abcfddfe" returns 4 for the "fddf" portion.
// P: we could make a variable for the palidrome, update it anytime we find a longer one and return the length of it at the end of looping through the string. we would need to loop through the string beginning with the first char and test a split()reverse()join() and compare it with the original to see if it is a palidrome for each additional char. then start with the second char in the string and go through the rest of it. updating the variable if finding a longer palidrome.

function longestPalindrome(s){
    let palindrome = ""
   
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            let test = s.slice(i, j)
            if (test === test.split('').reverse().join('') && test.length > palindrome.length) {
                palindrome = test
            }
        }
        
    }

    return palindrome.length
    //your code here
  }

  console.log(longestPalindrome("BaedaBcd"), 4)