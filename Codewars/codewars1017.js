// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative
// FUNDAMENTALSALGORITHMSARRAYS

// describe('Calculating Individual Ages ', function(){
//     it ("it returns 14,10 when passed 24,4", function(){
//       Test.assertSimilar(getAges(24,4), [14,10]);
//     });
//     it ("it returns null when passed 63,-14", function(){
//       Test.assertSimilar(getAges(63,-14), null);
//     });
//   });

// PREP
// P: we are given a sum and a difference of two ages.
// R: we are to return the two ages with the larger one first in an array.
// E: if the ages are [10, 7] the sum is 17, and the difference is 3. to calculate the ages from the sum and difference, 
// [x, y] 
// x + y = z(sum)
// x - y = w(difference)
// [w+y] + y = z
// 2y = z - w
// y = (z-w)/2
// x = z - y
function getAges(sum,difference){
    if ( sum < 0 || difference < 0) return null
    let y = (sum - difference)/2
    let x = sum - y

    if (x < 0 || y < 0) return null

    return [x, y] 
};