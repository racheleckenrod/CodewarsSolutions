// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!

// Please also try Simple remove duplicates

// describe("Basic tests", function(){
//     Test.assertEquals(solve("xyab","xzca"),"ybzc");
//     Test.assertEquals(solve("xyabb","xzca"),"ybbzc");
//     Test.assertEquals(solve("abcd","xyz"),"abcdxyz");
//     Test.assertEquals(solve("xxx","xzca"),"zca");
//     });

// PREP
// P: we are given two strings
// R: we are to return the unique chars from string one with the unique chars from stringtwo.
// E: if given "abcd" and 'sabwf' we are to return 'cdswf'
// P: if we make copies of the strings, and replace letters from the other strings with "" on each one, then return the concatonation.


function solve(a,b){
    let regexA = new RegExp(`[${a}]`, "g")
    let regexB = new RegExp(`[${b}]`, "g")
    let strA = a.slice(0)
    let strB = b.slice(0)

    return strA.replace(regexB, "") + strB.replace (regexA, "")

    //..
   };
   console.log(solve("xyabb", "xzca"), 'ybbzc')