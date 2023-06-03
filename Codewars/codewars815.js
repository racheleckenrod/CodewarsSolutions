// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.
// More examples in the test cases.

// describe("Basic tests", function(){
//     Test.assertEquals(pairs([1,2,5,8,-4,-3,7,6,5]),3);
//     Test.assertEquals(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2);
//     Test.assertEquals(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0);
//     Test.assertEquals(pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4);
//     Test.assertEquals(pairs([73, 72, 8, 9, 73, 72]),3);
//     });

// PREP
// Parameters: we are given an array of pos and neg numbers
// Results: we are to return the number of consecutive number pairs.
// Pseudocode: if Math.abs(ar[0] - ar[1]) === 1  count ++, then check next pair 

function pairs(ar){
    let count = 0
    for(let i = 0; i < ar.length; i += 2){
        if(Math.abs(ar[i] - ar[i+1]) === 1){
            count ++
        }
    }
    return count
   };

   console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]))