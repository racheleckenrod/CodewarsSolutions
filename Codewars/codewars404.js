// You are given a string of n lines, each substring being n characters long. For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study the "horizontal" and the "vertical" scaling of this square of strings.

// A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

// Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.

// Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

// Example: a = "abcd\nefgh\nijkl\nmnop"
// scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
// Printed:

// abcd   ----->   aabbccdd
// efgh            aabbccdd
// ijkl            aabbccdd
// mnop            eeffgghh
//                 eeffgghh
//                 eeffgghh
//                 iijjkkll
//                 iijjkkll
//                 iijjkkll
//                 mmnnoopp
//                 mmnnoopp
//                 mmnnoopp
// Task:
// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".
// PREP
// Parameters:
// Given a string and two values, one for horizontal repeating (k)
// meaning repeating of the letter k times each (except, of course, for the new line charaters \n) and the other parameter is  (n) for how many times to repeat the line of characters.
// Results: are to return a string that has the repeated charaters and the repeated lines with the \n newlines included
// see example above
// I'm thinking to split into an array at the \n characters and eventually to rejoin it with them , but that should get them out of the way. We will have to do the repeating charaters first (k)  and then do the repeating "words" Maybe a for Each and a repeat for (k)

function scale(string, k, n) {
    if(string === "") return ""
    let arr = string.split("\n")
    let str = ""
    console.log(arr)
    arr = arr.map(item => item.split("").map( letter => letter.repeat(k)).join(""))
    arr = arr.map( item => (item + '\n').repeat(n))
    console.log(arr)

    return arr.join("").replace(/\n$/, "")
    // your code
}

console.log(scale("abcd\nefgh\nijkl\nmnop",2,3))

// a map inside of a map...