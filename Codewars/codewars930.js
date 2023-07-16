// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

// const Test = require('@codewars/test-compat');

// describe("Mix",function() {
// it("Basic tests",function() {    
//     Test.assertEquals(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
//     Test.assertEquals(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
//     Test.assertEquals(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
//     Test.assertEquals(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
//     Test.assertEquals(mix("codewars", "codewars"), "")
//     Test.assertEquals(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")
// })})

// PREP
// P: we are given two strings
// R: we are to return a string conatining a count of lowercase letters (greater than one). it is to show which of the two strings the greater count of the letter is (if the same for both an equals sign is to be used), be arranged in descending order of the number of repeats (then alphabetically), and joined with a "/"
// E: see examples above
// P: first we need to count the lowercase letters in the strings, then compare and make an array with the max retaining the string number it came from and make the =: if the same. because we need to sort by most repeating letters, making an object to hold the counts, then repeat the letter that many times printing it to the final string.

function mix(s1, s2) {

    let tally1 = {}
    let tally2 = {}

    for (let i = 0; i < s1.length; i++) {
        let char = s1[i]
        if (/[a-z]/.test(char)) {
            tally1[char] = (tally1[char] || 0 ) + 1
        }
    }


    for (let i = 0; i < s2.length; i++) {
        let char = s2[i]
        if (/[a-z]/.test(char)) {
            tally2[char] = (tally2[char] || 0 ) + 1
        }
    }

    let result = []

    for (const char in tally1) {
        let count1 = tally1[char]
        let count2 = tally2[char] || 0

        if (count1 > 1 || count2 > 1) {
            let source = count1 > count2 ? '1' : count2 > count1 ? '2' : '='
            let count = Math.max(count1, count2)
            let substring = `${source}:${char.repeat(count)}`
            result.push(substring)
        }
    }

    for (const char in tally2) {
        let count1 = tally1[char] || 0
        let count2 = tally2[char]

        if (count1 === 0 && count2 > 1 ) {
            const substring = `2:${char.repeat(count2)}`
            result.push(substring)
        }
    }
    
   result.sort((a,b) => {
//    sort by length in descending order
    if (a.length !== b.length) {
        return b.length - a.length
    }
    // sort by prefix so "=" is last
    if (a[0] !== b[0]) {
        if (a[0] === "=") return 1
        if (b[0] === "=") return -1
        return a[0].localeCompare(b[0])
    }
    // sort lexigraphically in ascending order
    return a.localeCompare(b)
})
   return result.join('/')
    // your code
  }

  console.log(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")