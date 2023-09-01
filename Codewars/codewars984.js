// Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

// Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)

// Note 2: do not modify the input array.

// QUEUESARRAYSLISTSRECURSIONFUNDAMENTALS


// describe("Basic tests",() =>{
//     Test.assertDeepEquals(beggars([1,2,3,4,5],1),[15]);
//     Test.assertDeepEquals(beggars([1,2,3,4,5],2),[9,6]);
//     Test.assertDeepEquals(beggars([1,2,3,4,5],3),[5,7,3]);
//     Test.assertDeepEquals(beggars([1,2,3,4,5],6),[1,2,3,4,5,0]);
//     Test.assertDeepEquals(beggars([1,2,3,4,5],0),[]);
//   });

// PREP
// P: we are given an array of integers and a number, n.
// R: we are to return an array of length n, with the sums of the numbers in a carousel way, with the first number in the first element of the return array and the second number in the second index of the return array, when we get to the end of the return array, we are to go back and add the number to the first, and continue to loop through the given array to the end.
// E: if given [1,2,3,4] n = 2 we are to return [1 + 3, 2 + 4] or [4,6]
// P: as we loop through the given array, we can += the elements in the return array.. or sum the indexes of the given array with the % ? of each number up to n? both of those are a nested for loops? 


  function beggars(values, n){
    let result = new Array(n).fill(0)
    for (let i = 0; i < values.length; i++) {
       let index = i % n
       result[index] += values[i]

    }
    return result
}