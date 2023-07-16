// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

// Good luck! :-)

// describe("Basic Tests",() =>{
//     Test.assertEquals(lostSheep([1,2],[3,4],15),5);
//     Test.assertEquals(lostSheep([3,1,2],[4,5],21),6);
//     Test.assertEquals(lostSheep([5,1,4],[5,4],29),10);
//     Test.assertEquals(lostSheep([11,23,3,4,15],[7,14,9,21,15],300),178);
//     Test.assertEquals(lostSheep([2,7,13,17],[23,56,44,12,1,2,1,],255),77);
//     Test.assertEquals(lostSheep([2,5,8],[11,23,3,4,15,112,12,4],355),156);
//     Test.assertEquals(lostSheep([1,1,1,2,1,2],[2,1,2,1,2,1],30),13);
//     Test.assertEquals(lostSheep([5,10,15],[11,23,3,4,15],89),3);
//     Test.assertEquals(lostSheep([3,6,9,12],[3,2,1,2,3,1],44),2);
//     Test.assertEquals(lostSheep([],[],15),15);
//     })

// PREP
// P: we are given two arrays of numbers and a total number
// R: we are to return the result of summing all the numbers and subtracting that from the total
// E: if given [1,2,3],[2,4,6], 45, we are to return 45 - (6 + 12)
// P: to write a oneliner for this we use reduce to obtain the 6 and 12 in the above example.

function lostSheep(friday,saturday,total){
    return total - (friday.reduce((acc,c) => acc + c,0) + saturday.reduce((acc,c) => acc + c,0))
  }

  console.log(lostSheep([11,23,3,4,15],[7,14,9,21,15],300),178)