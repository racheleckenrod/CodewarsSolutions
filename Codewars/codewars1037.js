// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

// Good luck!

// describe("Basic tests", function(){
//     Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
//     Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
//     Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);
//     });

// PREP
// P: we are given two arrays of strings
// R: we are to return an array of numbers stating how many times each string in the second array appears in the first array.
// E: if given ['abc', 'abc', 'dd', 'kkl', 'mm'] and ['mm', 'dd'] we should return [1,1]
// P: we can test the first array for each string in the second array, keeping track of the matches with a varibale and push the varibale to the return array after checking the first array.

function solve(a,b){
    let count = 0
    let result = []

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < a.length; j++){
            if (b[i] === a[j]) {
                count += 1
            }
        }
        result.push(count)
            count = 0
    }
    return result;
  }
  console.log(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']))