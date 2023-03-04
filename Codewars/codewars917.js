// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

// Please also try Simple remove duplicates

// describe("Basic tests", function(){
//     Test.assertEquals(solve('gh12cdy695m1'),695);
//     Test.assertEquals(solve('2ti9iei7qhr5'),9);
//     Test.assertEquals(solve('vih61w8oohj5'),61);
//     Test.assertEquals(solve('f7g42g16hcu5'),42);
//     Test.assertEquals(solve('lu1j8qbbb85'),85);
//     });


// PREP
// P: we are given a string with lowercase letters and numbers
// R: we are to return the largest number in the string.
// E: if given "a1b2c3" we are to return 3
// P: is it possible to split the string on letters? then we could have the multiple digit numbers stay together. yes, and I can use Math.max instead of the sorting.

// function solve(s){
//     s = s.split(/[a-z]/).sort((a, b) => b - a  )

//     return s[0]
//     //..
//     };



// function solve(s){
//     s = s.split(/[a-z]/)

//     return Math.max(...s)
//     //..
//     };

// and further can be a oneliner:


function solve(s){
    return Math.max(...s.split(/[a-z]/))
    };

    