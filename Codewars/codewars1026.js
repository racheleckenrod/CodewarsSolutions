// You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// Return:

// 0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
// 1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
// n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")
// Examples
// "1 2 3 4"  ==>  return 0, because the sequence is complete

// "1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

// "2 1 3 a"  ==>  return 1, because it contains a non numerical character

// "1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

// "1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest


// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(findMissingNumber("1 2 3 5"),4,"It must work for missing middle terms")
//   Test.assertEquals(findMissingNumber("1 3"),2,"It must work for missing middle terms")
//   Test.assertEquals(findMissingNumber("1 5"),2,"It must work for missing more than one number")
//   Test.assertEquals(findMissingNumber(""), 0,"It must return 0 for an empty sequence")
//   Test.assertEquals(findMissingNumber("1 2 3 4 5"),0,"It must return 0 if no number is missing")
//   Test.assertEquals(findMissingNumber("2 3 4 5"),1,"It must return 1 for a sequence missing the first element")
//   Test.assertEquals(findMissingNumber("2 6 4 5 3"),1,"It must work for a shuffled input")
//   Test.assertEquals(findMissingNumber("2 1 4 3 a"),1,"It must return 1 for an invalid sequence")
//     });
//   });
  
// PREP
// P: we are given a string of numbers separated by spaces may contain non-numeric chars.
// R: we are to return 0 if the numbers are in a sequence (order doesnt matter ), return 1 if there are any non-numberic chars, and return n - the next number in the sequence if there are missing nums.
// E: if given '1 2 3' we return 0, if given '1 3' we return 2, if given '1 w 2' we return 1.
// P: first to check for anything other than a digit and return 1 if there is, then split the string into array and sort it, check if the difference between the elements is > 1, and if it is, return the element plus one where the test fails, if all elements are one number apart, return 0.



function findMissingNumber(sequence){
    if (sequence.match(/[^0-9]/)) return 1

    let nums = sequence.split(' ').map(item => +item).sort((a,b) => a - b)

    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i + 1] - nums[i] > 1) {
            return nums[i] + 1
        }
    }

    return 0
    //your code here
  }