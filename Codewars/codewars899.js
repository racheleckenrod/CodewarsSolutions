// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

// If you like this Kata, please try:

// Word values

// Vowel-consonant lexicon

// STRINGSFUNDAMENTALS

// describe("Basic tests", function(){
//     Test.assertEquals(solve("zodiac"),26);
//     Test.assertEquals(solve("chruschtschov"),80);
//     Test.assertEquals(solve("khrushchev"),38);
//     Test.assertEquals(solve("strength"),57);
//     Test.assertEquals(solve("catchphrase"),73);
//     Test.assertEquals(solve("twelfthstreet"),103);
//     Test.assertEquals(solve("mischtschenkoana"),80);
//     });

// PREP
// P: we are given a string of letters and no spaces
// R: we are to return a number corresponding to the highest value of the consonant strings when a = 1,b=2,c=3,... z=26.
// E: see above
// P: we split the string by vowels using regex. Then sum the consonants and push the totals into an array, finally return the largest number

function solve(s) {
    let regex = /[aeiou]/g

    let arr = s.split(regex)
    let results = []

    for (let i = 0; i < arr.length; i++) {
        let value = 0
        for (let j = 0; j < arr[i].length; j++) {
            value += (arr[i].codePointAt(j) - 96)
        }
        results.push(value)
    }


    return Math.max(...results)
  };

  console.log(solve("mischtschenkoana"))