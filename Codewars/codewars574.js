// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
// maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
// Explanation:
// Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
// maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
// maxProduct ({10, 3, -1, -27} , 3)  return (-30)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou
// describe("Basic tests",() =>{
//     Test.assertEquals(maxProduct([4,3,5], 2), 20);
//     Test.assertEquals(maxProduct([10,8,7,9], 3), 720);
//     Test.assertEquals(maxProduct([8,6,4,6], 3), 288);
//     Test.assertEquals(maxProduct([10,2,3,8,1,10,4], 5), 9600);
//     Test.assertEquals(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5), 247895375);
//     Test.assertEquals(maxProduct([-4,-27,-15,-6,-1], 2), 4);
//     Test.assertEquals(maxProduct([-17,-8,-102,-309], 2), 136);
//     Test.assertEquals(maxProduct([10,3,-27,-1], 3), -30);
//     Test.assertEquals(maxProduct([14,29,-28,39,-16,-48], 4), -253344);
//     Test.assertEquals(maxProduct([1], 1), 1);
//   });

// PREP
// Parameters:
// given an array and a number of elements to multiply together- should be the largest
// results- return the product of the (k) number of largest elements in the given array.

// Pseudocode:
// first sort the array, then reduce the array with the .length equal to the given number.

function maxProduct(numbers, size){

    let sorted = numbers.sort((a,b) => b - a)
    let shortened = sorted.slice(0, size)
    let prod = shortened.reduce((acc,c) => acc * c,1)
    return prod
  }

//   or with a little bit of refactoring: 

function maxProduct(numbers, size){
    let sorted = numbers.sort((a,b) => b - a)
    let shortened = sorted.slice(0, size)
    return shortened.reduce((acc,c) => acc * c,1)
}