// In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. Your task is to find the maximum product that can be formed by taking any one element from each sub-array.

// Examples:
// solve( [[1, 2],[3, 4]] ) = 8. The max product is given by 2 * 4
// solve( [[10,-15],[-1,-3]] ) = 45, given by (-15) * (-3)
// solve( [[1,-1],[2,3],[10,-100]] ) = 300, given by (-1) * 3 * (-100)
// More examples in test cases. Good luck!

// PREP
// Parameters :
// we are given a multidimensional array of pos and neg integers
// Return:
// we are to return the maximum product obtainable from taking one number from each array. This is a bit tricky because of the negative numbers and the possibility of multiplying two negs to make a positive, and therefore larger number, but only if there are an even number of negatives. 
// Example:
// with an array of [[1,2,3], [-1,-2,-3], [1,2,3]]
// finding the largest... because we will need to use a negative from array[1], the absolute value should be the smallest, thereby giving us the largest value. so -1. (1,-1,1) would be the largest number possible. 
// one way to do this is compare all possible combinations...
// a for loop running for the origninal array, taking each array of the array and take the first element of the first array and multiply it with all the combinations. somehow. then take the second element of the first array and do the same thing, move on to the second array and start with the first element etc.

// to get that somehow.. for all possible combinations , could we push a map array into newArr for each element of each array? the first ones will have more values, and decrease as we move through the arrays.

// so that first one  would be array [1] element [0] times 

// here is an example of using strings and finding all possible combinations:

// var arr2d = [['red', 'blue'],['cotton','polyester','silk'],['large','medium','small']]

// function combos(list, n = 0, result = [], current = []){
//     if (n === list.length) result.push(current)
//     else list[n].forEach(item => combos(list, n+1, result, [...current, item]))
 
//     return result
// }
// console.log(combos(arr2d))
// I see it gives the results I am looking for to do this problem, but I dont exactly see the code. Let's see if I can use this code to accomplish my goals here:

function solve(arr, n = 0, result = [], current = []){
    if(n === arr.length) result.push(current)
    else arr[n].forEach(item => solve(arr, n+1, result, [...current, item]))

    return Math.max(...result.map(item => item.reduce((acc,c) => acc * c, 1)))
}

// describe("Basic tests", function(){
//     Test.assertEquals(solve([[1, 2],[3, 4]]),8);
//     Test.assertEquals(solve([[10,-15],[-1,-3]]),45);
//     Test.assertEquals(solve([[-1,2,-3,4],[1,-2,3,-4]]),12);
//     Test.assertEquals(solve([[-11,-6],[-20,-20],[18,-4],[-20, 1]]),17600);
//     Test.assertEquals(solve([[14,2],[0,-16],[-12,-16]]),3584);
//     Test.assertEquals(solve([[-3,-4],[1,2,-3]]),12);

// 
console.log(solve([[-11,-6],[-20,-20],[18,-4],[-20, 1]]))