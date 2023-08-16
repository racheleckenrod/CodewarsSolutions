// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// Happy coding! :)

// const Test = require('@codewars/test-compat');

// describe("Longest repetition", ()=>{
//   it("Example tests", function(){
//     Test.assertDeepEquals( longestRepetition("aaaabb"),      ["a",4] );
//     Test.assertDeepEquals( longestRepetition("bbbaaabaaaa"), ["a",4] );
//     Test.assertDeepEquals( longestRepetition("cbdeuuu900"),  ["u",3] );
//     Test.assertDeepEquals( longestRepetition("abbbbb"),      ["b",5] );
//     Test.assertDeepEquals( longestRepetition("aabb"),        ["a",2] );
//     Test.assertDeepEquals( longestRepetition(""),            ["",0] );
//     Test.assertDeepEquals( longestRepetition("ba"),          ["b",1] );
//   });
// });

// PREP
// P: we are given a string of characters
// R: we are to return an array with the longest repeating character and the number of repeats of it.
// E: if given "2223jkk23" we are to return ["2", 3]
// P: since we are to return the first longest, we will want to set the char and the number and only overwrite it if a subsequent repeating char Exceeds it. so set the count = 0 and char = '' Run a loop to increase count if it exceeds 0
// do I need to make s into array and loop through it, checking if the next char is === to the one we are looking at? 


// function longestRepetition(s) {
//     let char = ""
//     let count = 0
//     let arr = s.split("")
//     let temp = 1

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) {
//             console.log(arr[i])
//             temp += 1
//         } else if ( temp > count) {
//             char = arr[i]
//             count = temp
//             temp = 1
//         }
//     }




//     return [char, count];
//   }
// console.log(longestRepetition("bbbaaabaaaa"), ["a",4] )

// Copy code
// function longestRepetition(s) {
//     let char = "";
//     let count = 0;
//     let arr = s.split("");
//     let temp = 1;

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) {
//             temp += 1;
//         } else if (temp > count) {
//             char = arr[i];
//             count = temp;
//             temp = 1; // Reset temp to 1, not 0
//         }
//     }

//     // Check the last character
//     if (temp > count) {
//         char = arr[arr.length - 1];
//         count = temp;
//     }

//     return [char, count];
// }

function longestRepetition(s) {
    if (s.length === 0) {
        return ["", 0];
    }

    let char = s[0];
    let count = 1;
    let maxChar = char;
    let maxCount = count;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === char) {
            count++;
            if (count > maxCount) {
                maxCount = count;
                maxChar = char;
            }
        } else {
            char = s[i];
            count = 1;
        }
    }

    return [maxChar, maxCount];
}

console.log(longestRepetition("bbbbaaabaaaa")); // Output: ["a", 4]
// This code will give you the character with the longest consecutive repetition along with its length. If the string is empty, it will return ["", 0] as specified.






