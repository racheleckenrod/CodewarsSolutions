// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
// Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
// Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);
//   });
// });

// Pseudocode:
// check arr for undefined and return it
// cube values using .map()
// reduce odd values
// filer arr item => item % 2 !== 0
// then reduce

function cubeOdd(arr) {
    for(let i = 0; i< arr.length; i++){
        console.log(typeof arr[i])
        if(typeof arr[i] != 'number'){
            return undefined
        }
    }
    let cubed = arr.map(item => item**3)

    return cubed.filter(item => item % 2 != 0).reduce((acc,c) => acc + c,0)
    }

    console.log(cubeOdd([9,1,2,3,4]))