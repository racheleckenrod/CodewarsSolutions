// A squared string is a string of n lines, each substring being n characters long. We are given two n-squared strings. For example:

// s1 = "abcd\nefgh\nijkl\nmnop" s2 = "qrst\nuvwx\nyz12\n3456"

// Let us build a new string strng of size (n + 1) x n in the following way:

// The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
// The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate (second from last) line of s2 except the last char
// and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.
// Calling this function compose(s1, s2) we have:

// compose(s1, s2) -> "a3456\nefyz1\nijkuv\nmnopq"
// or printed:
// abcd    qrst  -->  a3456
// efgh    uvwx       efyz1
// ijkl    yz12       ijkuv
// mnop    3456       mnopq

// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }

// describe("compose",function() {
//     testing(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"), 
//             "bNkTB\nhTrWO\nRTFVi\nCnnIj")
//     testing(compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW"), 
//             "HgYPW\nTGGbM\nIPhqt\nuUMDH")
//     testing(compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf"), 
//             "tzlYf\nOOmYF\nsqPEZ\nxMkBh")
// })

// PREP:
// given two strings, both with \n chars and the same number of chars in between the \n's. 
// are to return a new string combining the two given strings in a particular way. 

// the first line is (the first char of the first line of s1 + the chars of the last line of s2)
// the second line is (the first two chars of the second line of s1 + the second from last line of s2, except the last char)  and so on (??)

// the last line will have : 
// the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.
// or - the last line will have all the chars of the last line plus the first char of the the first line of s2.

// lets see about writing that in some pseudocode...
// split the strings by the \n char so we can deal with arrays.
// we have four elements in our arrays...
// first we take s1.slice(i)  then  + s2.slice(0, s2.length - (i + 1))

function compose(s1, s2) {
    s1 = s1.split("\n")
    s2 = s2.split("\n")
    console.log(s1, s2)
    let s3 = []
    for(let i = 0; i < s1.length; i++){
        s3.push(s1[i].slice(0,i+1) + s2[s2.length- (i+1)].slice(0, s2.length - (i)))
    }

    return s3.join("\n")
}
console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"))