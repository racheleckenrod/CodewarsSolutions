// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

// fixture.random(10,0);
// fixture.random(10,10);
// fixture.random(10,100);
// fixture.random(10,1000);
// describe("Testing with [1, 3, 4]", function() {
//   Test.assertEquals(findMissing([1, 3, 4]), 2);
// });

// PREP
// P: we are given an array of numbers
// R: we are to return the missing number from the arithmetic progression
// E: if given [2,4,8] we return 6
// P: since the smallest difference will show what the constant difference should be, we can find the smallest difference, then check for expected values until one is missing and return that value.




var findMissing = function (list) {  
    let difference =[]

    for (let i = 0; i < list.length-1; i++){
        difference.push(list[i + 1] - list[i])
    }

    let smDiff = Math.min(...difference.map(Math.abs))
    console.log(smDiff, difference)
    for (let i = 0; i < list.length; i++) {
        if(Math.abs(list[i +1] - list[i]) !== smDiff){
            if (list[0] < list[1]) {
                 return list[i] + smDiff
            } else {
                return list[i] - smDiff
            }
           
        }
    }
    return null;
  }

  console.log(findMissing([2,4,8]))