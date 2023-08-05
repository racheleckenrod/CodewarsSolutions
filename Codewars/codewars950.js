// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// describe("Basic tests", function() {
//     Test.assertEquals( checkThreeAndTwo(["a", "a", "a", "b", "b"]), true );
//     Test.assertEquals( checkThreeAndTwo(["a", "c", "a", "c", "b"]), false );
//     Test.assertEquals( checkThreeAndTwo(["a", "a", "a", "a", "a"]), false );
//   });

// PREP
// P: we are given an array of five elements of a combination of "a" "b" and "c"
// R: we are to return true if there is a combination of three elements of the same and two elements of another.
// E: if given ["a", "a", "a", "b", "b"] we are to return true
// P: make three arrays of each a,b,c and check for length of one three and one two.

function checkThreeAndTwo(array) {
    let a = []
    let b = []
    let c = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "a") {
            a.push("a")
        }else if (array[i] === "b") {
            b.push("b")
        }else {
            c.push("c")
        }
    }

    if ((a.length === 3 && b.length === 2) || (a.length === 3 && c.length === 2) ) {
        return true
    } else if ((b.length === 3 && c.length === 2) || (b.length === 3 && a.length === 2) ) {
        return true
    } else if ((c.length === 3 && a.length === 2) || (c.length === 3 && b.length === 2) ) {
        return true
    } else {
        return false
    }
    //your code here
  }