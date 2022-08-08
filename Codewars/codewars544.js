// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(consecutive([4,8,6]),2);
//   Test.assertEquals(consecutive([1,2,3,4]),0);
//   Test.assertEquals(consecutive([]),0);
//   Test.assertEquals(consecutive([1]),0);
//     });
//   });

// PREP

//   Parameters:
// we are given an array
// are to return the number of numbers needed to fill in the gaps between the given numbers
// Examples:
// an array of [1,3,5,6] would need 2 and 4 so should return 2
// and [1,6,7,8] needs 2,3,4,5 so should return 4

// Pseudocode:
// a for loop that checks for increasing values and counts how many needed to fill it in should work.

function consecutive(arr) {
    let count = 0
    arr = arr.sort((a,b) => a - b)
    for(let i = arr[0]; i < arr[arr.length - 1]; i++){
        console.log(i, arr[arr.length - 1])
        if(!arr.includes(i + 1)){
            count += 1
            console.log(i)
        }
    }
    return count
}
console.log(consecutive([4,8,6]))